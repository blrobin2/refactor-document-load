# Enriching JSON Document Loads
Influenced by https://martinfowler.com/articles/refactoring-document-load.html

## Why?
Most of the time, if all you're doing is reading properties from a JSON object, you don't really need to map them to a class. It's not like Java, where the incoming structure HAS to be encoded in order to act on it.

So, I tried to add some domain logic, so that mapping the JSON to classes allowed for some organization of logic that would be cumbersome and need of a home anyways.