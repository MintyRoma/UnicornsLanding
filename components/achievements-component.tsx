import {Card, CardDescription } from "@/components/ui/card";

const achivements = [
    {
        objective: "99.9%",
        name: "SLI за 2025 год"
    },
    {
        objective: "7",
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
                    <Card className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] p-6 md:p-8 flex flex-col between space-y-4" key={achive.name}>
                        <h2 className="text-4xl md:text-6xl font-semibold">{achive.objective}</h2>
                        <CardDescription>{achive.name}</CardDescription>
                    </Card>
                )
            )}
        </div>
    )
}