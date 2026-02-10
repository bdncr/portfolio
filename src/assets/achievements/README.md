# Achievements Images

Энэ folder-т амжилтын зургуудаа байршуулна уу.

## Шаардлагатай зургууд:

1. **achievement1.jpg** - Голомт Банкны тэтгэлгийн зураг (гэрчилгээ, шагнал гардуулалтын зураг)
2. **achievement2.jpg** - АПУ ХК-ийн тэтгэлгийн зураг (уулзалт, гэрчилгээний зураг)
3. **achievement3.jpg** - mnNOG7 тэтгэлгийн зураг (арга хэмжээний зураг эсвэл гэрчилгээ)

## Зургийн хэмжээ:
- **Өндөр:** 400-600px
- **Өргөн:** 400-600px
- **Формат:** JPG эсвэл PNG
- **Чанар:** Өндөр чанартай зургууд ашиглах

## Зургуудаа нэмсний дараа:

App.js файлд дараах байдлаар import хийнэ:

```javascript
// Import achievement images
import achievement1 from './assets/achievements/achievement1.jpg';
import achievement2 from './assets/achievements/achievement2.jpg';
import achievement3 from './assets/achievements/achievement3.jpg';

// achievementsData дотор:
const achievementsData = [
  {
    image: achievement1,  // profileImage-г солино
    title: t.achievement1Title,
    // ...
  },
  {
    image: achievement2,
    title: t.achievement2Title,
    // ...
  },
  {
    image: achievement3,
    title: t.achievement3Title,
    // ...
  }
];
```

**Одоогоор:** Бүх амжилтад profile.jpg зураг ашиглагдаж байна. Зургуудаа нэмээд App.js-г засна уу!
