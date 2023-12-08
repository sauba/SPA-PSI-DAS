import Image from "next/image";
import imgProfile from "../../../public/perfilDani2.svg";

export default function About() {
  return (
    <div
      className={`
        w-full
        flex
        flex-col
        mx-auto
        min-h-screen
        justify-start
        items-center
      text-amber-700
      `}
      id="aboutDaniele"
    >
      <span
        className={`
            flex
            flex-col
            justify-center
            items-center
          `}
      >
        <p
          className={`
              text-center
              2xl:text-8xl
              md:text-4xl
              xl:text-4xl
              font-bad-script
              hover:cursor-none
              flex
              items-center
            `}
        >
          Olá, eu sou Daniele Andrade
          <span
            className={`
                font-allura
                animate-bounce-slow
              `}
          >

          </span>
        </p>
      </span>

      <div>
        <Image src={imgProfile} width={400} height={400} className={`pb-4 rounded-tl-full rounded-br-full`} priority alt="Psicologa Daniele Andrade" />
      </div>
      <p className={`
            px-3
            2xl:px-8
            2xl:pt-4
            2xl:text-3xl
            text-center
            text-2xl
            tracking-widest
            leading-6
          `}>
        Sou Psicóloga e atuo na área clínica, há 5 anos, atendendo o público adulto,
        com Psicoterapia Individual e Terapia de Casal. Pós Graduada em Gestão de Pessoas, com Certificação em Coaching Sistêmico e outras
        terapêuticas.
      </p>
    </div>
  )
}
