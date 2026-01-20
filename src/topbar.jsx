const Topbar = () => {
    document.title = "Make Cyber Securty Team"
    return (
        <div class="max-w-6xl mx-auto mt-2 p-4 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl border border-cyan-500/30">
            <h2 class="text-3xl md:text-4xl font-extrabold text-cyan-400 text-center tracking-wide mx-auto">
                 Cyber Security Team
            </h2>
            <p class="mt-2 text-gray-300 text-center text-base md:text-lg leading-relaxed">
                Our server is currently under attack.  
                To ensure maximum protection, we are hiring a **specialized cyber security team**.
            </p>
            <div class="mt-4 flex justify-center">
                <div class="px-6 py-4 bg-gray-800 rounded-xl border border-cyan-400/40 shadow-lg">
                    <p class="text-gray-400 text-sm uppercase tracking-wider text-center">
                        Total Budget
                    </p>
                    <h2 class="text-3xl font-bold text-cyan-300 text-center mt-1">
                         10 Million
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Topbar;