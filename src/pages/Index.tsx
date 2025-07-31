import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-white to-stone-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 bg-warm-white/80 backdrop-blur-sm fixed w-full z-50">
        <div className="text-2xl font-serif text-charcoal tracking-wide">Elena Romanova</div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-charcoal hover:text-elegant-gold transition-colors">Главная</a>
          <a href="#about" className="text-charcoal hover:text-elegant-gold transition-colors">О себе</a>
          <a href="#projects" className="text-charcoal hover:text-elegant-gold transition-colors">Проекты</a>
          <a href="#contact" className="text-charcoal hover:text-elegant-gold transition-colors">Контакты</a>
        </div>
        <div className="md:hidden">
          <Icon name="Menu" size={24} className="text-charcoal" />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-serif text-charcoal leading-tight mb-6">
                Elegant<br/>
                <span className="text-elegant-gold italic">Interior</span><br/>
                Designer
              </h1>
              <div className="w-24 h-0.5 bg-elegant-gold mb-8"></div>
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Создаю изысканные интерьеры, которые отражают вашу индивидуальность 
                и превращают дом в произведение искусства.
              </p>
              <Button className="bg-elegant-gold hover:bg-bronze text-charcoal font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Посмотреть проекты
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/img/fbd25738-3a38-4037-926c-3c138c419162.jpg" 
                  alt="Elena Romanova - Дизайнер интерьеров"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-elegant-gold/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-charcoal/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-charcoal mb-4">О себе</h2>
            <div className="w-24 h-0.5 bg-elegant-gold mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-elegant-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="Lightbulb" size={32} className="text-elegant-gold" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">Концепция</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Разрабатываю уникальные концепции, основанные на ваших потребностях и стиле жизни.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-elegant-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="Palette" size={32} className="text-elegant-gold" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">Дизайн</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Создаю гармоничные пространства с вниманием к каждой детали и качеству материалов.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-elegant-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="CheckCircle" size={32} className="text-elegant-gold" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">Реализация</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Сопровождаю проект от идеи до финальной реализации с контролем качества.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-xl text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
              Более 10 лет я создаю интерьеры мечты для своих клиентов. 
              Мой подход основан на глубоком понимании архитектуры, цвета и человеческой психологии. 
              Каждый проект — это история, рассказанная через пространство.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-charcoal mb-4">Проекты</h2>
            <div className="w-24 h-0.5 bg-elegant-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Избранные работы, демонстрирующие разнообразие стилей и подходов к дизайну интерьера
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 overflow-hidden">
                <img 
                  src="/img/7183f3d8-d6c9-45f3-ace5-185e4a911c3b.jpg" 
                  alt="Элегантная гостиная"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-charcoal mb-2">Современная гостиная</h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  Минималистичный дизайн с роскошными акцентами и продуманной планировкой пространства.
                </p>
                <div className="flex items-center text-elegant-gold text-sm font-medium">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
            
            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 overflow-hidden">
                <img 
                  src="/img/4d16206a-dfa2-4ad8-8dcd-4454cf66720d.jpg" 
                  alt="Элегантная спальня"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-charcoal mb-2">Роскошная спальня</h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  Утончённый интерьер с золотистыми акцентами и уютной атмосферой для отдыха.
                </p>
                <div className="flex items-center text-elegant-gold text-sm font-medium">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
            
            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 overflow-hidden">
                <img 
                  src="/img/af9ec084-276e-477a-a315-f8833bf3f543.jpg" 
                  alt="Современная кухня"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-charcoal mb-2">Дизайнерская кухня</h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  Функциональное пространство с премиальными материалами и современной техникой.
                </p>
                <div className="flex items-center text-elegant-gold text-sm font-medium">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
            
            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 overflow-hidden">
                <img 
                  src="/img/299ae272-3db8-4a1e-b74c-9b7d59693f5f.jpg" 
                  alt="Роскошная ванная комната"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-charcoal mb-2">Спа-ванная комната</h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  Роскошное пространство с мраморной отделкой и атмосферой релаксации.
                </p>
                <div className="flex items-center text-elegant-gold text-sm font-medium">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
            
            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 overflow-hidden">
                <img 
                  src="/img/5008ab52-55d4-4695-a1d5-3a45d749b61b.jpg" 
                  alt="Элегантная столовая"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-charcoal mb-2">Изысканная столовая</h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  Торжественное пространство для семейных ужинов с изысканным декором.
                </p>
                <div className="flex items-center text-elegant-gold text-sm font-medium">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
            
            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 overflow-hidden">
                <div className="w-full h-full bg-charcoal/10 flex items-center justify-center group-hover:bg-charcoal/20 transition-colors">
                  <Icon name="Image" size={48} className="text-elegant-gold/60" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-charcoal mb-2">Следующий проект</h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  Скоро здесь появится новый проект из нашего портфолио.
                </p>
                <div className="flex items-center text-elegant-gold text-sm font-medium">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-charcoal px-8 py-3 rounded-full transition-all duration-300">
              Все проекты
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 bg-charcoal text-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-6">Готовы создать интерьер мечты?</h2>
          <p className="text-xl text-warm-white/80 mb-8 leading-relaxed">
            Свяжитесь со мной для обсуждения вашего проекта. 
            Первая консультация — бесплатно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-elegant-gold hover:bg-bronze text-charcoal font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
            <Button variant="outline" className="border-warm-white text-warm-white hover:bg-warm-white hover:text-charcoal px-8 py-3 rounded-full transition-all duration-300">
              <Icon name="Mail" size={18} className="mr-2" />
              Написать
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-charcoal border-t border-warm-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-warm-white/60">
          <div className="text-lg font-serif">Elena Romanova</div>
          <div className="text-sm">
            © 2024 Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;