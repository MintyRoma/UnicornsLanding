import {Separator} from "@/components/ui/separator";
import Link from "next/link";

function FooterComponent()
{
    return(<footer>
        <Separator></Separator>
        <section className="px-8 md:px-24 py-8 flex flex-col md:flex-row justify-between text-gray-400">
            <div className="py-4 md:w-1/3">
                <p>Разработка и дизайн MintyR</p>
                <p>Проект доступен на <span className="underline"><Link href="https://github.com/MintyRoma/UnicornsLanding">Github</Link></span></p>
            </div>
            <div className="py-4 md:w-1/3">
                <p>Материалы (изображения) этого сайта защищены на основании законодательства об охране интеллектуальной собственности Российской Федерации</p>
                <p>© 2020-2025, Unicorns Group</p>
            </div>
        </section>
    </footer>)
}

export default FooterComponent;