'use client'
import {Card} from "@/components/ui/card";
import AuraBackground from "@/components/ui/aura-background";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-left justify-between p-24 space-y-16">
          <section className="mb-32">
              <div className="w-1/2">
                  <AuraBackground className="w-1/2 h-1/2 left-[10%] top-[35%]" delay="0s"/>
                  <AuraBackground className="w-1/2 h-1/2 left-[21%] top-[42%]" delay="-8s"/>
                  <AuraBackground className="w-1/2 h-1/2 left-[29%] top-[54%]" delay="-7s"/>
                  <AuraBackground className="w-1/2 h-1/2 left-[32%] top-[37%]" delay="-8s"/>
                  <AuraBackground className="w-1/2 h-1/2 left-[20%] top-[44%]" delay="-9s"/>
                  <AuraBackground className="w-1/2 h-1/2 left-[32%] top-[32%]" delay="-10s"/>
                  <AuraBackground className="w-1/2 h-1/2 left-[10%] top-[60%]" delay="-3s"/>
              </div>
              <div className="text-9xl font-semibold flex flex-col items-left justify-between space-y-8 h-1/2">

                  <p>UNIQUIE</p>
                  <p>UNITED</p>
                  <p>UNBOUNDED</p>
              </div>
          </section>

          <section className="flex flex-col between space-y-8">
          <h1 className="text-4xl font-semibold">Наши достижения</h1>
              <div className="flex flex-wrap items-stretch gap-4">
                  <Card className="w-auto p-8 flex flex-col between space-y-4">
                      <h2 className="text-6xl font-semibold">99.94%</h2>
                      <p className="w-64 text-xl">SLA</p>
                  </Card>
                  <Card className="w-auto p-8 flex flex-col between space-y-4">
                      <h2 className="text-6xl font-semibold">5</h2>
                      <p className="w-64 text-xl">Серверов по всему миру</p>
                  </Card>
                  <Card className="w-auto p-8 flex flex-col between space-y-4">
                      <h2 className="text-6xl font-semibold">40+</h2>
                      <p className="w-64 text-xl">Внутренних сервисов</p>
                  </Card>
                  <Card className="w-auto p-8 flex flex-col between space-y-4">
                      <h2 className="text-6xl font-semibold">3</h2>
                      <p className="w-64 text-xl">Внешних проекта в инфраструктуре</p>
                  </Card>
              </div>
          </section>

          <section className="flex flex-col between space-y-8">
              <h1 className="text-4xl font-semibold">О проекте</h1>
              <p className="text-xl">
                  UNICORNS Group - Частный люительский проект по разработке и эксплуатации различных PET проектов.
                  Здесь мы разрабатываем, тестируем, а также развертываем различные веб-приложения, которые на наш
                  взгляд полезны или прикольны.
              </p>
          </section>

          <section className="flex flex-col between space-y-8">
              <h1 className="text-4xl font-semibold">О финансировании</h1>
              <p className="text-xl">
                  Вся инфраструктура содержится за наш счет.
              </p>
          </section>

          <section className="flex flex-col between space-y-8">
              <h1 className="text-4xl font-semibold">Является ли мы хостингом?</h1>
              <p className="text-xl">
                  Нет! Это просто инфраструктура для деплоя прикольных штук, мы не оказываем коммерческую эксплуатацию нашей инфраструктуры.
              </p>
          </section>
      </main>
  );
}
