"use strict";

var questions = [
  {
    question: "Чем больше прав и возможностей у каждого участника, тем общество справедливей и честней.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question: "Любая власть должна быть оспоримой.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question: "Проводить различные реформы нужно только при их одобрении их народом (большим количеством участников), посредством проведения голосований/референдумов; каждый участник должен иметь право голоса и право свободно участвовать в таком голосовании/референдуме.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question: "Назначать новых руководителей википроекта лучше всего посредством проведения соответствующих голосований на вики, вместо того, чтобы оставлять это решение на усмотрение действующего(-их) бюрократа(-ов).",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question: "Решения, принятые большинством, не всегда являются лучшими и правильными, поэтому администрация, вне зависимости от результатов голосования/обсуждения, может иметь право принимать иное решение и поступать по-своему.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question: "Никто, кроме меня, не может адекватно представлять свою точку зрения. Моё слово — закон.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question: "Администрация не должна указывать участникам, как им стоит поступать, а как не стоит.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      },
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      },
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question: "Во избежание проблемы оторванности от народа, каждому администратору нужно быть таким же открытым и общительным перед обычными участниками, как и перед другими администраторами/модераторами.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question: "Такие статусы, как «бюрократ», «администратор», «модератор» не делают участника выше и главнее остальных. Это лишь инструменты, дающие доступ к определённым функциям википроекта.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question: "Активное наблюдение за всеми действиями, происходящими на проекте со стороны администрации, необходимо на вики.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question: "Администрация не должна регулировать отношения между участниками, вмешиваться в их личные разборки и споры. Мирное разрешение конфликтов — это обязанность всех участников.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question: "Большей свободы для участников можно достичь сокращением некоторых функций администрации и/или сделав правила википроекта менее жёсткими и строгими.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question: "Сильная власть не может исправить недостатки участников.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question: "Большинство участников принимает неверные решения в отношении тех или иных вопросов, поэтому необходимо направить их в определённую сторону, научить их установленным правилам, принципам.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question: "Независимо от идеологических взглядов, необходимо быть на стороне администрации своей вики.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question: "Мнение администрации чаще всего является более важным и авторитетным, нежели мнение обычных участников.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question: "Администрация, по сравнению с обычными участниками, может иметь исключения касательно правил вики (т. е. те правила, которые обязаны соблюдать все обычные участники, администрация имеет право не соблюдать в определённых ситуациях).",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question: "Без чёткого и строгого контроля за википроектом администраторами, на вики наступит анархия и хаос.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question: "Многие вопросы, касаемые тех или иных сторон википроекта, не обязательно, либо не нужно выносить на обсуждение/референдум перед всеми участниками — вместо этого, можно решить их в узком кругу экспертных участников.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question: "Администрации не нужно запрещать неэтичные виды поведения участников в комментариях и в чате (например, мат, содержимое эротического характера и прочее).",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question: "Все участники википроекта должны иметь свободу слова и право свободно высказывать своё мнение.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question: "Я считаю свободу участников главной ценностью вики-общества.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      },
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      },
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question: "Все пользователи на википроекте обязательно должны соблюдать этикет, общаться прилично, не нарушать нормы и правила поведения людей в обществе.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question: "Нечитаемые комментарии, содержащие большое количество ошибок, либо просто бессмысленное содержание, следует чистить и подвергать цензуре.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question: "Я ничего не имею против участников, которые на вики активно используют в своей речи пошлые, вульгарные и непристойные выражения.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question: "Нет ничего плохого в том, если какой-либо участник при общении на вики зачастую намеренно подвергает слова умышленному искажению, либо активно использует сленг и жаргон.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question: "Для поддержания дружелюбной атмосферы на википроекте следует обязать всех участников выражаться грамотно и ясно.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question: "Необходимо вести контроль за общением участников, и, в случае чего, чистить содержимое комментариев/сообщений недопустимого характера.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question: "Я, как правило, ставлю общественные интересы над личными.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "Желаниями отдельно взятых участников можно на время пренебречь, отдав приоритет выполнению первостепенных задач развития википроекта.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "Поскольку все участники на вики — полноценные члены единого сообщества, то лучше ко всем ним применять единый подход, а не индивидуальный для каждого.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "Развитие вики-общества невозможно без существования единых для всех целей и задач.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "Одним из основных стимулов саморазвития для меня является конкуренция с другими участниками (например, в конкурсах).",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      }
    ]
  },
  {
    question: "Важно, чтобы у участников википроекта были общие интересы.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "Я предпочитаю работать с другими участниками коллективно, сообща, нежели самостоятельно, в одиночку.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "Нередко случаются ситуации, когда я принимаю решения сам, исходя исключительно из своих побуждений, не учитывая общественное мнение.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      }
    ]
  },
  {
    question: "В первую очередь надо уделять внимание целому вики-сообществу, а только потом уже, во вторую очередь — отдельно взятым личностям.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "Полноценная работа и функционирование википроекта невозможны без развитого сообщества.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "Не случалось таких ситуаций, когда я хотел бы сделать что-то, что принесло бы пользу и выгоду исключительно мне самому.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "Не стоит чрезмерно завышать сроки банов участников (например, выдавать баны сроком на несколько месяцев, полгода или больше).",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question: "Мы должны давать участникам-нарушителям возможность извиняться за свои проступки и исправляться.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question: "Если участник получил бан, администрация обязана поговорить с ним, обсудить произошедшее, попытаться заставить нарушителя понять, почему он не должен делать то, что сделал, и почему он был наказан.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question: "С теми, кто нарушал правила неоднократно, бесполезно пытаться найти общий язык.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question: "За нарушителями-рецедивистами необходимо вести более строгий надзор и контроль.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question: "Участнику, по поведению которого видно, что он потенциально опасен и может натворить много вреда для общества, лучше превентивно выдать блокировку, чем допускать риск совершения им преступлений.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question: "К нарушителю-рецедивисту вполне оправдано негативное отношение со стороны остальных участников, и неприязнь в обществе.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question: "Правосудие должно всегда учитывать контекст и прошлое нарушителей, и соответствующим образом адаптировать свои наказания.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question: "Мы должны уметь прощать даже перманентно забаненных участников, посредством разбана и реинтеграции их в общество спустя определённое количество времени после блокировки.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question: "Следует прибегать к блокировкам пользователей как можно реже, отдавая приоритет вместо этого разговорам и обсуждениям касательно их поведения.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question: "Любой участник, какой бы проступок он не совершил, заслуживает прощения и второго шанса.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question: "Лучшая жизнь вики-общества придёт путём прогресса, развития, изменений в википроекте.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question: "Важно сохранять традиции, принципы прошлого.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "Мы ни при каких обстоятельствах не должны менять что-либо, что доказало свою пользу и работоспособность многими годами ранее.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "Преследовать прогресс зачастую бывает нерационально и слишком затратно.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "Подключение к работе википроекта новых функций — это в любом случае положительный процесс, который означает развитие, изучение и познание нового.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question: "Важно постоянно следовать в ногу со временем, и в случае чего, незамедлительно делать обновления тех или иных элементов википроекта.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question: "Я поддерживаю объединение Фэндома и Gamepedia в единую платформу (UCP), а также масштабное обновление, связанное с перемещением википроектов на новую платформу.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      },
      {
        axis: "ref",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      },
      {
        axis: "react",
        value: 3
      }
    ]
  },
  {
    question: "Я считаю, что за последние несколько лет Фэндом во многом изменился к лучшему.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      },
      {
        axis: "ref",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      },
      {
        axis: "react",
        value: 3
      }
    ]
  },
  {
    question: "Я поддерживаю удаление/изменение многих расширений, таких как: чат, голосования, комментарии, в связи с масштабным переходом Фэндома на новую единую платформу UCP.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      },
      {
        axis: "ref",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      },
      {
        axis: "react",
        value: 3
      }
    ]
  },
  {
    question: "Я считаю, что новые профили и стены обсуждений участников единой платформы UCP, сделанные на основе технологии обсуждений, гораздо лучше, практичнее и удобнее старых стен обсуждения, сделанных на основе MediaWiki.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      },
      {
        axis: "ref",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      },
      {
        axis: "react",
        value: 3
      }
    ]
  },
  {
    question: "Я считаю, что новый редактор на платформе UCP удобнее и практичнее старого.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      },
      {
        axis: "ref",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      },
      {
        axis: "react",
        value: 3
      }
    ]
  },
  {
    question: "Я поддерживаю новое разделение страницы свежих правок по вкладкам на платформе UCP.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      },
      {
        axis: "ref",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      },
      {
        axis: "react",
        value: 3
      }
    ]
  },
  {
    question: "Обсуждения — если не лучше форумов, то по крайне мере, это неплохая альтернатива им.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question: "Удаление форумов и полная замена их обсуждениями — крайне предательский и подлый ход со стороны Фэндома.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      },
      {
        axis: "react",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      },
      {
        axis: "ref",
        value: 3
      }
    ]
  },
  {
    question: "Я — сторонник свержения тиранических режимов на википроектах революционным путём.",
    answer: 0,
    valuesYes: [
      {
        axis: "revo",
        value: 3
      }
    ],
    valuesNo: []
  },
  {
    question: "Я поддерживаю радикальные революционные преобразования на википроектах.",
    answer: 0,
    valuesYes: [
      {
        axis: "revo",
        value: 3
      }
    ],
    valuesNo: []
  },
  {
    question: "Я активно занимаюсь правками на многих википроектах, не только на каком-то одном.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question: "У меня есть википроект, который гораздо более важен и значим для меня по сравнению с остальными вики.",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question: "Я интересуюсь внешней политикой Фэндома, изменениями на викихостинге.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question: "Я интересуюсь различными википроектами из разных тематических порталов (например, порталы видеоигр, сериалов, книг, анимаций и прочие).",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question: "Я стараюсь не выходить за рамки какого-то одного языкового портала Фэндома (например, русского). ",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question: "Я активно принимаю участие в различных обсуждениях на центральной Вики Сообщества по тем или иным вопросам.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question: "Я активно сотрудничаю с участниками и администраторами разных википроектов.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      },
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      },
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question: "Я готов добровольно, в случае чего, помочь даже совершенно незнакомому мне википроекту.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question: "Большая часть всех моих правок были совершены только на каком-то одном википроекте.",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question: "Я активно посещаю и провожу время на разных википроектах на Фэндоме, и в целом стараюсь расширить свой кругозор.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question: "Я активно способствую поддержанию дипломатических и дружественных отношений между несколькими википроектами, в развитии которых я заинтересован.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question: "Я выступаю за интеграцию — сближение нескольких википроектов, которые мне интересны, в сторону взаимного сотрудничества.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question: "Я не заинтересован в участии в каких-либо викисоюзах/альянсах.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question: "Я считаю, что википроекты схожих тематик должны объединяться в викисоюзы или альянсы.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question: "Викисоюзы и альянсы могут представлять угрозу суверенитету отдельным и независимым википроектам.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question: "Викисоюзы, как правило, не несут в себе никакой реальной пользы и существуют только на словах. Они не приводят ни к чему хорошему, и часто совершенно не нужны википроектам.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
   {
    question: "Я состою в каком-либо викисоюзе/альянсе, и активно принимаю участие в его развитии.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question: "Я поддерживаю проведение каким-либо викисоюзом (в котором я состою лично, либо в котором я заинтересован) политики экспансии — активной интеграции и присоединения к викисоюзу новых википроектов.",
    answer: 0,
    valuesYes: [
      {
        axis: "expan",
        value: 3
      }
    ],
    valuesNo: []
  },
  {
    question: "Интервенция (вмешательство) какого-либо крупного викисоюза в дела отдельно взятого википроекта, в том числе с целью присоединения к союзу последнего, идёт на пользу обоим сторонам.",
    answer: 0,
    valuesYes: [
      {
        axis: "expan",
        value: 3
      }
    ],
    valuesNo: []
  },
  {
    question: "Все некачественные, короткие, либо плохо оформленные статьи следует непременно подвергать удалению (НЕ согласен — все подобные статьи следует улучшать и дорабатывать, вместо того чтобы удалять; к удалению любых статей следует прибегать как можно реже).",
    answer: 0,
    valuesYes: [
      {
        axis: "delete",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "inc",
        value: 3
      }
    ]
  },
  {
    question: "Я уделяю больше внимания долгосрочной перспективе развития вики, чем текущему положению дел (НЕ согласен — я уделяю больше внимания краткосрочному развитию вики, не откладывая дела на неопределённое время; я стараюсь осуществлять все необходимые задачи сразу и быстро).",
    answer: 0,
    valuesYes: [
      {
        axis: "even",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "imm",
        value: 3
      }
    ]
  },
  {
    question: "Не стоит делить информацию на вики о чём-либо, создавая короткие статьи, а вместо этого лучше стараться максимально изложить информацию в одной большой статье (НЕ согласен — большие статьи лучше всегда разделять на отдельные, меньшие по размеру; каждой теме должно быть уделено особое внимание).",
    answer: 0,
    valuesYes: [
      {
        axis: "merge",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "separa",
        value: 3
      }
    ]
  },
  {
    question: "Я предпочитаю заниматься развитием энциклопедической стороны вики (созданием и наполнением статей и связанных с ними данных), а не социальной (НЕ согласен — я предпочитаю заниматься социальной стороной, развивать общество и взаимоотношения, поддерживать высокую активность участников в чате, тогда как качеством и наполнением статей можно пренебречь).",
    answer: 0,
    valuesYes: [
      {
        axis: "exo",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "meta",
        value: 3
      }
    ]
  },
  {
    question: "В процессе работы на вики, я стремлюсь к созданию полностью готовой и оформленной статьи всего одной большой правкой (НЕ согласен — я предпочитаю править статьи постепенно, внося мелкие правки раз за разом).",
    answer: 0,
    valuesYes: [
      {
        axis: "mono",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "poly",
        value: 3
      }
    ]
  }
];

var qn = 0; // Question number
var prev_answer = null;

function shuffle(array) {
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffle(questions);

init_question();

function init_question() {
  document.getElementById("question-text").innerHTML = questions[qn].question;
  document.getElementById(
    "question-number"
  ).innerHTML = "Вопрос %num% из %sum%"
    .replace("%num%", qn + 1)
    .replace("%sum%", questions.length);
  if (qn == 0) {
    document.getElementById("back_button").style.display = "none";
    document.getElementById("back_button_off").style.display = "block";
  } else {
    document.getElementById("back_button").style.display = "block";
    document.getElementById("back_button_off").style.display = "none";
  }
}

function next_question(mult) {
  questions[qn].answer = mult;
  qn++;

  if (qn < questions.length) {
    init_question();
  } else {
    results();
  }
}
function prev_question() {
  if (qn == 0) {
    return;
  }
  qn--;
  init_question();
}

function calc_score(score, max_value) {
  return ((100 * score) / max_value).toFixed(0);
}

function results() {
  var axes = {};

  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];

    for (var j = 0; j < q.valuesYes.length; j++) {
      var a = q.valuesYes[j];
      if (!(a.axis in axes)) {
        axes[a.axis] = {
          val: 0,
          sum: 0
        };
      }

      if (q.answer > 0) {
        axes[a.axis].val += q.answer * a.value;
      }
      axes[a.axis].sum += Math.max(a.value, 0);
    }

    for (var j = 0; j < q.valuesNo.length; j++) {
      var a = q.valuesNo[j];
      if (!(a.axis in axes)) {
        axes[a.axis] = {
          val: 0,
          sum: 0
        };
      }

      if (q.answer < 0) {
        axes[a.axis].val -= q.answer * a.value;
      }
      axes[a.axis].sum += Math.max(a.value, 0);
    }
  }

  var url = "";
  for (var aK in axes) {
    if (axes[aK].val > 0) {
      if (url != "") url += "&";
      url += aK + "=" + calc_score(axes[aK].val, axes[aK].sum);
    }
  }
  url = window.btoa(url);
  url = "/results/?" + url;

  location.href = url;
}
