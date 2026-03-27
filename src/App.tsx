import { useState, useRef, useEffect } from 'react'

interface Player {
  name: string
  team: string
  number: string
  img: string
  status?: { label: string; color: string }
  isGrayscale?: boolean
  alt?: string
}

const players: Player[] = [
  {
    name: 'LeBron',
    team: 'Lakers',
    number: '23',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3EPcs9vktDijiETbEFLG5JMdh_XUnwP1x-a0gDvmIefgQkwiReewIgGAx7x6Y0dwhWjaAux_jI-9aAUyZnf5K60JcX9gea2bQVjGtQpv51dagzTxESKOJ70BY9aHRoy2N7V4Tj-yVmHFjNiIPbGr0EUB2iF07-351YaXuGHu9zrMCSvat18L9a3v2dE8OxVaQP-P9t-STMVf8dpMGOyM5uH2N8Y6U5Ak5XZE-WxpDGl8IZi1U3HOVM-NDFZLeqx78veJjWaXEMQ',
    status: { label: 'LEGEND', color: 'bg-secondary text-on-secondary' },
    isGrayscale: true,
    alt: '3D rendered Funko Pop style figure of LeBron James in Lakers jersey',
  },
  {
    name: 'Curry',
    team: 'Warriors',
    number: '30',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfe6uOhmSZ5LRAG8iD5WapMOJgf4-KX8c31nTbmXx6ibYJlUiHsGo3kw5D_gxwWnoq0WKx_9vlPcwl7NnRlBfWnR-6Zohbpr3FnpociTHkQIKQqciQxX1Cme5-KdYKB2vpRyj2qrwuw6PUqCOPQm3i2RM8nuussualCn8Iy2k6OYXZ_a6UHrllWmZRSpbWnhGbxEP4l4Dwh81nknv_zv8UHsOtoDu4zPnE5QaDR1_cTF8P8n01D07A1tFx-9CPYYmx-uTPJo_P1A',
    isGrayscale: false,
  },
  {
    name: 'Durant',
    team: 'Suns',
    number: '35',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoK1FKdBD2JdlexeFNVcepfIKuD5hEdecxLDkMcyWNixphemdi05Cq8iQSRzLmhyDQM1Nrhd2wWMH6SsrMSk93lQ_l5Ju4sE_xXWKuIkv1SRRuyWLWT7_YDac97tEz_3ylLAwloinNa0QT1IA8X046hatI97fSZJ2KSU44HoGx-MIxxgRLKX-4dK6q784fXayqK47q5vBzk8oL6_wH0Ov07GEXmFgUp_OO7lAtx5TPhVYTnTAobO8vF32SKw9qixLYVt3VCIOsww',
    isGrayscale: false,
  },
  {
    name: 'Giannis',
    team: 'Bucks',
    number: '34',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzUASFZ6R5bccBEB1bPWLJW5w3xlmvo_4_UbKe5mHN7IwjSg1N9B1cJRPn5DuHnlfu9K6sNCM7aUZOp65WF_bhpgoIIwj08djlvO5YU-uRdCF2tjmtlAmieW-x5IxH4xPW5Iox9aXmI_CUyk_AzytdEDgbOdsynyjPkyyKNH_hwBsymdYb8o7U801mCH6aCzUqzWAYbqhL_pvn9HcwTvwddqQLsVLD9VKW5_Bg1CN6KaFNfk4v1wLKdT3wXadp4Y7HYmzHJl5J7Q',
    isGrayscale: true,
  },
  {
    name: 'Dončić',
    team: 'Lakers',
    number: '77',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl2XoAf8oaAuTvRg_oSuiApkNPs-s1PXQvLZ9x9k2ZUBgj_Srj5qlJ-h1aXmdfHi0FvF9FIw1cX-IhyUp8UDBzeMJfhm2gOEwQATowMURipkJ4oyXOwFzTE6nLK6ZX-SNoxxsaMMuhBHb0AeaAG8dwVfQUP-NVKNiMrBmxyaI9QaYptuGyxwGPvB1iHn8sZwN6hHFG62hQnFrhEoB5rklWZhvz8Dn3RNx6S4UST_wnVL3-iDKvq5ofMl_v27k4-NBwJc8BP6f2jg',
    status: { label: 'ACTIVE', color: 'bg-primary-container text-white' },
    isGrayscale: false,
  },
  {
    name: 'Tatum',
    team: 'Celtics',
    number: '0',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAntKq6j3yVxVVF1wUoQnF0FlDS8nR1IfFdc8yzx8CffLb85ERZtc0Ck_KAzVGJI3NzrRjcq6G8gTVBG2yLiZgnjKb5GVxaPAMSXF5nlI8GQx-xxi71DORg1Dd9ynSRdOmz2FdXPCSVMDMXxfXFoCnQM5VP70FPavrbkRgjNSFZUCpR5PRi8Jw2DjbOm_DRUCeDSh2xvu4uNfa2QjFudqK2AnOtEhQYdZgWNpunZWo6soknY26uQCgt_aBSbW3BtjNDr-GhxoQsrw',
    isGrayscale: false,
  },
  {
    name: 'Jokić',
    team: 'Nuggets',
    number: '15',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM4otbdQxwnubmevf7EEZ-yLZNaelgzVOIzd0nl_M_GxMyiq5nRBxHSyDO1TwzNa56qcZrZUPyxu8u8PmNB2lEygeiMiFnKn-j4hDmhPpm5-5kQ6IogVOoSpKDACejcCYVTJnRkvsCcfH3xZuIEnJeXNu74_YAGE5lm5BnWgAwdtBZG6grQJ5yfynhZNwRszwo302eGORVwcLr4f6bOSKEk_3XBq9pt1ulEtfxsvfR6gIkTOEsUhfyrr3TbD3REeXCr76VvtI4Xg',
    isGrayscale: true,
    alt: '3D rendered Funko Pop style figure of Nikola Jokić in Nuggets jersey',
  },
  {
    name: 'Embiid',
    team: '76ers',
    number: '21',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8bdUCiV30u6fm8lyVM0fd6bhAozL6UORqrdvVoO1u1NqnuzdP_54Ygbzh2rNdWUhuoWWpdDMlb48zY4yW2JZrb7PRkDplCZ7yQvnUXs40O0I5u0XAJm_EQG2j3xzvgiiUwCsgkaCJZNFwAco08D6ah9MeqS0ir1ytVigMQkeiATqCMPKaCmxFUlwOIoMaxVWP5JNVUJeXX4SC10FbkoHbeoWMECtZpU_bbi0B3rQRftwdju5RsXO01GsuVQpmwviPd-UKkNH-eA',
    isGrayscale: true,
  },
  {
    name: 'Booker',
    team: 'Suns',
    number: '1',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXzxx_1KcfCTzR5D6w1xaWLY0bPJDHJH7gQ0UA7r9y7p4FObc0ZMd0TTuwNF2-J-yRAqzGpZlWvqEgL4mTTuTM2gqcvvKr5_CdYnv0r6XUUjqQb0IAEp3o_X8RLDGBnrIGptIKSuHxOXdKrgHl7icWdbWQAKV3KX-mDwun5BsH9MAt3FMw2WcB8ikc36t5sACw8cQU4MfWUsQ_epWjOZyn-2tzPb1uAyU-PTADpVwuPudV65CGH3Dzp8rtG0ZKZr5Bq0SqQlAy5w',
    isGrayscale: false,
  },
  {
    name: 'Edwards',
    team: 'Wolves',
    number: '5',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmOoLxmZ6O2ZKB7o27IejJvCBokK39yBxKJ6L25CUlJSgw3HhgjAcIIH5jwpzPZmcoiJpb7E9HSfOBuhoDQZ9cMSd9OTO-ThRhw0vto5Mh8YVM6bjDd6t9A7ZTBp1ke1pMp8mr5LkJvO6cgypsggm1AK_DyO867nhmHQ15i4S7djEP9v5ZOvus7adFSNd9fYbG9jNjumuEZP7iQRIL-l_pwMNNDMFvH9u_PkwTqiRFe445rejIs_vE4vpTVS7m5N0QHIP5KOSO0g',
    isGrayscale: false,
  },
  {
    name: 'Kawhi',
    team: 'Clippers',
    number: '2',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO9NU2MjD2eaGltgMnXDgJq8l3fG7O-BNYrbubYqOVkrP60W6KfLjDPOZj8uQqZxTRpDr4ddFtV5fUT1wDQhnqGvHIknSduH-t5ayn3Nc5TQzfoHyIu3k5xOUiwJZzEa7H0-LvpsN2H2Flpdht8EB_PvlNXbJgidhe6EVl37tLUjL4klE6CY1--tgaov9T9BQzu7kAdlmqsOFxwRDowjHweHyi88lmE_dVVlZGQ0AM1jhW20nBfeVTJh95FOc3FuffndTV8y-ceA',
    isGrayscale: true,
  },
  {
    name: 'Butler',
    team: 'Heat',
    number: '22',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC49biuI_NzqIbMiyvMR-cYXsY74Ezvd9jVnqTlkPMND0jFmlAmauNVB4jYY5mV-jIMpItPqq5xxbkzTGKeo96ett_74l9Q3765Ad2FOW3UcP5mOJD0Usi3Ot12CW3CiztF4Tj-heJoQxy6RBpkmBBZQEfRnQrH2jHz94sXZ8ncz0Abfm4ekUKJOazpK34ZC4Lw2PpHS81HQkpNwT52YLsgstAEcqkP0QOAX1YwiBwLURsQm7USmKW7-q6fiCBjtvDyZtLs8jUwsA',
    isGrayscale: true,
  },
]

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)
  const [pulse, setPulse] = useState(false)
  const formRef = useRef<HTMLElement>(null)

  const handleSelectPlayer = (player: Player) => {
    setSelectedPlayer(player)
    setPulse(true)
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (pulse) {
      const timer = setTimeout(() => setPulse(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [pulse])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selectedPlayer) {
      alert(`Draft Realizado! Sua solicitação para ${selectedPlayer.name} foi enviada com sucesso. (Simulação de envio)`)
    } else {
      alert('Por favor, selecione um jogador primeiro.')
    }
    const target = e.target as HTMLFormElement
    target.reset()
    setSelectedPlayer(null)
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-md border-b border-[#594137]/15 shadow-[0_24px_48px_rgba(0,0,0,0.4)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-black italic text-[#F76B1C] font-headline uppercase tracking-tighter">
            3D Funko NBA
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-[#FFB595] border-b-2 border-[#E9C349] pb-1 font-headline uppercase tracking-tighter text-sm hover:text-[#F76B1C] transition-transform hover:scale-105" href="#arena">Arena</a>
            <a className="text-[#E1BFB2] font-headline uppercase tracking-tighter text-sm hover:text-[#F76B1C] transition-transform hover:scale-105" href="#draft">Draft Room</a>
            <a className="text-[#E1BFB2] font-headline uppercase tracking-tighter text-sm hover:text-[#F76B1C] transition-transform hover:scale-105" href="#hall">Hall of Fame</a>
          </div>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-6 py-2 font-headline font-bold uppercase tracking-tighter rounded-sm active:scale-95 transition-all cursor-pointer">
            Monte seu Funko
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden px-8" id="arena">
          <div className="absolute inset-0 court-texture opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <h1 className="font-headline font-black text-6xl md:text-8xl leading-tight uppercase tracking-tighter text-on-surface italic">
                Seu Jogador <span className="text-primary-container">Favorito</span> em 3D
              </h1>
              <p className="text-on-surface-variant text-xl max-w-lg leading-relaxed font-body">
                Do parquê para sua mesa. Colecionáveis de alta performance impressos em 3D com precisão cirúrgica e acabamento premium feito à mão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-10 py-4 font-headline font-black uppercase tracking-tighter text-lg rounded-sm text-center shadow-[0_10px_20px_rgba(247,107,28,0.3)] hover:translate-y-[-4px] transition-all" href="#draft">
                  Monte seu Funko
                </a>
                <button className="border-2 border-outline-variant text-on-surface px-10 py-4 font-headline font-bold uppercase tracking-tighter text-lg rounded-sm hover:bg-surface-container-high transition-colors cursor-pointer">
                  Ver Galeria
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-container/20 blur-3xl rounded-full"></div>
              <img alt="NBA Funko Pop 3D Model mockup" className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-2xl skew-card border border-outline-variant/20" data-alt="3D rendered Funko Pop style figure of Luka Dončić in Lakers yellow jersey" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl2XoAf8oaAuTvRg_oSuiApkNPs-s1PXQvLZ9x9k2ZUBgj_Srj5qlJ-h1aXmdfHi0FvF9FIw1cX-IhyUp8UDBzeMJfhm2gOEwQATowMURipkJ4oyXOwFzTE6nLK6ZX-SNoxxsaMMuhBHb0AeaAG8dwVfQUP-NVKNiMrBmxyaI9QaYptuGyxwGPvB1iHn8sZwN6hHFG62hQnFrhEoB5rklWZhvz8Dn3RNx6S4UST_wnVL3-iDKvq5ofMl_v27k4-NBwJc8BP6f2jg"/>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-on-secondary p-6 font-headline font-black uppercase italic rounded-sm shadow-xl z-20">
                Qualidade Elite
              </div>
            </div>
          </div>
          {/* Background Large Text */}
          <div className="absolute -bottom-10 -left-10 text-[20rem] font-black text-outline-variant/5 select-none font-headline uppercase">
            MVP
          </div>
        </section>

        {/* Product Info (Bento Grid) */}
        <section className="py-24 px-8 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="font-headline font-black text-4xl uppercase tracking-tighter italic">Especificações Técnicas</h2>
              <div className="w-24 h-1 bg-primary-container mt-2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 bg-surface-container-high p-8 flex flex-col justify-between border-b-4 border-primary-container">
                <span className="material-symbols-outlined text-primary-container text-5xl mb-6">layers</span>
                <div>
                  <h3 className="font-headline font-bold text-2xl uppercase mb-2">Filamento Premium PLA</h3>
                  <p className="text-on-surface-variant font-body">Material biodegradável de alta resistência com acabamento acetinado que captura cada detalhe do uniforme.</p>
                </div>
              </div>
              <div className="bg-surface-variant p-8 flex flex-col justify-between hover:bg-surface-bright transition-colors">
                <span className="material-symbols-outlined text-secondary text-5xl mb-6">high_res</span>
                <div>
                  <h3 className="font-headline font-bold text-xl uppercase mb-2">Alta Resolução</h3>
                  <p className="text-on-surface-variant text-sm font-body">Camadas de 0.1mm para um acabamento liso e imperceptível ao toque.</p>
                </div>
              </div>
              <div className="bg-surface-variant p-8 flex flex-col justify-between hover:bg-surface-bright transition-colors">
                <span className="material-symbols-outlined text-secondary text-5xl mb-6">draw</span>
                <div>
                  <h3 className="font-headline font-bold text-xl uppercase mb-2">Pintura Manual</h3>
                  <p className="text-on-surface-variant text-sm font-body">Cada peça passa por um processo de detalhamento artístico para máxima fidelidade.</p>
                </div>
              </div>
              <div className="bg-surface-variant p-8 flex flex-col justify-between hover:bg-surface-bright transition-colors md:col-span-2">
                <span className="material-symbols-outlined text-primary text-5xl mb-6">precision_manufacturing</span>
                <div>
                  <h3 className="font-headline font-bold text-2xl uppercase mb-2">On-Demand Draft</h3>
                  <p className="text-on-surface-variant font-body">Não trabalhamos com estoque. Cada Funko é "draftado" e produzido exclusivamente para você após o pedido.</p>
                </div>
              </div>
              <div className="bg-primary-container p-8 flex flex-col justify-center items-center text-on-primary-container text-center md:col-span-2">
                <h3 className="font-headline font-black text-4xl uppercase italic mb-2">100% Personalizado</h3>
                <p className="font-bold uppercase tracking-widest text-sm opacity-80">Do seu jeito, para sua coleção</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Player Selection */}
        <section className="py-24 px-8 relative overflow-hidden" id="draft">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <p className="text-primary-container font-label uppercase font-bold tracking-[0.2em] mb-2">Passo 01</p>
                <h2 className="font-headline font-black text-5xl uppercase tracking-tighter italic">Selecione Seu All-Star</h2>
              </div>
              <div className="flex gap-2">
                {/* Stepped Progress Indicators (Parallelograms) */}
                <div className="w-12 h-3 bg-secondary skew-x-[-20deg] shadow-[0_0_15px_rgba(233,195,73,0.5)]"></div>
                <div className="w-12 h-3 bg-surface-container-highest opacity-40 skew-x-[-20deg]"></div>
                <div className="w-12 h-3 bg-surface-container-highest opacity-40 skew-x-[-20deg]"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {players.map((player) => (
                <div
                  key={player.name}
                  className={`group relative aspect-[3/4] bg-surface-container-high overflow-hidden cursor-pointer transition-all hover:translate-y-[-8px] border-b-4 hover:border-primary ${
                    selectedPlayer?.name === player.name ? 'border-primary -translate-y-2' : 'border-transparent'
                  }`}
                  onClick={() => handleSelectPlayer(player)}
                >
                  <div className="absolute inset-0 court-texture opacity-10"></div>
                  <div className="w-full h-full bg-surface-container-highest flex items-center justify-center">
                    <img
                      alt={player.name}
                      className={`w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500 ${player.isGrayscale && selectedPlayer?.name !== player.name ? 'grayscale' : ''}`}
                      data-alt={player.alt}
                      src={player.img}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                    {player.status && (
                      <span className={`text-[10px] ${player.status.color} px-2 py-0.5 font-label font-bold uppercase rounded-sm mb-1 inline-block`}>
                        {player.status.label}
                      </span>
                    )}
                    <h4 className="font-headline font-bold text-lg uppercase leading-none">{player.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-label uppercase">{player.team} • {player.number}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Background Text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-black text-outline-variant/5 select-none font-headline uppercase whitespace-nowrap -z-0">
            SELECT YOUR PLAYER
          </div>
        </section>

        {/* Dynamic Order Form (The Draft Board) */}
        <section ref={formRef} className="py-24 px-8 bg-surface-container-low border-t border-outline-variant/10" id="form-section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-secondary font-label uppercase font-bold tracking-[0.2em] mb-2">Passo 02</p>
              <h2 className="font-headline font-black text-5xl uppercase tracking-tighter italic">Finalize seu Draft</h2>
              <p className="text-on-surface-variant mt-4 font-body">Preencha os detalhes técnicos para iniciarmos a produção do seu Funko exclusivo.</p>
            </div>
            <form className="space-y-12" id="funko-form" onSubmit={handleSubmit}>
              {/* Section: Player Data (Auto-filled) */}
              <div className="grid md:grid-cols-2 gap-8 p-8 bg-surface border-l-4 border-secondary skew-card">
                <div className="space-y-1">
                  <label className="block text-[10px] font-label font-black uppercase tracking-widest text-on-surface-variant">Jogador Selecionado</label>
                  <input
                    className={`w-full bg-transparent border-none p-0 font-headline font-black text-3xl uppercase text-primary-container focus:ring-0 ${pulse ? 'animate-pulse' : ''}`}
                    id="selected-player"
                    placeholder="Selecione no grid acima"
                    readOnly
                    type="text"
                    value={selectedPlayer?.name || ''}
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-label font-black uppercase tracking-widest text-on-surface-variant">Equipe/Franquia</label>
                  <input
                    className="w-full bg-transparent border-none p-0 font-headline font-black text-3xl uppercase text-on-surface focus:ring-0"
                    id="selected-team"
                    placeholder="Aguardando seleção..."
                    readOnly
                    type="text"
                    value={selectedPlayer ? `${selectedPlayer.team}` : ''}
                  />
                </div>
              </div>

              {/* Section: Contact Info */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-1 group">
                  <label className="block text-[10px] font-label font-black uppercase tracking-widest text-on-surface-variant">Seu Nome Completo</label>
                  <input className="w-full bg-transparent border-b-2 border-outline-variant py-3 px-0 font-body focus:border-primary transition-colors" required type="text"/>
                </div>
                <div className="space-y-1 group">
                  <label className="block text-[10px] font-label font-black uppercase tracking-widest text-on-surface-variant">E-mail para Contato</label>
                  <input className="w-full bg-transparent border-b-2 border-outline-variant py-3 px-0 font-body focus:border-primary transition-colors" required type="email"/>
                </div>
                <div className="space-y-1 group">
                  <label className="block text-[10px] font-label font-black uppercase tracking-widest text-on-surface-variant">WhatsApp com DDD</label>
                  <input className="w-full bg-transparent border-b-2 border-outline-variant py-3 px-0 font-body focus:border-primary transition-colors" placeholder="(00) 00000-0000" required type="tel"/>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 space-y-1 group">
                    <label className="block text-[10px] font-label font-black uppercase tracking-widest text-on-surface-variant">CEP</label>
                    <input className="w-full bg-transparent border-b-2 border-outline-variant py-3 px-0 font-body focus:border-primary transition-colors" required type="text"/>
                  </div>
                  <div className="col-span-2 space-y-1 group">
                    <label className="block text-[10px] font-label font-black uppercase tracking-widest text-on-surface-variant">Cidade / Estado</label>
                    <input className="w-full bg-transparent border-b-2 border-outline-variant py-3 px-0 font-body focus:border-primary transition-colors" required type="text"/>
                  </div>
                </div>
              </div>

              {/* Section: Customization */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <label className="block text-[10px] font-label font-black uppercase tracking-widest text-on-surface-variant">Esquema de Cores</label>
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input className="w-5 h-5 text-primary-container bg-surface-container-high border-outline-variant rounded-sm focus:ring-offset-surface" name="color" type="radio" value="white"/>
                      <span className="font-label text-sm uppercase group-hover:text-primary transition-colors">Branco Clássico</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input defaultChecked className="w-5 h-5 text-primary-container bg-surface-container-high border-outline-variant rounded-sm focus:ring-offset-surface" name="color" type="radio" value="team"/>
                      <span className="font-label text-sm uppercase group-hover:text-primary transition-colors">Cores do Time</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input className="w-5 h-5 text-primary-container bg-surface-container-high border-outline-variant rounded-sm focus:ring-offset-surface" name="color" type="radio" value="custom"/>
                      <span className="font-label text-sm uppercase group-hover:text-primary transition-colors">Personalizado</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-[10px] font-label font-black uppercase tracking-widest text-on-surface-variant">Tamanho da Peça</label>
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input defaultChecked className="w-5 h-5 text-primary-container bg-surface-container-high border-outline-variant rounded-sm focus:ring-offset-surface" name="size" type="radio" value="10cm"/>
                      <span className="font-label text-sm uppercase group-hover:text-primary transition-colors">Padrão (10cm)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input className="w-5 h-5 text-primary-container bg-surface-container-high border-outline-variant rounded-sm focus:ring-offset-surface" name="size" type="radio" value="15cm"/>
                      <span className="font-label text-sm uppercase group-hover:text-primary transition-colors">Médio (15cm)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input className="w-5 h-5 text-primary-container bg-surface-container-high border-outline-variant rounded-sm focus:ring-offset-surface" name="size" type="radio" value="20cm"/>
                      <span className="font-label text-sm uppercase group-hover:text-primary transition-colors">Premium (20cm)</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-[10px] font-label font-black uppercase tracking-widest text-on-surface-variant">Onde nos conheceu?</label>
                  <select className="w-full bg-surface-container-high border-b-2 border-outline-variant py-3 px-4 font-label text-xs uppercase focus:border-primary focus:ring-0 transition-colors">
                    <option>Instagram</option>
                    <option>Twitter / X</option>
                    <option>Indicação</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] font-label font-black uppercase tracking-widest text-on-surface-variant">Observações do Pedido</label>
                <textarea className="w-full bg-transparent border-b-2 border-outline-variant py-3 px-0 font-body focus:border-primary transition-colors resize-none" placeholder="Detalhes específicos sobre pose ou customização..." rows={3}></textarea>
              </div>
              <button className="w-full bg-primary-container text-on-primary-container py-6 font-headline font-black text-2xl uppercase italic tracking-tighter hover:bg-primary transition-all flex items-center justify-center gap-4 group shadow-[0_20px_40px_rgba(247,107,28,0.2)] cursor-pointer" type="submit">
                Solicitar meu Funko <span className="group-hover:translate-x-2 transition-transform">🏀</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#131313] w-full py-12 px-8 mt-20 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold text-[#E9C349] font-headline uppercase italic">
            3D Funko Arena
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-[#E1BFB2] font-body text-sm tracking-wide hover:text-white transition-colors" href="#">Terms of Draft</a>
            <a className="text-[#E1BFB2] font-body text-sm tracking-wide hover:text-white transition-colors" href="#">Production Timeline</a>
            <a className="text-[#E1BFB2] font-body text-sm tracking-wide hover:text-white transition-colors" href="#">Privacy Locker</a>
            <a className="text-[#E1BFB2] font-body text-sm tracking-wide hover:text-white transition-colors" href="#">Support</a>
          </div>
          <p className="text-[#E1BFB2] font-body text-xs tracking-wide opacity-60 text-center md:text-right">
            © 2024 NBA 3D Funko Arena. All Rights Reserved. High-Performance Collectibles.
          </p>
        </div>
        <div className="max-w-7xl mx-auto mt-12 bg-gradient-to-r from-transparent via-[#594137]/20 to-transparent h-px"></div>
      </footer>
    </>
  )
}

export default App
