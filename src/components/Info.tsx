export default function Info() {
    return (
        <div className="break-inside-avoid content-center space-y-4 transition-colors duration-400">
            <div className="custom-card py-6">
                <h3 className="text-lg"> Noora Issula </h3>
                <p className="text-sm font-extralight text-info mb-6"> Lappeenranta, Finland </p>
                <ul className="list-disc list-inside text-xs font-light  mb-6">
                    <li>IT student at Xamk</li>
                    <li>B.Sc. (Econ.)</li>
                    <li>Self-taught graphic designer</li>
                </ul>

                <p className="text-xs font-extralight mb-2">Familiar with...</p>

                <p className="text-xs font-extralight text-accent">Languages</p>
                <p className="text-sm font-light mb-2">
                    JavaScript, TypeScript, Solidity, HTML, CSS
                </p>
                <p className="text-xs font-extralight text-accent">Frontend</p>
                <p className="text-sm font-light mb-2">
                    React, React Native, Next.js, Tailwind CSS, daisyUI, Material UI
                </p>
                <p className="text-xs font-extralight text-accent">Backend</p>
                <p className="text-sm font-light mb-2">
                    Node.js, Express, REST APIs, Supabase
                </p>
                <p className="text-xs font-extralight text-accent">Databases & ORM</p>
                <p className="text-sm font-light mb-2">
                    SQLite, SQL Server, PostgreSQL, MongoDB, Prisma ORM
                </p>
                <p className="text-xs font-extralight text-accent">Version control & collaboration</p>
                <p className="text-sm font-light mb-2">
                    Git, GitHub
                </p>
                <p className="text-xs font-extralight text-accent">Other</p>
                <p className="text-sm font-light mb-2">
                    Scaffold-ETH 2, WordPress, InDesign, Illustrator, After Effects, Photoshop 
                </p>
            </div>
        </div>
    );
}
