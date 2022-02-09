$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/dentist/appointment/Appointment.feature");
formatter.feature({
  "line": 2,
  "name": "Запазване на час при зъболекар -\u003e гостин.",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въведе \"\u003cиме\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Потребителя сложи \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи идентификационнен номер за своя час \"\u003cидентификация\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Избере потребителя датум: \"\u003cдата\u003e\" за часа",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя време: \"\u003cчас\u003e\" за часа",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Вижда съобщение :\"\u003cСъобщение\u003e\".",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;",
  "rows": [
    {
      "cells": [
        "име",
        "email",
        "идентификация",
        "дата",
        "час",
        "Съобщение"
      ],
      "line": 15,
      "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;1"
    },
    {
      "cells": [
        "Алекс",
        "alex123@abv.bg",
        "2320",
        "02.02.2022",
        "15:30",
        "Успешно запазихте час, потвърдете чрез вашия е-майл!"
      ],
      "line": 16,
      "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;2"
    },
    {
      "cells": [
        "Алекс",
        "alex123@abv.bg",
        "2320",
        "",
        "15:30",
        "Изберете дата"
      ],
      "line": 17,
      "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;3"
    },
    {
      "cells": [
        "Алекс",
        "alex123@abv.bg",
        "2320",
        "02.02.2022",
        "",
        "Изберете час"
      ],
      "line": 18,
      "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;4"
    },
    {
      "cells": [
        "Алекс",
        "alex123@abv.bg",
        "2320",
        "02.02.1995",
        "15:30",
        "Изберете валидна дата"
      ],
      "line": 19,
      "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;5"
    },
    {
      "cells": [
        "Алекс",
        "alex123@abv.bg",
        "",
        "02.02.2022",
        "15:30",
        "Въведете идентификационнен номер"
      ],
      "line": 20,
      "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;6"
    },
    {
      "cells": [
        "Алекс",
        "alex123@abv.bg",
        "2",
        "02.02.2022",
        "15:30",
        "Идентификацията трябва да е мин. четири символа"
      ],
      "line": 21,
      "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;7"
    },
    {
      "cells": [
        "Алекс",
        "alex123@abv.bg",
        "1111",
        "15.02.2022",
        "10:30",
        "Часа е зает!"
      ],
      "line": 22,
      "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;8"
    },
    {
      "cells": [
        "Алекс",
        "abv.bg",
        "2320",
        "02.02.2022",
        "15:30",
        "Въведете валиден емаил!"
      ],
      "line": 23,
      "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;9"
    },
    {
      "cells": [
        "Алекс",
        "",
        "2320",
        "02.02.2022",
        "15:30",
        "Въведете валиден емаил!"
      ],
      "line": 24,
      "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2320\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Избере потребителя датум: \"02.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Вижда съобщение :\"Успешно запазихте час, потвърдете чрез вашия е-майл!\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentScreen()"
});
formatter.result({
  "duration": 408484500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Алекс",
      "offset": 20
    }
  ],
  "location": "AppointmentSteps.addName(String)"
});
formatter.result({
  "duration": 4612900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alex123@abv.bg",
      "offset": 19
    }
  ],
  "location": "AppointmentSteps.addEmail(String)"
});
formatter.result({
  "duration": 139400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2320",
      "offset": 55
    }
  ],
  "location": "AppointmentSteps.addId(String)"
});
formatter.result({
  "duration": 161800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02.02.2022",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addDate(String)"
});
formatter.result({
  "duration": 174600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15:30",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addTime(String)"
});
formatter.result({
  "duration": 154100,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 3386300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно запазихте час, потвърдете чрез вашия е-майл!",
      "offset": 18
    }
  ],
  "location": "AppointmentSteps.checkMessage(String)"
});
formatter.result({
  "duration": 2833200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2320\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Избере потребителя датум: \"\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Вижда съобщение :\"Изберете дата\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentScreen()"
});
formatter.result({
  "duration": 302600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Алекс",
      "offset": 20
    }
  ],
  "location": "AppointmentSteps.addName(String)"
});
formatter.result({
  "duration": 150000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alex123@abv.bg",
      "offset": 19
    }
  ],
  "location": "AppointmentSteps.addEmail(String)"
});
formatter.result({
  "duration": 134000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2320",
      "offset": 55
    }
  ],
  "location": "AppointmentSteps.addId(String)"
});
formatter.result({
  "duration": 121200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addDate(String)"
});
formatter.result({
  "duration": 144500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15:30",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addTime(String)"
});
formatter.result({
  "duration": 646500,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 78300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Изберете дата",
      "offset": 18
    }
  ],
  "location": "AppointmentSteps.checkMessage(String)"
});
formatter.result({
  "duration": 114900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2320\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Избере потребителя датум: \"02.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя време: \"\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Вижда съобщение :\"Изберете час\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentScreen()"
});
formatter.result({
  "duration": 297900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Алекс",
      "offset": 20
    }
  ],
  "location": "AppointmentSteps.addName(String)"
});
formatter.result({
  "duration": 133100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alex123@abv.bg",
      "offset": 19
    }
  ],
  "location": "AppointmentSteps.addEmail(String)"
});
formatter.result({
  "duration": 132200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2320",
      "offset": 55
    }
  ],
  "location": "AppointmentSteps.addId(String)"
});
formatter.result({
  "duration": 111200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02.02.2022",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addDate(String)"
});
formatter.result({
  "duration": 129300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addTime(String)"
});
formatter.result({
  "duration": 138000,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 89000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Изберете час",
      "offset": 18
    }
  ],
  "location": "AppointmentSteps.checkMessage(String)"
});
formatter.result({
  "duration": 121400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2320\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Избере потребителя датум: \"02.02.1995\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Вижда съобщение :\"Изберете валидна дата\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentScreen()"
});
formatter.result({
  "duration": 315300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Алекс",
      "offset": 20
    }
  ],
  "location": "AppointmentSteps.addName(String)"
});
formatter.result({
  "duration": 121900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alex123@abv.bg",
      "offset": 19
    }
  ],
  "location": "AppointmentSteps.addEmail(String)"
});
formatter.result({
  "duration": 120300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2320",
      "offset": 55
    }
  ],
  "location": "AppointmentSteps.addId(String)"
});
formatter.result({
  "duration": 104800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02.02.1995",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addDate(String)"
});
formatter.result({
  "duration": 140200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15:30",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addTime(String)"
});
formatter.result({
  "duration": 106700,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 105400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Изберете валидна дата",
      "offset": 18
    }
  ],
  "location": "AppointmentSteps.checkMessage(String)"
});
formatter.result({
  "duration": 142700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи идентификационнен номер за своя час \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Избере потребителя датум: \"02.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Вижда съобщение :\"Въведете идентификационнен номер\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentScreen()"
});
formatter.result({
  "duration": 449900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Алекс",
      "offset": 20
    }
  ],
  "location": "AppointmentSteps.addName(String)"
});
formatter.result({
  "duration": 122600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alex123@abv.bg",
      "offset": 19
    }
  ],
  "location": "AppointmentSteps.addEmail(String)"
});
formatter.result({
  "duration": 109600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 55
    }
  ],
  "location": "AppointmentSteps.addId(String)"
});
formatter.result({
  "duration": 148000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02.02.2022",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addDate(String)"
});
formatter.result({
  "duration": 148700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15:30",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addTime(String)"
});
formatter.result({
  "duration": 146100,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 76300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете идентификационнен номер",
      "offset": 18
    }
  ],
  "location": "AppointmentSteps.checkMessage(String)"
});
formatter.result({
  "duration": 163700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Избере потребителя датум: \"02.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Вижда съобщение :\"Идентификацията трябва да е мин. четири символа\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentScreen()"
});
formatter.result({
  "duration": 342600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Алекс",
      "offset": 20
    }
  ],
  "location": "AppointmentSteps.addName(String)"
});
formatter.result({
  "duration": 135900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alex123@abv.bg",
      "offset": 19
    }
  ],
  "location": "AppointmentSteps.addEmail(String)"
});
formatter.result({
  "duration": 124200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 55
    }
  ],
  "location": "AppointmentSteps.addId(String)"
});
formatter.result({
  "duration": 189500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02.02.2022",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addDate(String)"
});
formatter.result({
  "duration": 232000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15:30",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addTime(String)"
});
formatter.result({
  "duration": 117100,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 70800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Идентификацията трябва да е мин. четири символа",
      "offset": 18
    }
  ],
  "location": "AppointmentSteps.checkMessage(String)"
});
formatter.result({
  "duration": 243000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи идентификационнен номер за своя час \"1111\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Избере потребителя датум: \"15.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя време: \"10:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Вижда съобщение :\"Часа е зает!\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentScreen()"
});
formatter.result({
  "duration": 346600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Алекс",
      "offset": 20
    }
  ],
  "location": "AppointmentSteps.addName(String)"
});
formatter.result({
  "duration": 106600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alex123@abv.bg",
      "offset": 19
    }
  ],
  "location": "AppointmentSteps.addEmail(String)"
});
formatter.result({
  "duration": 196500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 55
    }
  ],
  "location": "AppointmentSteps.addId(String)"
});
formatter.result({
  "duration": 120500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15.02.2022",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addDate(String)"
});
formatter.result({
  "duration": 89100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10:30",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addTime(String)"
});
formatter.result({
  "duration": 105900,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 162700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Часа е зает!",
      "offset": 18
    }
  ],
  "location": "AppointmentSteps.checkMessage(String)"
});
formatter.result({
  "duration": 128900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Потребителя сложи \"abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2320\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Избере потребителя датум: \"02.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Вижда съобщение :\"Въведете валиден емаил!\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentScreen()"
});
formatter.result({
  "duration": 382900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Алекс",
      "offset": 20
    }
  ],
  "location": "AppointmentSteps.addName(String)"
});
formatter.result({
  "duration": 113500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abv.bg",
      "offset": 19
    }
  ],
  "location": "AppointmentSteps.addEmail(String)"
});
formatter.result({
  "duration": 103300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2320",
      "offset": 55
    }
  ],
  "location": "AppointmentSteps.addId(String)"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02.02.2022",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addDate(String)"
});
formatter.result({
  "duration": 112800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15:30",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addTime(String)"
});
formatter.result({
  "duration": 96900,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 75600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете валиден емаил!",
      "offset": 18
    }
  ],
  "location": "AppointmentSteps.checkMessage(String)"
});
formatter.result({
  "duration": 239900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Потребителя сложи \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2320\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Избере потребителя датум: \"02.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Вижда съобщение :\"Въведете валиден емаил!\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentScreen()"
});
formatter.result({
  "duration": 232300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Алекс",
      "offset": 20
    }
  ],
  "location": "AppointmentSteps.addName(String)"
});
formatter.result({
  "duration": 76800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "AppointmentSteps.addEmail(String)"
});
formatter.result({
  "duration": 69900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2320",
      "offset": 55
    }
  ],
  "location": "AppointmentSteps.addId(String)"
});
formatter.result({
  "duration": 84800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02.02.2022",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addDate(String)"
});
formatter.result({
  "duration": 102900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15:30",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.addTime(String)"
});
formatter.result({
  "duration": 89500,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 131100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете валиден емаил!",
      "offset": 18
    }
  ],
  "location": "AppointmentSteps.checkMessage(String)"
});
formatter.result({
  "duration": 219200,
  "status": "passed"
});
formatter.uri("uni/dentist/login/login.feature");
formatter.feature({
  "line": 2,
  "name": "Вход в системата",
  "description": "",
  "id": "вход-в-системата",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 329500,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Вход в системата с валидни потребителски данни",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-с-валидни-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Въведе валиден идентификационнен номер",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "въведе потребителско име: \"Alex22\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "въведе валидна потребителска парола",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "натисне бутина за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Вижда съобщение: \"Успешно влизане!\".",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.addId()"
});
formatter.result({
  "duration": 85200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alex22",
      "offset": 27
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 165200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.addPassword()"
});
formatter.result({
  "duration": 76700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 2142600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно влизане!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkMessage(String)"
});
formatter.result({
  "duration": 148000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 259100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Вход в системата без парола",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-без-парола",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "Въведе валиден идентификационнен номер",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "въведе потребителско име: \"Alex22\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "натисне бутина за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Вижда съобщение: \"Въведете всички данни!\".",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.addId()"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alex22",
      "offset": 27
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 78700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 41200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете всички данни!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkMessage(String)"
});
formatter.result({
  "duration": 122500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 230000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Вход в системата без потребителско име",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-без-потребителско-име",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Въведе валиден идентификационнен номер",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "въведе валидна потребителска парола",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "натисне бутина за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Вижда съобщение: \"Въведете всички данни!\".",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.addId()"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.addPassword()"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете всички данни!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkMessage(String)"
});
formatter.result({
  "duration": 96700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 293200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Вход в системата без идентификационнен номер",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-без-идентификационнен-номер",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "въведе потребителско име: \"Alex22\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "въведе валидна потребителска парола",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "натисне бутина за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Вижда съобщение: \"Въведете всички данни!\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Alex22",
      "offset": 27
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 78200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.addPassword()"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 25700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете всички данни!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkMessage(String)"
});
formatter.result({
  "duration": 69600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 247600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Вход в системата без потребителски данни",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-без-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "натисне бутина за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Вижда съобщение: \"Въведете всички данни!\".",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 33400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете всички данни!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkMessage(String)"
});
formatter.result({
  "duration": 75600,
  "status": "passed"
});
});