import KeenSlider from "../KeenSlider"

export default function AbordagemHumanista() {
  return (
    <div
      className={`
        w-full
        bg-amber-950/50
        text-red-50
        min-h-screen`}
      id="abordagem"
    >
      <div
        className={`
        flex
        flex-col
        flex-wrap
      `}
      >
        <p
          className={`
              text-center
              text-3xl
              md:text-4xl
              xl:text-4xl
              pl-4
              pt-10
              pb-6
              2xl:pl-8
              2xl:pt-20
              2xl:text-8xl
              font-bad-script
              hover:cursor-none
              flex
              items-center
            `}
        >
          Abordagem Humanista
        </p>

        <p
          className={`
            px-3
            pt-2
            pb-4
            2xl:px-8
            2xl:pt-8
            2xl:text-3xl
            text-center
            tracking-widest
            leading-6
          `}
        >
          Essa linha teórica apoia os atendimentos, partindo do pressuposto de
          que o ser humano tem uma tendência atualizante, podendo se construir,
          a partir de sua história, com liberdade, responsabilidade e escolha,
          superando o determinismo.
        </p>
      </div>

      <div className={`w-11/12 mx-auto overflow-hidden`}>
        <KeenSlider />
      </div>
    </div>
  )
}
