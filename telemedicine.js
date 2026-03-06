// MediBridge - Telemedicine/WebRTC Module

class TelemedicineManager {
    constructor() {
        this.localStream = null;
        this.remoteStream = null;
        this.peerConnection = null;
        this.currentCall = null;
        this.setupListeners();
    }

    setupListeners() {
        document.getElementById('toggleAudio')?.addEventListener('click', (e) => {
            this.toggleAudio(e.target);
        });

        document.getElementById('toggleVideo')?.addEventListener('click', (e) => {
            this.toggleVideo(e.target);
        });

        document.getElementById('endCall')?.addEventListener('click', () => {
            this.endCall();
        });
    }

    async startCall(appointmentId, isInitiator = true) {
        this.currentCall = {
            appointmentId,
            startTime: new Date().toISOString(),
            isInitiator
        };

        try {
            // Request camera and microphone access
            this.localStream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: { width: { max: 640 }, height: { max: 480 } }
            });

            const localVideo = document.getElementById('localVideo');
            if (localVideo) {
                localVideo.srcObject = this.localStream;
            }

            app.showModal('callModal');
            app.showToast('success', 'Call started');

            // In production, would use a WebRTC signaling server
            this.setupPeerConnection();

        } catch (error) {
            console.error('Error accessing media devices:', error);
            app.showToast('error', 'Failed to access camera/microphone');
        }
    }

    setupPeerConnection() {
        const configuration = {
            iceServers: [
                { urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] }
            ]
        };

        try {
            this.peerConnection = new RTCPeerConnection(configuration);

            // Add local stream tracks
            if (this.localStream) {
                this.localStream.getTracks().forEach(track => {
                    this.peerConnection.addTrack(track, this.localStream);
                });
            }

            // Handle remote stream
            this.peerConnection.addEventListener('track', (event) => {
                console.log('Received remote track:', event.track.kind);
                const remoteVideo = document.getElementById('remoteVideo');
                if (remoteVideo && event.streams[0]) {
                    remoteVideo.srcObject = event.streams[0];
                }
            });

            // Handle connection state changes
            this.peerConnection.addEventListener('connectionstatechange', () => {
                console.log('Connection state:', this.peerConnection.connectionState);
                if (this.peerConnection.connectionState === 'failed' ||
                    this.peerConnection.connectionState === 'disconnected') {
                    this.endCall();
                }
            });

            app.showToast('info', 'Call connection established');

        } catch (error) {
            console.error('Error setting up peer connection:', error);
            app.showToast('error', 'Failed to establish connection');
        }
    }

    toggleAudio(button) {
        if (this.localStream) {
            const audioTracks = this.localStream.getAudioTracks();
            audioTracks.forEach(track => {
                track.enabled = !track.enabled;
            });
            button.style.opacity = audioTracks[0]?.enabled ? '1' : '0.5';
        }
    }

    toggleVideo(button) {
        if (this.localStream) {
            const videoTracks = this.localStream.getVideoTracks();
            videoTracks.forEach(track => {
                track.enabled = !track.enabled;
            });
            button.style.opacity = videoTracks[0]?.enabled ? '1' : '0.5';
        }
    }

    endCall() {
        if (this.localStream) {
            this.localStream.getTracks().forEach(track => track.stop());
        }

        if (this.peerConnection) {
            this.peerConnection.close();
        }

        const localVideo = document.getElementById('localVideo');
        const remoteVideo = document.getElementById('remoteVideo');
        if (localVideo) localVideo.srcObject = null;
        if (remoteVideo) remoteVideo.srcObject = null;

        app.hideModal('callModal');

        if (this.currentCall) {
            this.saveCallRecord();
        }

        this.currentCall = null;
    }

    saveCallRecord() {
        if (!this.currentCall) return;

        const callRecord = {
            ...this.currentCall,
            endTime: new Date().toISOString(),
            duration: this.getCallDuration()
        };

        const apt = storage.getAppointmentById(this.currentCall.appointmentId);
        if (apt) {
            storage.updateAppointment(this.currentCall.appointmentId, {
                callRecord
            });
        }
    }

    getCallDuration() {
        if (!this.currentCall) return 0;
        return Math.floor((new Date() - new Date(this.currentCall.startTime)) / 1000);
    }

    scheduleCallReminder(minutesBefore = 5) {
        // Would implement call reminders here
    }
}

// Initialize telemedicine
const telemedicine = new TelemedicineManager();

// Start call from appointment
function startCall(appointmentId) {
    telemedicine.startCall(appointmentId, true);
}

// fallback for browsers without getUserMedia
if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    console.warn('WebRTC not supported. Using fallback chat-only mode.');
}
