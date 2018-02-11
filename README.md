# Progression Parser

A parser for [Progression Workout Tracker](https://play.google.com/store/apps/details?id=workout.progression.lite&hl=en) exported files.

## Usage

```
yarn parse <filePath>
```

> Outputs to `out/<fileBaseName>`

### Example

To edit a file, follow this procedure:

```
yarn parse in/2018-02-11

vim out/2018-02-11/2018-02-11.parsed.json

yarn parse out/2018-02-11/2018-02-11.parsed.json

``

Now `out/2018-02-11/2018-02-11` should be reencoded with any changes to the parsed file
