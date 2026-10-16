import React from "react";
export default function TrustedClients({
  clients = [],
  totalClients = 20,
}) {
  return (
    <div
  className="
    group
    relative
    z-20
    mt-2
    flex
    w-fit
    items-center
    gap-3
    whitespace-nowrap
    overflow-hidden
    rounded-full

    border
    border-white/15

    bg-white/[0.08]

    px-3
    py-2

    text-xs
    font-medium
    text-black

    shadow-[0_10px_40px_rgba(0,0,0,0.12)]

    backdrop-blur-xl

    transition-all
    duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]

    hover:border-white/25
    hover:bg-white/[0.12]
    hover:shadow-[0_15px_50px_rgba(84,40,176,0.18)]
  "
>
  {/* =====================================================
      PREMIUM GLASS SHINE
  ====================================================== */}

  <span
    className="
      pointer-events-none
      absolute
      inset-y-0
      -left-[100%]
      z-0
      w-[35%]
      rotate-[15deg]

      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent

      opacity-0

      transition-all
      duration-1000

      group-hover:left-[130%]
      group-hover:opacity-100
    "
  />

  {/* =====================================================
      LIVE / TRUSTED DOT
  ====================================================== */}

  <span className="relative z-10 flex h-2.5 w-2.5 shrink-0">
    <span
      className="
        absolute
        inline-flex
        h-full
        w-full
        animate-ping
        rounded-full
        bg-[#69f810]
        opacity-60
      "
    />

    <span
      className="
        relative
        inline-flex
        h-2.5
        w-2.5
        rounded-full
        bg-[#69f810]
        shadow-[0_0_15px_rgba(105,248,16,0.8)]
      "
    />
  </span>

  {/* =====================================================
      TRUSTED BY
  ====================================================== */}

  <span
    className="
      relative
      z-10
      font-semibold
      uppercase
      tracking-[0.12em]
      text-black
    "
  >
    Trusted By
  </span>

  {/* =====================================================
      DIVIDER
  ====================================================== */}

  <span
    className="
      relative
      z-10
      h-5
      w-px
      bg-white/20
    "
  />

  {/* =====================================================
      CLIENT AVATARS
  ====================================================== */}

  <div className="relative z-10 flex items-center pl-1">

    {/* Client 1 */}

    <div
      className="
        relative
        h-7
        w-7
        overflow-hidden
        rounded-full
        border-2
        border-[#30204d]

        transition-all
        duration-300

        hover:z-50
        hover:scale-125
        hover:-translate-y-1
      "
    >
      <img
        src="/clients/client-1.jpg"
        alt="Client"
        className="
          h-full
          w-full
          object-cover
        "
      />
    </div>

    {/* Client 2 */}

    <div
      className="
        relative
        -ml-2
        h-7
        w-7
        overflow-hidden
        rounded-full
        border-2
        border-[#30204d]

        transition-all
        duration-300

        hover:z-50
        hover:scale-125
        hover:-translate-y-1
      "
    >
      <img
        src="/clients/client-2.jpg"
        alt="Client"
        className="
          h-full
          w-full
          object-cover
        "
      />
    </div>

    {/* Client 3 */}

    <div
      className="
        relative
        -ml-2
        h-7
        w-7
        overflow-hidden
        rounded-full
        border-1
        border-[#30204d]

        transition-all
        duration-300

        hover:z-50
        hover:scale-125
        hover:-translate-y-1
      "
    >
      <img
        src="/clients/client-3.jpg"
        alt="Client"
        className="
          h-full
          w-full
          object-cover
        "
      />
    </div>

    {/* Client 4 */}

    <div
      className="
        relative
        -ml-2
        h-7
        w-7
        overflow-hidden
        rounded-full
        border-2
        border-[#30204d]

        transition-all
        duration-300

        hover:z-50
        hover:scale-125
        hover:-translate-y-1
      "
    >
      <img
        src="/clients/client-4.jpg"
        alt="Client"
        className="
          h-full
          w-full
          object-cover
        "
      />
    </div>

    {/* =================================================
        10+ CIRCLE
    ================================================= */}

    <div
      className="
        relative
        z-20
        -ml-2
        flex
        h-7
        min-w-7
        items-center
        justify-center

        rounded-full

        border-2
        border-[#30204d]

        bg-[#5428B0]

        px-1.5

        text-[9px]
        font-bold
        tracking-tight
        text-white

        shadow-[0_0_15px_rgba(84,40,176,0.35)]

        transition-all
        duration-300

        group-hover:bg-[#F8CC10]
        group-hover:text-[#5428B0]
      "
    >
      5+
    </div>

  </div>



</div>
  );
}