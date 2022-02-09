$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/dentist/reserve/Reserve.feature");
formatter.feature({
  "line": 1,
  "name": "Запазване на час при зъболекар на регистриран потребител",
  "description": "",
  "id": "запазване-на-час-при-зъболекар-на-регистриран-потребител",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Запазване на час при зъболекар със всички данни",
  "description": "",
  "id": "запазване-на-час-при-зъболекар-на-регистриран-потребител;запазване-на-час-при-зъболекар-със-всички-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе име \"Александра\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе email \"astojanova00@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе тел.номер \"0877123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Избере дата и час 2022,02,02,15,30",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение :\"Успешно запазихте час!\".",
  "keyword": "Then "
});
formatter.match({
  "location": "ReserveSteps.openReserveScreen()"
});
formatter.result({
  "duration": 185225200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Александра",
      "offset": 12
    }
  ],
  "location": "ReserveSteps.addName(String)"
});
formatter.result({
  "duration": 2867300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "astojanova00@gmail.com",
      "offset": 14
    }
  ],
  "location": "ReserveSteps.addEmail(String)"
});
formatter.result({
  "duration": 96200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0877123456",
      "offset": 18
    }
  ],
  "location": "ReserveSteps.addPhone(String)"
});
formatter.result({
  "duration": 114100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 18
    },
    {
      "val": "02",
      "offset": 23
    },
    {
      "val": "02",
      "offset": 26
    },
    {
      "val": "15",
      "offset": 29
    },
    {
      "val": "30",
      "offset": 32
    }
  ],
  "location": "ReserveSteps.setDate(int,int,int,int,int)"
});
formatter.result({
  "duration": 2408900,
  "status": "passed"
});
formatter.match({
  "location": "ReserveSteps.clickReserveButton()"
});
formatter.result({
  "duration": 1080200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно запазихте час!",
      "offset": 18
    }
  ],
  "location": "ReserveSteps.вижда_съобщение(String)"
});
formatter.result({
  "duration": 1615900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Запазване на час при зъболекар без име",
  "description": "",
  "id": "запазване-на-час-при-зъболекар-на-регистриран-потребител;запазване-на-час-при-зъболекар-без-име",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Въведе име \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Въведе email \"astojanova00@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Въведе тел.номер \"0877123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Избере дата и час 2022,02,02,15,30",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Вижда съобщение :\"Въведете име!\".",
  "keyword": "Then "
});
formatter.match({
  "location": "ReserveSteps.openReserveScreen()"
});
formatter.result({
  "duration": 48100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "ReserveSteps.addName(String)"
});
formatter.result({
  "duration": 78600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "astojanova00@gmail.com",
      "offset": 14
    }
  ],
  "location": "ReserveSteps.addEmail(String)"
});
formatter.result({
  "duration": 75800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0877123456",
      "offset": 18
    }
  ],
  "location": "ReserveSteps.addPhone(String)"
});
formatter.result({
  "duration": 55600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 18
    },
    {
      "val": "02",
      "offset": 23
    },
    {
      "val": "02",
      "offset": 26
    },
    {
      "val": "15",
      "offset": 29
    },
    {
      "val": "30",
      "offset": 32
    }
  ],
  "location": "ReserveSteps.setDate(int,int,int,int,int)"
});
formatter.result({
  "duration": 301400,
  "status": "passed"
});
formatter.match({
  "location": "ReserveSteps.clickReserveButton()"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име!",
      "offset": 18
    }
  ],
  "location": "ReserveSteps.вижда_съобщение(String)"
});
formatter.result({
  "duration": 981400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Успешно запазихте час]!\u003e but was:\u003c[Въведете име]!\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uni.dentist.reserve.ReserveSteps.вижда_съобщение(ReserveSteps.java:51)\r\n\tat ✽.Then Вижда съобщение :\"Въведете име!\".(uni/dentist/reserve/Reserve.feature:19)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "Запазване на час при зъболекар със не валидна дата",
  "description": "",
  "id": "запазване-на-час-при-зъболекар-на-регистриран-потребител;запазване-на-час-при-зъболекар-със-не-валидна-дата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Въведе име \"Александра\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Въведе email \"astojanova00@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Въведе тел.номер \"0877123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Избере дата и час 1950,12,12,10,30",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Вижда съобщение за невалидна дата :\"Въведете валидна дата!\".",
  "keyword": "Then "
});
formatter.match({
  "location": "ReserveSteps.openReserveScreen()"
});
formatter.result({
  "duration": 54900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Александра",
      "offset": 12
    }
  ],
  "location": "ReserveSteps.addName(String)"
});
formatter.result({
  "duration": 73600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "astojanova00@gmail.com",
      "offset": 14
    }
  ],
  "location": "ReserveSteps.addEmail(String)"
});
formatter.result({
  "duration": 111200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0877123456",
      "offset": 18
    }
  ],
  "location": "ReserveSteps.addPhone(String)"
});
formatter.result({
  "duration": 75300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1950",
      "offset": 18
    },
    {
      "val": "12",
      "offset": 23
    },
    {
      "val": "12",
      "offset": 26
    },
    {
      "val": "10",
      "offset": 29
    },
    {
      "val": "30",
      "offset": 32
    }
  ],
  "location": "ReserveSteps.setDate(int,int,int,int,int)"
});
formatter.result({
  "duration": 261300,
  "status": "passed"
});
formatter.match({
  "location": "ReserveSteps.clickReserveButton()"
});
formatter.result({
  "duration": 56200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете валидна дата!",
      "offset": 36
    }
  ],
  "location": "ReserveSteps.invalidDate()"
});
formatter.result({
  "duration": 631500,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027uni.dentist.reserve.ReserveSteps.invalidDate() in file:/C:/Users/user52/eclipse-workspace/dentist-system/target/test-classes/\u0027 with pattern [^Вижда съобщение за невалидна дата :\"([^\"]*)\"\\.$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Въведете валидна дата!]. \nStep: Then Вижда съобщение за невалидна дата :\"Въведете валидна дата!\".\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 31,
  "name": "Запазване на час при зъболекар без данни",
  "description": "",
  "id": "запазване-на-час-при-зъболекар-на-регистриран-потребител;запазване-на-час-при-зъболекар-без-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "Потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Въведе име \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Въведе email \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Въведе тел.номер \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Натисне бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Вижда съобщение за липсващи данни :\"Въведете всички данни!\".",
  "keyword": "Then "
});
formatter.match({
  "location": "ReserveSteps.openReserveScreen()"
});
formatter.result({
  "duration": 43700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "ReserveSteps.addName(String)"
});
formatter.result({
  "duration": 87700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    }
  ],
  "location": "ReserveSteps.addEmail(String)"
});
formatter.result({
  "duration": 43300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "ReserveSteps.addPhone(String)"
});
formatter.result({
  "duration": 54300,
  "status": "passed"
});
formatter.match({
  "location": "ReserveSteps.clickReserveButton()"
});
formatter.result({
  "duration": 18900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете всички данни!",
      "offset": 36
    }
  ],
  "location": "ReserveSteps.checkForMisgingData()"
});
formatter.result({
  "duration": 404200,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027uni.dentist.reserve.ReserveSteps.checkForMisgingData() in file:/C:/Users/user52/eclipse-workspace/dentist-system/target/test-classes/\u0027 with pattern [^Вижда съобщение за липсващи данни :\"([^\"]*)\"\\.$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Въведете всички данни!]. \nStep: Then Вижда съобщение за липсващи данни :\"Въведете всички данни!\".\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});