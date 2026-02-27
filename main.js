document.addEventListener("DOMContentLoaded", function () {
  var timeElement = document.getElementById("local-time-value");
  var ageElement = document.getElementById("current-age");
  var birthDate = new Date("2001-11-14T00:00:00-03:00");

  var translations = {
    "pt-BR": {
      localTime: "Horário local:",
      localTimeTooltip: "Estou no Brasil, GMT-3",
      role: "{age} anos, Engenheiro de Software",
      bio: "Penso no produto como um todo, desenvolvendo soluções escaláveis que acompanham as demandas do mercado dentro e fora do código.",
      contact: "Entrar em contato",
      experienceTitle: "Experiência profissional:",
      verzelRole: "Desenvolvedor Full Stack",
      verzelDate: "ABR 2025 - Até o momento",
      verzelDesc1: "Atuo na manutenção e no desenvolvimento fullstack de uma plataforma voltada à automação de atendimentos e gestão de tickets, permitindo que empresas escalem suas interações com usuários e clientes de forma inteligente e eficiente.",
      verzelDesc2: "Desenvolvo e mantenho APIs robustas em Java com Quarkus, integradas ao API Gateway da AWS, utilizando comunicação assíncrona com filas SQS e funções Lambda para garantir uma arquitetura escalável e de alta performance.",
      cymsRole: "Desenvolvedor de Software",
      cymsDate: "ABR 2024 - SET 2024",
      cymsDesc1: "Desenvolvi e implementei um sistema para a área da saúde, incluindo geolocalização baseada no dispositivo do usuário, um sistema de conquistas gamificado e formulários para cadastro e coleta de informações.",
      cymsDesc2: "Reduzi o tempo de implementação de gateways de pagamento em nossas aplicações ao desenvolver uma API centralizada que padronizava e otimizava os endpoints de transações. Essa solução melhorou a escalabilidade do sistema e facilitou a integração de novos métodos de pagamento, reduzindo a necessidade de ajustes manuais em cada serviço.",
      marinhoRole: "Engenheiro de Software",
      marinhoDate: "OUT 2021 - SET 2022",
      marinhoDesc1: "Desenvolvi uma API Python para OCR que extraiu informações de arquivos PDF e imagens com precisão de 95%, reduzindo o tempo manual de processamento e automatizando o processo de serialização das informações.",
      marinhoDesc2: "Implementei pipelines CI/CD no Github e GitLab, permitindo deploy automatizado na AWS via Docker, com versionamento de código e execução de testes automatizados para garantir a estabilidade da aplicação.",
      marinhoDesc3: "Dockerizei aplicações Python, facilitando a implementação, escalabilidade e manutenção no servidor por meio de Docker e Docker Compose.",
      lineRole: "Suporte Técnico",
      lineDate: "ABR 2021 - AGO 2021",
      lineDesc1: "Prestei suporte ao cliente presencial e remoto, solucionando problemas técnicos e garantindo uma experiência fluida para os usuários.",
      lineDesc2: "Realizei manutenção e diagnóstico de sistemas em computadores, corrigindo falhas de hardware e software de forma eficiente.",
      lineDesc3: "Desenvolvi e implementei scripts de automação em Python, otimizando tarefas repetitivas e melhorando a eficiência operacional da equipe.",
      lineDesc4: "Aprimorei habilidades de comunicação e resolução de problemas, traduzindo conceitos técnicos em soluções claras e acessíveis para clientes de diferentes níveis de conhecimento.",
      footerCreated: "Criado por Matheus Tem Pass usando HTML e TailwindCSS.",
      footerRights: "© Todos os direitos reservados.",
      pageTitle: "Matheus Pass | Engenheiro de Software",
      metaDescription: "Matheus Pass - Engenheiro de Software. Penso no produto como um todo, desenvolvendo soluções escaláveis que acompanham as demandas do mercado.",
      educationTitle: "Formação acadêmica:",
      utfprDegree: "Tecnólogo em Sistemas para Internet",
      utfprDate: "Ago 2025 - Ago 2028",
      utfprDesc1: "Minha segunda graduação foi em Tecnologia em Sistemas para a Internet, período em que ampliei meus conhecimentos em desenvolvimento web, backend e trabalho em equipe. Nesse processo, também fortaleci minha experiência com versionamento de código e colaboração em projetos, sempre com foco em organização e eficiência.",
      utfprDesc2: "Ao longo dessa formação, mantive a prioridade em boas práticas de desenvolvimento, performance e construção de soluções de forma colaborativa. Essa vivência contribuiu para consolidar ainda mais minha base técnica e minha capacidade de atuar em diferentes contextos do desenvolvimento de software.",
      fagDegree: "Bacharelado em Engenharia de Software",
      fagDate: "Jan 2020 - Jan 2024",
      fagDesc1: "Durante minha graduação em Engenharia de Software, desenvolvi habilidades em desenvolvimento full stack, arquitetura de software e metodologias ágeis, como Scrum e Kanban. Participei de projetos colaborativos utilizando Git e GitHub, além de atuar na criação de APIs RESTful e microsserviços com Node.js, Python e bancos de dados SQL e NoSQL.",
      fagDesc2: "Também aprofundei meus conhecimentos em CI/CD, testes automatizados, documentação de sistemas e otimização de performance. Esse processo me permitiu desenvolver aplicações escaláveis com React, Next.js e integrações com serviços em nuvem, sempre com foco em soluções práticas para problemas reais."
    },
    "en-US": {
      localTime: "Local time:",
      localTimeTooltip: "I'm in Brazil, GMT-3",
      role: "{age} years old, Software Engineer",
      bio: "I think about the product as a whole, developing scalable solutions that keep up with market demands both inside and outside the code.",
      contact: "Get in touch",
      experienceTitle: "Professional experience:",
      verzelRole: "Full Stack Developer",
      verzelDate: "APR 2025 - Present",
      verzelDesc1: "I work on the maintenance and fullstack development of a platform focused on automating customer service and ticket management, enabling companies to scale their interactions with users and clients intelligently and efficiently.",
      verzelDesc2: "I develop and maintain robust APIs in Java with Quarkus, integrated with AWS API Gateway, using asynchronous communication with SQS queues and Lambda functions to ensure a scalable and high-performance architecture.",
      cymsRole: "Software Developer",
      cymsDate: "APR 2024 - SEP 2024",
      cymsDesc1: "I developed and implemented a healthcare system, including device-based geolocation, a gamified achievements system, and forms for registration and data collection.",
      cymsDesc2: "I reduced payment gateway implementation time in our applications by developing a centralized API that standardized and optimized transaction endpoints. This solution improved system scalability and facilitated the integration of new payment methods, reducing the need for manual adjustments in each service.",
      marinhoRole: "Software Engineer",
      marinhoDate: "OCT 2021 - SEP 2022",
      marinhoDesc1: "I developed a Python API for OCR that extracted information from PDF files and images with 95% accuracy, reducing manual processing time and automating the information serialization process.",
      marinhoDesc2: "I implemented CI/CD pipelines on Github and GitLab, enabling automated deployment to AWS via Docker, with code versioning and automated test execution to ensure application stability.",
      marinhoDesc3: "I dockerized Python applications, facilitating implementation, scalability, and server maintenance through Docker and Docker Compose.",
      lineRole: "Technical Support",
      lineDate: "APR 2021 - AUG 2021",
      lineDesc1: "I provided in-person and remote customer support, solving technical problems and ensuring a smooth experience for users.",
      lineDesc2: "I performed maintenance and system diagnostics on computers, efficiently fixing hardware and software failures.",
      lineDesc3: "I developed and implemented automation scripts in Python, optimizing repetitive tasks and improving the team's operational efficiency.",
      lineDesc4: "I enhanced communication and problem-solving skills, translating technical concepts into clear and accessible solutions for clients with different levels of knowledge.",
      footerCreated: "Created by Matheus Tem Pass using HTML and TailwindCSS.",
      footerRights: "© All rights reserved.",
      pageTitle: "Matheus Pass | Software Engineer",
      metaDescription: "Matheus Pass - Software Engineer. I think about the product as a whole, developing scalable solutions that keep up with market demands.",
      educationTitle: "Education:",
      utfprDegree: "Associate Degree in Internet Systems",
      utfprDate: "Aug 2025 - Aug 2028",
      utfprDesc1: "My second degree was in Internet Systems Technology, during which I expanded my knowledge in web development, backend, and teamwork. In this process, I also strengthened my experience with code versioning and project collaboration, always focusing on organization and efficiency.",
      utfprDesc2: "Throughout this program, I maintained a priority on development best practices, performance, and building solutions collaboratively. This experience contributed to further consolidating my technical foundation and my ability to work in different software development contexts.",
      fagDegree: "Bachelor's Degree in Software Engineering",
      fagDate: "Jan 2020 - Jan 2024",
      fagDesc1: "During my Software Engineering degree, I developed skills in full stack development, software architecture, and agile methodologies such as Scrum and Kanban. I participated in collaborative projects using Git and GitHub, as well as working on RESTful APIs and microservices with Node.js, Python, and SQL/NoSQL databases.",
      fagDesc2: "I also deepened my knowledge in CI/CD, automated testing, system documentation, and performance optimization. This process allowed me to develop scalable applications with React, Next.js, and cloud service integrations, always focusing on practical solutions to real problems."
    }
  };

  var currentLanguage = localStorage.getItem("preferred-language") || "pt-BR";

  function calculateAge(fromDate, referenceDate) {
    var age = referenceDate.getFullYear() - fromDate.getFullYear();
    var monthDiff = referenceDate.getMonth() - fromDate.getMonth();
    var dayDiff = referenceDate.getDate() - fromDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age -= 1;
    }

    return age;
  }

  function applyTranslations(lang) {
    var t = translations[lang];
    if (!t) return;

    document.querySelectorAll("[data-i18n]").forEach(function(el) {
      var key = el.getAttribute("data-i18n");
      if (t[key]) {
        var text = t[key];
        if (key === "role") {
          var age = calculateAge(birthDate, new Date());
          text = text.replace("{age}", age);
          el.innerHTML = '<span id="current-age">' + age + '</span>' + text.substring(text.indexOf(" "));
        } else {
          el.textContent = text;
        }
      }
    });

    document.documentElement.lang = lang === "pt-BR" ? "pt-BR" : "en";

    document.title = t.pageTitle;

    var metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", t.metaDescription);

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t.pageTitle);

    var ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", t.metaDescription);

    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", lang === "pt-BR" ? "pt_BR" : "en_US");

    var twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", t.pageTitle);

    var twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", t.metaDescription);
  }

  function formatToGMTMinus3(date) {
    var utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
    var gmtMinus3 = new Date(utc + -3 * 60 * 60 * 1000);
    return gmtMinus3.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  function updateTime() {
    if (timeElement) {
      timeElement.textContent = formatToGMTMinus3(new Date());
    }
  }

  function updateAge() {
    if (ageElement && birthDate instanceof Date && !isNaN(birthDate)) {
      ageElement.textContent = calculateAge(birthDate, new Date());
    }
  }

  updateTime();
  updateAge();
  setInterval(updateTime, 60000);
  setInterval(updateAge, 60 * 60 * 1000);

  // Language Selector
  var langBtn = document.getElementById("language-selector-btn");
  var langDropdown = document.getElementById("language-dropdown");
  var langChevron = document.getElementById("language-chevron");
  var currentFlag = document.getElementById("current-flag");
  var currentLang = document.getElementById("current-lang");
  var langOptions = document.querySelectorAll(".language-option");

  function toggleDropdown() {
    var isOpen = langDropdown.classList.contains("opacity-100");
    if (isOpen) {
      langDropdown.classList.remove("opacity-100", "visible", "translate-y-0");
      langDropdown.classList.add("opacity-0", "invisible", "-translate-y-2");
      langChevron.classList.remove("rotate-180");
    } else {
      langDropdown.classList.remove("opacity-0", "invisible", "-translate-y-2");
      langDropdown.classList.add("opacity-100", "visible", "translate-y-0");
      langChevron.classList.add("rotate-180");
    }
  }

  langBtn.addEventListener("click", toggleDropdown);

  document.addEventListener("click", function (e) {
    if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
      langDropdown.classList.remove("opacity-100", "visible", "translate-y-0");
      langDropdown.classList.add("opacity-0", "invisible", "-translate-y-2");
      langChevron.classList.remove("rotate-180");
    }
  });

  langOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      var lang = this.getAttribute("data-lang");
      var flag = this.getAttribute("data-flag");
      currentFlag.textContent = flag;
      currentLang.textContent = lang;
      localStorage.setItem("preferred-language", lang);
      currentLanguage = lang;
      applyTranslations(lang);
      toggleDropdown();
    });
  });

  var savedLang = localStorage.getItem("preferred-language");
  if (savedLang) {
    var savedOption = document.querySelector('.language-option[data-lang="' + savedLang + '"]');
    if (savedOption) {
      currentFlag.textContent = savedOption.getAttribute("data-flag");
      currentLang.textContent = savedLang;
      currentLanguage = savedLang;
    }
  }

  applyTranslations(currentLanguage);

  // Experience tabs
  var tabs = document.querySelectorAll(".experience-tab");
  var contents = document.querySelectorAll(".experience-content");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var targetId = this.getAttribute("data-tab");

      tabs.forEach(function (t) {
        t.classList.remove("active");
      });

      contents.forEach(function (c) {
        c.classList.add("hidden");
      });

      this.classList.add("active");
      document.getElementById(targetId).classList.remove("hidden");
    });
  });
});
