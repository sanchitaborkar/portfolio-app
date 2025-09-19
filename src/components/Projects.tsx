interface ProjectData {
    id: number,
    title: string,
    viewUrl: string,
    image: string,
    github: string
}

interface ProjectsProps {
    list: ProjectData[]
}

function Projects({ list }: ProjectsProps) {

    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
            <h3 className="text-2xl font-semibold mb-6">Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {list.map((p) => {
                    const bg = p?.image && { backgroundImage: `url(${p.image})` };
                    return (
                        <article key={p.id} className="p-4 rounded-xl bg-white/4 hover:translate-y-1 transition">
                            <div style={bg || {}} className={`h-40 rounded-md bg-cover bg-no-repeat bg-center ${!bg && "bg-gradient-to-br"} from-indigo-700 to-pink-600 flex items-end text-white font-semibold relative overflow-hidden`}>
                                <div className="absolute h-full w-full bg-gradient-to-t from-gray-900 to-transparent"></div>
                                <div className="p-4 z-10">
                                    {p.title}
                                </div>
                                </div>
                            <div className="mt-3 flex justify-between items-center">
                                <a href={p.viewUrl} target="_blank" className="text-sm text-indigo-300">View</a>
                                <a href={p.github} target="_blank" className="text-sm text-gray-300">GitHub</a>
                            </div>
                        </article>
                    )
                })}
            </div>

            {
                list.length >= 5 && <div className="mt-8 flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-indigo-600">See More</button>
                <button className="px-4 py-2 rounded-lg border border-gray-700">Filter</button>
            </div>
            }
        </section>
    )
}
export default Projects