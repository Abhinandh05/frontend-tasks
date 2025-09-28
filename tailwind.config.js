module.exports = {
    theme: {
        extend: {
            keyframes: {
                pulseWave: {
                    "0%, 100%": { transform: "scale(1)", opacity: "0.4" },
                    "50%": { transform: "scale(1.15)", opacity: "1" },
                },
                blink: {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0 },
                },
                buttonPulse: {
                    "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(239, 68, 68, 0.7)" },
                    "50%": { transform: "scale(1.05)", boxShadow: "0 0 20px 5px rgba(239, 68, 68, 0.5)" },
                },
            },
            animation: {
                pulseWave: "pulseWave 3s ease-in-out infinite",
                blink: "blink 1.2s infinite",
                buttonPulse: "buttonPulse 1.5s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
