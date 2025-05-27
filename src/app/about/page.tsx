import { studies} from '@/data/education';
import EducationCard from '@/components/EducationCard';
import Image from 'next/image';

export default function About() {
    return (
        <section className="max-w-3xl mx-auto py-10 px-4">
            <div className='flex flex-col md:flex-row gap-8'>
                <Image 
                    src="/pfp.jpg" 
                    width={218.88} 
                    height={291.84} 
                    alt="Profile picture of Noora Issula" 
                    className='self-start h-fit shadow-md rounded-lg'/>
                
                <div className='flex flex-col w-auto'>
                    <h1 className="text-4xl font-tinos mb-6 text-amaranth-purple">About Me</h1>
                    
                    <p className="text-lg text-gray-700 mb-4">
                        I am a third-year IT student at South-Eastern Finland University of Applied Sciences. My studies specialize in full-stack development. 
                        As of now, I am seeking an internship to complete my studies, with an interest in long-term employment opportunities.
                    </p>
                
                    <p className="text-lg text-gray-700 mb-4">
                        Besides software development, I have a passion for graphic design. 
                        I have designed a few logos and advertisements for companies/private individuals. 
                    </p>
                </div>
            </div>

            <p className="text-lg text-gray-700">
                I often spend my free time to improve my skills with personal projects such as application development or website design. 
                However, I like to relax by enjoying a game or two every now and then.
            </p>

            <div className="flex flex-col space-y-4 mt-10">
                <h2 className="text-3xl font-tinos mb-6 text-tyrian-purple">Education</h2>
                {studies.map((education) => (
                <EducationCard key={`${education.school}-${education.degree}`} {...education}/>
                ))}
            </div>
        </section>
    );
}
