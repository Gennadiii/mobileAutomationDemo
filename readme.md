# Content

*  Approach
*  Reporters
*  How to run against simulators
*  Features
*  Architecture
*  Rules

## Approach
* iOS and Android platforms are supported.
* Automation tool: Appium; test runner: Jasmine
* Tests are not to be divided by platforms unless high level business logic is different.
* All tests should be human readable
* Each action taken by test should be logged. It eases debug process and logs could be used as bug description

## Reporters
Currently 2 reporters are used: console reporter and html reporter which creates "reporter" folder in project's root directory

## How to run against simulators

##### Preconditions:
iOS: XCode and iOS simulator should be installed. Tests will create simulator instance automatically

Android: emulator should be up and running

dotenv-safe module is used for test run configuration. Specific environment variables should be added to .env file which should be created and placed in project's root directory

1. Add .env file in root directory

Obligatory variables:

* platform=Android

* deviceName=Android Emulator

* app=path/to/app.apk

*For iOS use .app file (not .ipa)*

Optional params:

* implicitWait=10000

* appiumPort=4723

* androidAutomationName=UiAutomator2 (__*NOTE:*__ By default Appium driver is used for Android. It's 2 times slower but more stable than UiAutomator2 which can be used for local runs)

* specs=**/*spec.js

If specs option is not specified - you will be prompt to choose tests in console interactively

2. Run ```npm install``` (it will also compile typescript)

2. Start appium server ```npm start```

2. Run ```npm test```

## Features
1. Interactive console tests selector (testsSelector.helper.ts)
2. Lazy search (element finder helper which is used in page objects doesn't look for element right away but returns a function which is called in component.ts when action is to be done with an element)
3. Own implicit (component.ts element getter) and explicit (waiters.helper.ts) waiters
4. Dynamic lib import (lib.helper.ts) imports all lib classes (page elements, page objects, page actions and services) and puts them into single object which is to be imported when assembling services

## Architecture
 ![Architecture simple schema](https://pictr.com/images/2018/07/11/qH7Ev.jpg)

The architecture is based on all SOLID principles following DRY and KISS principles.
It has 4 levels of abstraction before tests:

*  Page elements
*  Page objects
*  Page actions
*  Services

Plus various helpers. The most important helper is elementFinder helper.
* ElementFinder is a class which is responsible for finding elements on a page. It has methods with automation tool specific api to locate elements. All page objects must use only this class and not look for elements directly. This way if automation tool has to be replaced with another one - only ElementFinder class will have to change and all page objects will stay the same. It also makes possible to create different instances of element finder class for different platforms with unique for platform auto id attributes. So the same page objects can be assembled for different platforms.

* Page elements describe components behavior. Like every element can be displayed, button can be clicked, etc. (reason to change - automation tool replacement)

* Page objects consist of page elements representing the page (reason to change - page changes)

* Page actions are representations of what can be done with the page like clickButton, scrollToElement (reason to change - page changes). This is the place for actions logging

* Services represent business logic and can include multiple page actions and/or other services (reason to change - change of business logic)

The base of interactions between all levels is Dependency inversion principle. This helps to avoid inheritance mess and makes solution flexible and easy to extend.

* Page objects compose page elements
* Page action get corresponding page object objects in constructor
* Service get corresponding page action and other services objects in constructor

In order to get it all together there's a platform folder which has to have supported platforms like ios, android.

All the page objects, actions and services that differ from generic should be placed in corresponding platform folder. It also has the assembler.ts file which is responsible for assembling services. Example:

```
service1(): Service1 {
    const pageObject = new PageObject();
    const pageAction = new PageAction(pageObject);
    return new Service1(pageAction);
  }
  ```

## Rules
1. Every not trivial public function or method should accept object as a parameter in order to be safe in case of api change
2. Every not trivial function or method should return object for the same reason
4. Every class and method input arguments should implement corresponding interface
5. Services shouldn't know about test data and test data should not be hardcoded into tests so use a separate data.ts for that purpose so tests get data from this separate file and service gets certain data that it should work with.
6. Every test should clear data that was created for it in runtime.
7. Add unique per page id with business value of an element for locators. Best is when dev team adds those id's when developing new features. All intractable components should have id's. Also elements that identify a page like page header. Existing id's should not change except cases when business value of an element changes.
 with single report inside