Feature: Valiadate Addintion Functionality

    To Validate Addintion Functionality of WebSite

    #Cucumber hooks to run Setup and TearDown
    # tags are used to group the test cases for execution like Patch, sanity , regression : ex :addTest, addParameterizedTest tags
   
    @addTest
    Scenario: Add functioanlity Testing#1
        Given Navigate to the website
        When  Add to Number "1" and "2"
        Then  The output should be "3"

    @addTest
    Scenario: Add functioanlity Testing#2
            Given Navigate to the website
            When  Add to Number "2" and "3"
            Then  The output should be "5"

    # Parameterize using scenario outlines
    @addParameterizedTest
    Scenario Outline: Add functioanlity Testing
            Given Navigate to the website
            When  Add to Number "<value1>" and "<value2>"
            Then  The output should be "<result>"

            Examples:
                | value1 | value2| result |
                | 3      |  2    |  5     |
                | 5      |  4    |  9     |