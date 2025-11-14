export default function Info() {
    return (
        <div className="break-inside-avoid content-center space-y-4 transition-colors duration-400">
            <div className="custom-card py-6">
                <h3 className="text-lg"> Noora Issula </h3>
                <p className="text-sm font-extralight text-info mb-6"> Lappeenranta, Finland </p>
                <ul className="list-disc list-inside text-xs mb-6">
                    <li>IT student at Xamk</li>
                    <li>B.Sc. (Econ.)</li>
                    <li>Self-taught graphic designer</li>
                </ul>
                <p className="text-xs text-accent">Languages</p>
                <p className="text-sm font-extralight mb-2">
                    JavaScript, TypeScript, HTML, CSS
                </p>
                <p className="text-xs text-accent">Frontend</p>
                <p className="text-sm font-extralight mb-2">
                    React, React Native, Next.js, Tailwind CSS, Daisy UI, Material UI
                </p>
                <p className="text-xs text-accent">Backend</p>
                <p className="text-sm font-extralight mb-2">
                    Node.js, Express.js, Multer, REST API, Supabase
                </p>
                <p className="text-xs text-accent">Databases & ORM</p>
                <p className="text-sm font-extralight mb-2">
                    MySQL, SQLite, SQL Server, MongoDB, Prisma ORM
                </p>
                <p className="text-xs text-accent">Version control & collaboration</p>
                <p className="text-sm font-extralight mb-2">
                    Git, GitHub
                </p>
                <p className="text-xs text-accent">Other</p>
                <p className="text-sm font-extralight mb-2">
                    InDesign, Illustrator, After Effects, Photoshop, WordPress 
                </p>
            </div>
        </div>
    );
}
