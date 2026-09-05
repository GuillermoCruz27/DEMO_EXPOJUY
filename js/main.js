document.addEventListener("DOMContentLoaded", () => {
  /* --- Nav móvil --- */
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  /* --- Datos mock de expositores (compartidos por expositores.html y mapa.html) --- */
  const EXPOSITORES = [
    {
      id: "litio-jujuy",
      nombre: "Litio Jujuy S.A.",
      rubro: "mineria",
      stand: "A1 / C1",
      desc: "Extracción y procesamiento de litio para baterías.",
    },
    {
      id: "agronorte",
      nombre: "AgroNorte SRL",
      rubro: "agroindustria",
      stand: "A2",
      desc: "Insumos y tecnología para agricultura de precisión.",
    },
    {
      id: "valle-verde",
      nombre: "Valle Verde Alimentos",
      rubro: "agroindustria",
      stand: "A3",
      desc: "Producción y exportación de conservas regionales.",
    },
    {
      id: "andes-soft",
      nombre: "Andes Soft",
      rubro: "tecnologia",
      stand: "B1",
      desc: "Desarrollo de software de gestión para pymes del NOA.",
    },
    {
      id: "norte-robotica",
      nombre: "Norte Robótica",
      rubro: "tecnologia",
      stand: "B2",
      desc: "Automatización industrial y robótica aplicada.",
    },
    {
      id: "voltio",
      nombre: "VOLTIO",
      rubro: "tecnologia",
      stand: "B3",
      desc: "Reparación y servicios técnicos electrónicos.",
    },
    {
      id: "mineral-andino",
      nombre: "Mineral Andino",
      rubro: "mineria",
      stand: "C2",
      desc: "Servicios de exploración y logística minera.",
    },
    {
      id: "geo-norte",
      nombre: "Geo Norte Consultora",
      rubro: "mineria",
      stand: "C3",
      desc: "Estudios geológicos y de impacto ambiental.",
    },
    {
      id: "turismo-jujuy",
      nombre: "Jujuy Turismo Activo",
      rubro: "turismo",
      stand: "Explanada",
      desc: "Circuitos y experiencias turísticas de la provincia.",
    },
    {
      id: "industrias-noa",
      nombre: "Industrias del NOA",
      rubro: "industria",
      stand: "C3",
      desc: "Metalmecánica y fabricación de piezas industriales.",
    },
  ];

  /* --- Expositores: render + filtros --- */
  const expoGrid = document.getElementById("expoGrid");
  if (expoGrid) {
    const searchInput = document.getElementById("expoSearch");
    const chipRow = document.getElementById("chipRow");
    const emptyState = document.getElementById("expoEmpty");
    let activeFilter = "todos";

    function renderExpos() {
      const q = (searchInput.value || "").trim().toLowerCase();
      const filtered = EXPOSITORES.filter((e) => {
        const matchesFilter =
          activeFilter === "todos" || e.rubro === activeFilter;
        const matchesSearch = e.nombre.toLowerCase().includes(q);
        return matchesFilter && matchesSearch;
      });
      expoGrid.innerHTML = filtered
        .map(
          (e) => `
        <button class="expo-card" data-id="${e.id}">
          <span class="chip">${labelRubro(e.rubro)}</span>
          <h3>${e.nombre}</h3>
          <p>${e.desc}</p>
          <span class="stand-tag">Stand ${e.stand}</span>
        </button>
      `,
        )
        .join("");
      emptyState.hidden = filtered.length !== 0;
      expoGrid.querySelectorAll(".expo-card").forEach((card) => {
        card.addEventListener("click", () => openExpoModal(card.dataset.id));
      });
    }

    function labelRubro(r) {
      return (
        {
          agroindustria: "Agroindustria",
          mineria: "Minería y litio",
          tecnologia: "Tecnología",
          turismo: "Turismo",
          industria: "Industria",
        }[r] || r
      );
    }

    chipRow.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      chipRow
        .querySelectorAll(".chip")
        .forEach((c) => c.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.dataset.filter;
      renderExpos();
    });
    searchInput.addEventListener("input", renderExpos);
    renderExpos();

    // Modal de detalle
    const modal = document.getElementById("expoModal");
    const modalBody = document.getElementById("expoModalBody");
    const modalClose = document.getElementById("expoModalClose");
    function openExpoModal(id) {
      const e = EXPOSITORES.find((x) => x.id === id);
      if (!e) return;
      modalBody.innerHTML = `
        <span class="chip">${labelRubro(e.rubro)}</span>
        <h3 style="margin:1rem 0 0.5rem">${e.nombre}</h3>
        <p style="margin-bottom:1rem">${e.desc}</p>
        <p style="font-weight:700;color:var(--violet)">Stand ${e.stand}</p>
        <a class="btn btn-primary" style="margin-top:1.2rem" href="mapa.html">Ver en el mapa</a>
      `;
      modal.hidden = false;
    }
    modalClose?.addEventListener("click", () => (modal.hidden = true));
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) modal.hidden = true;
    });
  }

  /* --- Agenda: datos mock + tabs --- */
  const agendaList = document.getElementById("agendaList");
  if (agendaList) {
    const AGENDA = {
      1: [
        {
          time: "09:30",
          track: "negocios",
          title: "Apertura oficial ExpoJuy 2026",
          room: "Salón Norte",
        },
        {
          time: "11:00",
          track: "produccion",
          title: "Riego inteligente y sensores de suelo",
          room: "Auditorio B",
        },
        {
          time: "15:30",
          track: "negocios",
          title: "Exportar valor agregado desde Jujuy",
          room: "Salón Norte",
        },
      ],
      2: [
        {
          time: "10:00",
          track: "tecnologia",
          title: "Automatización industrial aplicada a pymes",
          room: "Auditorio B",
        },
        {
          time: "14:00",
          track: "negocios",
          title: "Ronda de negocios: compradores del NOA",
          room: "Sala de reuniones",
        },
      ],
      3: [
        {
          time: "10:30",
          track: "produccion",
          title: "Litio jujeño: de la salina a la batería",
          room: "Salón Norte",
        },
        {
          time: "13:00",
          track: "tecnologia",
          title: "IA aplicada a la gestión agropecuaria",
          room: "Auditorio B",
        },
        {
          time: "17:00",
          track: "negocios",
          title: "Economía del conocimiento en el Norte argentino",
          room: "Salón Norte",
        },
      ],
      4: [
        {
          time: "11:00",
          track: "produccion",
          title: "Cierre de rondas de negocios",
          room: "Sala de reuniones",
        },
        {
          time: "16:00",
          track: "negocios",
          title: "Balance y anuncio de la próxima edición",
          room: "Salón Norte",
        },
      ],
    };
    let activeDay = "1",
      activeTrack = "todos";

    function renderAgenda() {
      const items = AGENDA[activeDay].filter(
        (i) => activeTrack === "todos" || i.track === activeTrack,
      );
      agendaList.innerHTML =
        items
          .map(
            (i) => `
        <div class="agenda-item">
          <span class="agenda-time">${i.time}</span>
          <div><h3>${i.title}</h3><p>${i.room}</p></div>
          <span class="chip">${trackLabel(i.track)}</span>
        </div>
      `,
          )
          .join("") ||
        '<p class="empty-state">No hay actividades de este track para este día.</p>';
    }
    function trackLabel(t) {
      return (
        {
          negocios: "Negocios",
          tecnologia: "Tecnología",
          produccion: "Producción",
        }[t] || t
      );
    }

    document.getElementById("dayTabs").addEventListener("click", (e) => {
      const btn = e.target.closest(".day-tab");
      if (!btn) return;
      document.querySelectorAll(".day-tab").forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      activeDay = btn.dataset.day;
      renderAgenda();
    });
    document.getElementById("trackRow").addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      document
        .querySelectorAll("#trackRow .chip")
        .forEach((c) => c.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeTrack = btn.dataset.track;
      renderAgenda();
    });
    renderAgenda();
  }

  /* --- Mapa interactivo --- */
  const floorMap = document.getElementById("floorMap");
  if (floorMap) {
    const panel = document.getElementById("mapPanel");
    const STAND_INFO = {
      A1: {
        title: "Litio Jujuy S.A.",
        desc: "Extracción y procesamiento de litio.",
      },
      A2: {
        title: "AgroNorte SRL",
        desc: "Insumos para agricultura de precisión.",
      },
      A3: {
        title: "Valle Verde Alimentos",
        desc: "Conservas y productos regionales.",
      },
      B1: { title: "Andes Soft", desc: "Software de gestión para pymes." },
      B2: { title: "Norte Robótica", desc: "Automatización industrial." },
      B3: {
        title: "VOLTIO",
        desc: "Reparación y servicios técnicos electrónicos.",
      },
      C1: {
        title: "Litio Jujuy S.A. (planta)",
        desc: "Muestra de procesos de extracción.",
      },
      C2: { title: "Mineral Andino", desc: "Exploración y logística minera." },
      C3: { title: "Geo Norte Consultora", desc: "Estudios geológicos." },
      "AUD-B": {
        title: "Auditorio B",
        desc: "Charlas técnicas y de producción.",
      },
      "AUD-N": {
        title: "Salón Norte",
        desc: "Apertura, cierres y mesas principales.",
      },
      SP: {
        title: "Zona de sponsors",
        desc: "Espacios institucionales y de patrocinadores.",
      },
    };
    floorMap.addEventListener("click", (e) => {
      const stand = e.target.closest(".stand");
      if (!stand) return;
      floorMap
        .querySelectorAll(".stand")
        .forEach((s) => s.classList.remove("is-active"));
      stand.classList.add("is-active");
      const code = stand.dataset.stand;
      const info = STAND_INFO[code];
      if (!info) return;
      panel.innerHTML = `
        <span class="stand-code">Stand ${code}</span>
        <h3>${info.title}</h3>
        <p>${info.desc}</p>
        <a class="btn btn-ghost" style="margin-top:1.2rem" href="expositores.html">Ver ficha completa</a>
      `;
    });
  }

  /* --- FAQ acordeón --- */
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const answer = btn.nextElementSibling;
      btn.setAttribute("aria-expanded", String(!expanded));
      answer.style.maxHeight = expanded ? null : answer.scrollHeight + "px";
    });
  });

  /* --- Formulario de contacto (visual, sin backend) --- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("formNote").hidden = false;
    });
  }

  /* --- Asistente / chat mock en Inicio --- */
  document.querySelectorAll(".chat-suggestions button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const body = document.getElementById("chatBody");
      const q = btn.dataset.q;
      const userText = btn.textContent;
      const responses = {
        mapa: "El Salón Norte está en el Pabellón de Auditorios, junto al Auditorio B. Lo tenés marcado en el mapa interactivo del predio.",
        ruta: "Ruta sugerida: Pabellón B (Tecnología) → Pabellón C (Minería) → Salón Norte para la mesa de las 15:30 hs. Son unos 8 minutos caminando entre paradas.",
      };
      body.insertAdjacentHTML(
        "beforeend",
        `<div class="msg msg-user">${userText}</div><div class="msg msg-bot">${responses[q] || "Buena pregunta — en la versión completa esto lo respondería el asistente en tiempo real."}</div>`,
      );
      body.scrollTop = body.scrollHeight;
    });
  });
});
