import {Separator} from "@/components/ui/separator";

function FooterComponent()
{
    return(<footer>
        <Separator></Separator>
        <section className="px-24 py-8 flex justify-between text-gray-400">
            <div className="w-1/3">
                <p>Разработка и дизайн MintyR</p>
                <p>Проект доступен на Github</p>
            </div>
            <div className="w-1/3">
                <p>Материалы (изображения) этого сайта защищены на основании законодательства об охране интеллектуальной собственности Российской Федерации</p>
                <p>© 2020-2024, Unicorns Group</p>
            </div>
        </section>
    </footer>)
}

export default FooterComponent;