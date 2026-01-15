export default function Info() {
    return (
        <div className="break-inside-avoid content-center space-y-4 transition-colors duration-400">
            <h2 className="text-accent">
                Familiar with...
            </h2>

            <div className="custom-card">
                <div className="divider divider-start text-xs font-semibold text-secondary-content">Languages</div>
                <p className="text-sm mb-2">
                    JavaScript, TypeScript, Solidity, HTML, CSS
                </p>
                <div className="divider divider-start text-xs font-semibold text-secondary-content">Frontend</div>
                <p className="text-sm  mb-2">
                    React, React Native, Next.js, Tailwind CSS, daisyUI, Material UI
                </p>
                <div className="divider divider-start text-xs font-semibold text-secondary-content">Backend</div>
                <p className="text-sm mb-2">
                    Node.js, Express, REST APIs, Supabase
                </p>
                <div className="divider divider-start text-xs font-semibold text-secondary-content">Databases & ORM</div>
                <p className="text-sm mb-2">
                    SQLite, SQL Server, PostgreSQL, MongoDB, Prisma ORM
                </p>
                <div className="divider divider-start text-xs font-semibold text-secondary-content">Version control & collaboration</div>
                <p className="text-sm mb-2">
                    Git, GitHub
                </p>
                <div className="divider divider-start text-xs font-semibold text-secondary-content">Other</div>
                <p className="text-sm mb-2">
                    Scaffold-ETH 2, WordPress, InDesign, Illustrator, After Effects, Photoshop 
                </p>
            </div>
        </div>
    );
}
