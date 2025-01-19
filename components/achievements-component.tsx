import {Card} from "@/components/ui/card";

const achivements = [
    {
        objective: "99.95%",
        name: "SLI"
    },
    {
        objective: "5",
        name: "Серверов по всему миру"
    },
    {
        objective: "40+",
        name: "Внутренних сервисов"
    },
    {
        objective: "3",
        name: "Внешних проектов в инфраструктуре"
    }
]

export default function Achivements()
{
    return (
        <div className="flex flex-wrap content-start items-stretch gap-4">
            {achivements.map((achive) =>
                (
                    <Card className="w-auto p-8 flex flex-col between space-y-4" key={achive.name}>
                        <h2 className="text-4xl md:text-6xl font-semibold">{achive.objective}</h2>
                        <p className="w-64 text-lg md:text-xl">{achive.name}</p>
                    </Card>
                )
            )}
        </div>
    )
}