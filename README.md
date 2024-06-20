# Typescript-task

# ساختار پروژه
یک پوشه برای هر کدام از کلاس ها و enum ها و اینترفیس ها ساخته شد

.
- [classes](./classes)
  - [Button.ts](./classes/Button.ts)
- [enums](./enums)
  - [ButtonKeyTypes.ts](./enums/ButtonKeyTypes.ts)
- [interfaces](./interfaces)
  - [IButton.ts](./interfaces/IButton.ts)
- [buttons.ts](./buttons.ts)
- [tsconfig](./tsconfig.json)


فایل buttons.ts فایل اصلی پروژه است  که شامل یک buttonsList است که لیست دکمه هایی است که ما داریم.
برای هر کدام از دکمه ها یک کلاس تعریف کردم برای راحتی و منظم بودن و همچنین چک شدن نوع کلید های اضافه شده به لیست، کلاس مربوطه در فایل classes/Button.ts موجود است
یک اینترفیس برای چک کردن نوع آبجکت ها اضافه کردم که در فایل IButton.ts قابل مشاهده است
enum مربوطه که در عنوان تسک آمده بود در ButtonKeyTypes قابل مشاهده است


در فایل buttons.ts بعد از گرفتن لیست دکمه ها میتونیم با استفاده از متد getSelectedButtons یک enum به متد پاس بدهیم و نتیجه دکمه های انتخابی با این لیست enum خواهد بود

نتایج 
```
// usage test
const selectedButtonTypes = [
  ButtonKeyTypes.Home,
  ButtonKeyTypes.About,
  ButtonKeyTypes.Products,
];
const selectedButtons = getSelectedButtons(selectedButtonTypes);
console.log(selectedButtons);
```

کنسول
```
console: 
[
  Button { id: 0, key: 0, label: 'Home', link: '/home' },
  Button { id: 1, key: 1, label: 'About', link: '/about' },
  Button { id: 3, key: 3, label: 'Products', link: '/products' }
]
```

