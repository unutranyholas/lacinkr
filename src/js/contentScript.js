import translitEngine from "translitit-engine";

var transliterationTable = {
  аe: "aje",
  ая: "aja",
  аё: "ajo",
  аю: "aju",
  еe: "ieje",
  ея: "ieja",
  её: "iejo",
  ею: "ieju",
  иe: "ije",
  ия: "ija",
  иё: "ijo",
  ию: "iju",
  ое: "oje",
  оя: "oja",
  оё: "ojo",
  ою: "oju",
  уе: "uje",
  уя: "uja",
  уё: "ujo",
  ую: "uju",
  эe: "eje",
  эя: "eja",
  эё: "ejo",
  эю: "eju",
  ьe: "́je",
  ья: "́ja",
  ьё: "́jo",
  ью: "́ju",
  жи: "́žy",
  ши: "́šy",
  же: "́žе",
  ше: "́še",
  жю: "́žu",
  шю: "́šu",
  жё: "́žo",
  шё: "́šo",
  " е": "́je",
  " я": "́ja",
  " ё": "́jo",
  " ю": "́ju",
  А: "A",
  а: "a",
  Б: "B",
  б: "b",
  В: "V",
  в: "v",
  Г: "G",
  г: "g",
  Д: "D",
  д: "d",
  Е: "Je",
  е: "ie",
  Ё: "Jo",
  ё: "io",
  Ж: "Ž",
  ж: "ž",
  З: "Z",
  з: "z",
  И: "I",
  и: "i",
  Й: "J",
  й: "j",
  К: "K",
  к: "k",
  Л: "L",
  л: "l",
  М: "M",
  м: "m",
  Н: "N",
  н: "n",
  О: "O",
  о: "o",
  П: "P",
  п: "p",
  Р: "R",
  р: "r",
  С: "S",
  с: "s",
  Т: "T",
  т: "t",
  У: "U",
  у: "u",
  Ф: "F",
  ф: "f",
  Х: "H",
  х: "h",
  Ц: "C",
  ц: "c",
  Ч: "Č",
  ч: "č",
  Ш: "Š",
  ш: "š",
  Щ: "Šč",
  щ: "šč",
  Ы: "Y",
  ы: "y",
  Э: "E",
  э: "e",
  Ю: "Ju",
  ю: "iu",
  Я: "Ja",
  я: "ia",
  Ь: "́",
  ь: "́",
  Ъ: "'",
  ъ: "'"
};
var transliterate = translitEngine(transliterationTable);

walk(document.body);

function walk(node) {

  var child, next;

  switch (node.nodeType) {
    case 1:
    case 9:
    case 11:
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3:
      handleText(node);
      break;
  }
}

function handleText(textNode) {
  var v = textNode.nodeValue;
  textNode.nodeValue = transliterate(v);
}
