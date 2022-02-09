$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/dentist/appointment/Appointment.feature");
formatter.feature({
  "line": 2,
  "name": "Запазване на час при зъболекар -\u003e гостин.",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въведе \"\u003cиме\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Потребителя сложи идентификационнен номер за своя час \"\u003cидентификация\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя датум: \"\u003cдата\u003e\" за часа",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избере потребителя време: \"\u003cчас\u003e\" за часа",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение :\"\u003cСъобщение\u003e\".",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
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
      "line": 16,
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
      "line": 17,
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
      "line": 18,
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
      "line": 19,
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
      "line": 20,
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
      "line": 21,
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
      "line": 22,
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
      "line": 23,
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
      "line": 24,
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
      "line": 25,
      "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2320\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя датум: \"02.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 179442600,
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
  "duration": 2333600,
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
  "duration": 60200,
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
  "duration": 59900,
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
  "duration": 63300,
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
  "duration": 53800,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 9905700,
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
  "duration": 1749500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2320\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя датум: \"\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 45000,
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
  "duration": 107700,
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
  "duration": 76900,
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
  "duration": 61700,
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
  "duration": 63600,
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
  "duration": 51000,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 48700,
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
  "duration": 139600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2320\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя датум: \"02.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избере потребителя време: \"\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 64200,
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
  "duration": 71500,
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
  "duration": 85200,
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
  "duration": 79300,
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
  "duration": 54600,
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
  "duration": 48800,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 28300,
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
  "duration": 49100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2320\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя датум: \"02.02.1995\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 40500,
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
  "duration": 61500,
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
  "duration": 56600,
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
  "duration": 50300,
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
  "duration": 49700,
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
  "duration": 44700,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 27100,
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
  "duration": 51200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Потребителя сложи идентификационнен номер за своя час \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя датум: \"02.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 38200,
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
  "duration": 53800,
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
  "duration": 47700,
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
  "duration": 44500,
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
  "duration": 44300,
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
  "duration": 63700,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 49000,
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
  "duration": 60500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя датум: \"02.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 47300,
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
  "duration": 62800,
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
  "duration": 63800,
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
  "duration": 81600,
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
  "duration": 67000,
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
  "duration": 53700,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 31200,
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
  "duration": 60100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи \"alex123@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Потребителя сложи идентификационнен номер за своя час \"1111\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя датум: \"15.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избере потребителя време: \"10:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 37900,
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
  "duration": 53600,
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
  "duration": 52700,
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
  "duration": 47300,
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
  "duration": 56500,
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
  "duration": 59400,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 89900,
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
  "duration": 50800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи \"abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2320\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя датум: \"02.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 46500,
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
  "duration": 77700,
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
  "duration": 78900,
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
  "duration": 174100,
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
  "duration": 37100,
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
  "duration": 34600,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 63500,
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
  "duration": 69900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Запазване на час при зъболекар",
  "description": "",
  "id": "запазване-на-час-при-зъболекар--\u003e-гостин.;запазване-на-час-при-зъболекар;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въведе \"Алекс\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Потребителя сложи \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Потребителя сложи идентификационнен номер за своя час \"2320\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Избере потребителя датум: \"02.02.2022\" за часа",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избере потребителя време: \"15:30\" за часа",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 40300,
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
  "duration": 64500,
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
  "duration": 48700,
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
  "duration": 46700,
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
  "duration": 58400,
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
  "duration": 45300,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 72100,
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
  "duration": 68200,
  "status": "passed"
});
});