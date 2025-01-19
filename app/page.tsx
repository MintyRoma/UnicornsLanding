'use client'
import AuraBackground from "@/components/ui/aura-background";
import Achivements from "@/components/achievements-component";



export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-left justify-between m-8 md:m-24 space-y-16">
          <section className="mb-32 w-1/2 h-1/2">
              <div className="absolute w-full h-1/3 top-16 md:h-5/6 left-0">
                  <AuraBackground className="w-[90vw] h-[90vw] lg:w-[45vw] lg:h-[45vw] left-[10%] top-[35%]" delay="0s" />
                  <AuraBackground className="w-[90vw] h-[90vw] lg:w-[45vw] lg:h-[45vw] left-[21%] top-[42%]" delay="-3s" />
                  <AuraBackground className="w-[90vw] h-[90vw] lg:w-[45vw] lg:h-[45vw] left-[29%] top-[54%]" delay="-7s" />
                  <AuraBackground className="w-[90vw] h-[90vw] lg:w-[45vw] lg:h-[45vw] left-[32%] top-[37%]" delay="-5s" />
                  <AuraBackground className="w-[90vw] h-[90vw] lg:w-[45vw] lg:h-[45vw] left-[20%] top-[44%]" delay="-11s" />
                  <AuraBackground className="w-[90vw] h-[90vw] lg:w-[45vw] lg:h-[45vw] left-[32%] top-[32%]" delay="-13s" />
                  <AuraBackground className="w-[90vw] h-[90vw] lg:w-[45vw] lg:h-[45vw] left-[10%] top-[60%]" delay="-17s" />
              </div>
              <div className="size-full lg:text-9xl md:text-6xl text-4xl font-semibold flex flex-col items-left justify-between h-1/2 space-y-2">
                  <p>UNIQUE</p>
                  <p>UNITED</p>
                  <p>UNBOUNDED</p>
              </div>
          </section>

          <section className="flex flex-col between space-y-4 md:space-y-8">
          <h1 className="text-2xl md:text-4xl font-semibold">Наши достижения</h1>
              <Achivements/>
          </section>

          <section className="flex flex-col between space-y-4 md:space-y-8">
              <h1 className="text-2xl md:text-4xl font-semibold">О проекте</h1>
              <p className="text-lg md:text-xl">
                  UNICORNS Group - Частный любительский проект по разработке и эксплуатации различных PET проектов.
                  Здесь мы разрабатываем, тестируем, а также развертываем различные веб-приложения, которые на наш
                  взгляд полезны или прикольны.
              </p>
          </section>

          <section className="flex flex-col between space-y-4 md:space-y-8">
              <h1 className="text-2xl md:text-4xl font-semibold">О финансировании</h1>
              <p className="text-lg md:text-xl">
                  Вся инфраструктура содержится за наш счет.
              </p>
          </section>

          <section className="flex flex-col between space-y-4 md:space-y-8">
              <h1 className="text-2xl md:text-4xl font-semibold">Являемся ли мы хостингом?</h1>
              <p className="text-lg md:text-xl">
                  Нет! Это просто инфраструктура для деплоя прикольных штук, мы не оказываем коммерческую эксплуатацию нашей инфраструктуры.
              </p>
          </section>
      </main>
  );
}
