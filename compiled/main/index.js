"use strict";
const electron = require("electron");
const Store = require("electron-store");
const path = require("path");
const fs = require("fs");
const Database = require("better-sqlite3-multiple-ciphers");
const require$$2$1 = require("events");
const require$$2$2 = require("string_decoder");
const require$$3 = require("buffer");
const require$$1$3 = require("util");
const require$$0$2 = require("stream");
const icon = path.join(__dirname, "./chunks/icon-4363016c.png");
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        var args = [null];
        args.push.apply(args, arguments);
        var Ctor = Function.bind.apply(f, args);
        return new Ctor();
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var lib$2 = {};
var cheerioExports$1 = {};
var cheerio$1 = {
  get exports() {
    return cheerioExports$1;
  },
  set exports(v) {
    cheerioExports$1 = v;
  }
};
var cheerioExports = {};
var cheerio = {
  get exports() {
    return cheerioExports;
  },
  set exports(v) {
    cheerioExports = v;
  }
};
var parseExports = {};
var parse$6 = {
  get exports() {
    return parseExports;
  },
  set exports(v) {
    parseExports = v;
  }
};
var libExports = {};
var lib$1 = {
  get exports() {
    return libExports;
  },
  set exports(v) {
    libExports = v;
  }
};
const require$$0$1 = {
  "0": 65533,
  "128": 8364,
  "130": 8218,
  "131": 402,
  "132": 8222,
  "133": 8230,
  "134": 8224,
  "135": 8225,
  "136": 710,
  "137": 8240,
  "138": 352,
  "139": 8249,
  "140": 338,
  "142": 381,
  "145": 8216,
  "146": 8217,
  "147": 8220,
  "148": 8221,
  "149": 8226,
  "150": 8211,
  "151": 8212,
  "152": 732,
  "153": 8482,
  "154": 353,
  "155": 8250,
  "156": 339,
  "158": 382,
  "159": 376
};
var decodeMap = require$$0$1;
var decode_codepoint = decodeCodePoint$2;
function decodeCodePoint$2(codePoint) {
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return "�";
  }
  if (codePoint in decodeMap) {
    codePoint = decodeMap[codePoint];
  }
  var output = "";
  if (codePoint > 65535) {
    codePoint -= 65536;
    output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
    codePoint = 56320 | codePoint & 1023;
  }
  output += String.fromCharCode(codePoint);
  return output;
}
const Aacute$1 = "Á";
const aacute$1 = "á";
const Abreve = "Ă";
const abreve = "ă";
const ac = "∾";
const acd = "∿";
const acE = "∾̳";
const Acirc$1 = "Â";
const acirc$1 = "â";
const acute$1 = "´";
const Acy = "А";
const acy = "а";
const AElig$1 = "Æ";
const aelig$1 = "æ";
const af = "⁡";
const Afr = "𝔄";
const afr = "𝔞";
const Agrave$1 = "À";
const agrave$1 = "à";
const alefsym = "ℵ";
const aleph = "ℵ";
const Alpha = "Α";
const alpha = "α";
const Amacr = "Ā";
const amacr = "ā";
const amalg = "⨿";
const amp$2 = "&";
const AMP$1 = "&";
const andand = "⩕";
const And = "⩓";
const and = "∧";
const andd = "⩜";
const andslope = "⩘";
const andv = "⩚";
const ang = "∠";
const ange = "⦤";
const angle = "∠";
const angmsdaa = "⦨";
const angmsdab = "⦩";
const angmsdac = "⦪";
const angmsdad = "⦫";
const angmsdae = "⦬";
const angmsdaf = "⦭";
const angmsdag = "⦮";
const angmsdah = "⦯";
const angmsd = "∡";
const angrt = "∟";
const angrtvb = "⊾";
const angrtvbd = "⦝";
const angsph = "∢";
const angst = "Å";
const angzarr = "⍼";
const Aogon = "Ą";
const aogon = "ą";
const Aopf = "𝔸";
const aopf = "𝕒";
const apacir = "⩯";
const ap = "≈";
const apE = "⩰";
const ape = "≊";
const apid = "≋";
const apos$1 = "'";
const ApplyFunction = "⁡";
const approx = "≈";
const approxeq = "≊";
const Aring$1 = "Å";
const aring$1 = "å";
const Ascr = "𝒜";
const ascr = "𝒶";
const Assign = "≔";
const ast = "*";
const asymp = "≈";
const asympeq = "≍";
const Atilde$1 = "Ã";
const atilde$1 = "ã";
const Auml$1 = "Ä";
const auml$1 = "ä";
const awconint = "∳";
const awint = "⨑";
const backcong = "≌";
const backepsilon = "϶";
const backprime = "‵";
const backsim = "∽";
const backsimeq = "⋍";
const Backslash = "∖";
const Barv = "⫧";
const barvee = "⊽";
const barwed = "⌅";
const Barwed = "⌆";
const barwedge = "⌅";
const bbrk = "⎵";
const bbrktbrk = "⎶";
const bcong = "≌";
const Bcy = "Б";
const bcy = "б";
const bdquo = "„";
const becaus = "∵";
const because = "∵";
const Because = "∵";
const bemptyv = "⦰";
const bepsi = "϶";
const bernou = "ℬ";
const Bernoullis = "ℬ";
const Beta = "Β";
const beta = "β";
const beth = "ℶ";
const between = "≬";
const Bfr = "𝔅";
const bfr = "𝔟";
const bigcap = "⋂";
const bigcirc = "◯";
const bigcup = "⋃";
const bigodot = "⨀";
const bigoplus = "⨁";
const bigotimes = "⨂";
const bigsqcup = "⨆";
const bigstar = "★";
const bigtriangledown = "▽";
const bigtriangleup = "△";
const biguplus = "⨄";
const bigvee = "⋁";
const bigwedge = "⋀";
const bkarow = "⤍";
const blacklozenge = "⧫";
const blacksquare = "▪";
const blacktriangle = "▴";
const blacktriangledown = "▾";
const blacktriangleleft = "◂";
const blacktriangleright = "▸";
const blank = "␣";
const blk12 = "▒";
const blk14 = "░";
const blk34 = "▓";
const block = "█";
const bne = "=⃥";
const bnequiv = "≡⃥";
const bNot = "⫭";
const bnot = "⌐";
const Bopf = "𝔹";
const bopf = "𝕓";
const bot = "⊥";
const bottom = "⊥";
const bowtie = "⋈";
const boxbox = "⧉";
const boxdl = "┐";
const boxdL = "╕";
const boxDl = "╖";
const boxDL = "╗";
const boxdr = "┌";
const boxdR = "╒";
const boxDr = "╓";
const boxDR = "╔";
const boxh = "─";
const boxH = "═";
const boxhd = "┬";
const boxHd = "╤";
const boxhD = "╥";
const boxHD = "╦";
const boxhu = "┴";
const boxHu = "╧";
const boxhU = "╨";
const boxHU = "╩";
const boxminus = "⊟";
const boxplus = "⊞";
const boxtimes = "⊠";
const boxul = "┘";
const boxuL = "╛";
const boxUl = "╜";
const boxUL = "╝";
const boxur = "└";
const boxuR = "╘";
const boxUr = "╙";
const boxUR = "╚";
const boxv = "│";
const boxV = "║";
const boxvh = "┼";
const boxvH = "╪";
const boxVh = "╫";
const boxVH = "╬";
const boxvl = "┤";
const boxvL = "╡";
const boxVl = "╢";
const boxVL = "╣";
const boxvr = "├";
const boxvR = "╞";
const boxVr = "╟";
const boxVR = "╠";
const bprime = "‵";
const breve = "˘";
const Breve = "˘";
const brvbar$1 = "¦";
const bscr = "𝒷";
const Bscr = "ℬ";
const bsemi = "⁏";
const bsim = "∽";
const bsime = "⋍";
const bsolb = "⧅";
const bsol = "\\";
const bsolhsub = "⟈";
const bull = "•";
const bullet = "•";
const bump = "≎";
const bumpE = "⪮";
const bumpe = "≏";
const Bumpeq = "≎";
const bumpeq = "≏";
const Cacute = "Ć";
const cacute = "ć";
const capand = "⩄";
const capbrcup = "⩉";
const capcap = "⩋";
const cap = "∩";
const Cap = "⋒";
const capcup = "⩇";
const capdot = "⩀";
const CapitalDifferentialD = "ⅅ";
const caps = "∩︀";
const caret = "⁁";
const caron = "ˇ";
const Cayleys = "ℭ";
const ccaps = "⩍";
const Ccaron = "Č";
const ccaron = "č";
const Ccedil$1 = "Ç";
const ccedil$1 = "ç";
const Ccirc = "Ĉ";
const ccirc = "ĉ";
const Cconint = "∰";
const ccups = "⩌";
const ccupssm = "⩐";
const Cdot = "Ċ";
const cdot = "ċ";
const cedil$1 = "¸";
const Cedilla = "¸";
const cemptyv = "⦲";
const cent$1 = "¢";
const centerdot = "·";
const CenterDot = "·";
const cfr = "𝔠";
const Cfr = "ℭ";
const CHcy = "Ч";
const chcy = "ч";
const check = "✓";
const checkmark = "✓";
const Chi = "Χ";
const chi = "χ";
const circ = "ˆ";
const circeq = "≗";
const circlearrowleft = "↺";
const circlearrowright = "↻";
const circledast = "⊛";
const circledcirc = "⊚";
const circleddash = "⊝";
const CircleDot = "⊙";
const circledR = "®";
const circledS = "Ⓢ";
const CircleMinus = "⊖";
const CirclePlus = "⊕";
const CircleTimes = "⊗";
const cir = "○";
const cirE = "⧃";
const cire = "≗";
const cirfnint = "⨐";
const cirmid = "⫯";
const cirscir = "⧂";
const ClockwiseContourIntegral = "∲";
const CloseCurlyDoubleQuote = "”";
const CloseCurlyQuote = "’";
const clubs = "♣";
const clubsuit = "♣";
const colon = ":";
const Colon = "∷";
const Colone = "⩴";
const colone = "≔";
const coloneq = "≔";
const comma = ",";
const commat = "@";
const comp = "∁";
const compfn = "∘";
const complement = "∁";
const complexes = "ℂ";
const cong = "≅";
const congdot = "⩭";
const Congruent = "≡";
const conint = "∮";
const Conint = "∯";
const ContourIntegral = "∮";
const copf = "𝕔";
const Copf = "ℂ";
const coprod = "∐";
const Coproduct = "∐";
const copy$1 = "©";
const COPY$1 = "©";
const copysr = "℗";
const CounterClockwiseContourIntegral = "∳";
const crarr = "↵";
const cross = "✗";
const Cross = "⨯";
const Cscr = "𝒞";
const cscr = "𝒸";
const csub = "⫏";
const csube = "⫑";
const csup = "⫐";
const csupe = "⫒";
const ctdot = "⋯";
const cudarrl = "⤸";
const cudarrr = "⤵";
const cuepr = "⋞";
const cuesc = "⋟";
const cularr = "↶";
const cularrp = "⤽";
const cupbrcap = "⩈";
const cupcap = "⩆";
const CupCap = "≍";
const cup = "∪";
const Cup = "⋓";
const cupcup = "⩊";
const cupdot = "⊍";
const cupor = "⩅";
const cups = "∪︀";
const curarr = "↷";
const curarrm = "⤼";
const curlyeqprec = "⋞";
const curlyeqsucc = "⋟";
const curlyvee = "⋎";
const curlywedge = "⋏";
const curren$1 = "¤";
const curvearrowleft = "↶";
const curvearrowright = "↷";
const cuvee = "⋎";
const cuwed = "⋏";
const cwconint = "∲";
const cwint = "∱";
const cylcty = "⌭";
const dagger = "†";
const Dagger = "‡";
const daleth = "ℸ";
const darr = "↓";
const Darr = "↡";
const dArr = "⇓";
const dash = "‐";
const Dashv = "⫤";
const dashv = "⊣";
const dbkarow = "⤏";
const dblac = "˝";
const Dcaron = "Ď";
const dcaron = "ď";
const Dcy = "Д";
const dcy = "д";
const ddagger = "‡";
const ddarr = "⇊";
const DD = "ⅅ";
const dd = "ⅆ";
const DDotrahd = "⤑";
const ddotseq = "⩷";
const deg$1 = "°";
const Del = "∇";
const Delta = "Δ";
const delta = "δ";
const demptyv = "⦱";
const dfisht = "⥿";
const Dfr = "𝔇";
const dfr = "𝔡";
const dHar = "⥥";
const dharl = "⇃";
const dharr = "⇂";
const DiacriticalAcute = "´";
const DiacriticalDot = "˙";
const DiacriticalDoubleAcute = "˝";
const DiacriticalGrave = "`";
const DiacriticalTilde = "˜";
const diam = "⋄";
const diamond = "⋄";
const Diamond = "⋄";
const diamondsuit = "♦";
const diams = "♦";
const die = "¨";
const DifferentialD = "ⅆ";
const digamma = "ϝ";
const disin = "⋲";
const div = "÷";
const divide$1 = "÷";
const divideontimes = "⋇";
const divonx = "⋇";
const DJcy = "Ђ";
const djcy = "ђ";
const dlcorn = "⌞";
const dlcrop = "⌍";
const dollar = "$";
const Dopf = "𝔻";
const dopf = "𝕕";
const Dot = "¨";
const dot = "˙";
const DotDot = "⃜";
const doteq = "≐";
const doteqdot = "≑";
const DotEqual = "≐";
const dotminus = "∸";
const dotplus = "∔";
const dotsquare = "⊡";
const doublebarwedge = "⌆";
const DoubleContourIntegral = "∯";
const DoubleDot = "¨";
const DoubleDownArrow = "⇓";
const DoubleLeftArrow = "⇐";
const DoubleLeftRightArrow = "⇔";
const DoubleLeftTee = "⫤";
const DoubleLongLeftArrow = "⟸";
const DoubleLongLeftRightArrow = "⟺";
const DoubleLongRightArrow = "⟹";
const DoubleRightArrow = "⇒";
const DoubleRightTee = "⊨";
const DoubleUpArrow = "⇑";
const DoubleUpDownArrow = "⇕";
const DoubleVerticalBar = "∥";
const DownArrowBar = "⤓";
const downarrow = "↓";
const DownArrow = "↓";
const Downarrow = "⇓";
const DownArrowUpArrow = "⇵";
const DownBreve = "̑";
const downdownarrows = "⇊";
const downharpoonleft = "⇃";
const downharpoonright = "⇂";
const DownLeftRightVector = "⥐";
const DownLeftTeeVector = "⥞";
const DownLeftVectorBar = "⥖";
const DownLeftVector = "↽";
const DownRightTeeVector = "⥟";
const DownRightVectorBar = "⥗";
const DownRightVector = "⇁";
const DownTeeArrow = "↧";
const DownTee = "⊤";
const drbkarow = "⤐";
const drcorn = "⌟";
const drcrop = "⌌";
const Dscr = "𝒟";
const dscr = "𝒹";
const DScy = "Ѕ";
const dscy = "ѕ";
const dsol = "⧶";
const Dstrok = "Đ";
const dstrok = "đ";
const dtdot = "⋱";
const dtri = "▿";
const dtrif = "▾";
const duarr = "⇵";
const duhar = "⥯";
const dwangle = "⦦";
const DZcy = "Џ";
const dzcy = "џ";
const dzigrarr = "⟿";
const Eacute$1 = "É";
const eacute$1 = "é";
const easter = "⩮";
const Ecaron = "Ě";
const ecaron = "ě";
const Ecirc$1 = "Ê";
const ecirc$1 = "ê";
const ecir = "≖";
const ecolon = "≕";
const Ecy = "Э";
const ecy = "э";
const eDDot = "⩷";
const Edot = "Ė";
const edot = "ė";
const eDot = "≑";
const ee = "ⅇ";
const efDot = "≒";
const Efr = "𝔈";
const efr = "𝔢";
const eg = "⪚";
const Egrave$1 = "È";
const egrave$1 = "è";
const egs = "⪖";
const egsdot = "⪘";
const el = "⪙";
const Element = "∈";
const elinters = "⏧";
const ell = "ℓ";
const els = "⪕";
const elsdot = "⪗";
const Emacr = "Ē";
const emacr = "ē";
const empty = "∅";
const emptyset = "∅";
const EmptySmallSquare = "◻";
const emptyv = "∅";
const EmptyVerySmallSquare = "▫";
const emsp13 = " ";
const emsp14 = " ";
const emsp = " ";
const ENG = "Ŋ";
const eng = "ŋ";
const ensp = " ";
const Eogon = "Ę";
const eogon = "ę";
const Eopf = "𝔼";
const eopf = "𝕖";
const epar = "⋕";
const eparsl = "⧣";
const eplus = "⩱";
const epsi = "ε";
const Epsilon = "Ε";
const epsilon = "ε";
const epsiv = "ϵ";
const eqcirc = "≖";
const eqcolon = "≕";
const eqsim = "≂";
const eqslantgtr = "⪖";
const eqslantless = "⪕";
const Equal = "⩵";
const equals = "=";
const EqualTilde = "≂";
const equest = "≟";
const Equilibrium = "⇌";
const equiv = "≡";
const equivDD = "⩸";
const eqvparsl = "⧥";
const erarr = "⥱";
const erDot = "≓";
const escr = "ℯ";
const Escr = "ℰ";
const esdot = "≐";
const Esim = "⩳";
const esim = "≂";
const Eta = "Η";
const eta = "η";
const ETH$1 = "Ð";
const eth$1 = "ð";
const Euml$1 = "Ë";
const euml$1 = "ë";
const euro = "€";
const excl = "!";
const exist = "∃";
const Exists = "∃";
const expectation = "ℰ";
const exponentiale = "ⅇ";
const ExponentialE = "ⅇ";
const fallingdotseq = "≒";
const Fcy = "Ф";
const fcy = "ф";
const female = "♀";
const ffilig = "ﬃ";
const fflig = "ﬀ";
const ffllig = "ﬄ";
const Ffr = "𝔉";
const ffr = "𝔣";
const filig = "ﬁ";
const FilledSmallSquare = "◼";
const FilledVerySmallSquare = "▪";
const fjlig = "fj";
const flat = "♭";
const fllig = "ﬂ";
const fltns = "▱";
const fnof = "ƒ";
const Fopf = "𝔽";
const fopf = "𝕗";
const forall = "∀";
const ForAll = "∀";
const fork = "⋔";
const forkv = "⫙";
const Fouriertrf = "ℱ";
const fpartint = "⨍";
const frac12$1 = "½";
const frac13 = "⅓";
const frac14$1 = "¼";
const frac15 = "⅕";
const frac16 = "⅙";
const frac18 = "⅛";
const frac23 = "⅔";
const frac25 = "⅖";
const frac34$1 = "¾";
const frac35 = "⅗";
const frac38 = "⅜";
const frac45 = "⅘";
const frac56 = "⅚";
const frac58 = "⅝";
const frac78 = "⅞";
const frasl = "⁄";
const frown = "⌢";
const fscr = "𝒻";
const Fscr = "ℱ";
const gacute = "ǵ";
const Gamma = "Γ";
const gamma = "γ";
const Gammad = "Ϝ";
const gammad = "ϝ";
const gap = "⪆";
const Gbreve = "Ğ";
const gbreve = "ğ";
const Gcedil = "Ģ";
const Gcirc = "Ĝ";
const gcirc = "ĝ";
const Gcy = "Г";
const gcy = "г";
const Gdot = "Ġ";
const gdot = "ġ";
const ge = "≥";
const gE = "≧";
const gEl = "⪌";
const gel = "⋛";
const geq = "≥";
const geqq = "≧";
const geqslant = "⩾";
const gescc = "⪩";
const ges = "⩾";
const gesdot = "⪀";
const gesdoto = "⪂";
const gesdotol = "⪄";
const gesl = "⋛︀";
const gesles = "⪔";
const Gfr = "𝔊";
const gfr = "𝔤";
const gg = "≫";
const Gg = "⋙";
const ggg = "⋙";
const gimel = "ℷ";
const GJcy = "Ѓ";
const gjcy = "ѓ";
const gla = "⪥";
const gl = "≷";
const glE = "⪒";
const glj = "⪤";
const gnap = "⪊";
const gnapprox = "⪊";
const gne = "⪈";
const gnE = "≩";
const gneq = "⪈";
const gneqq = "≩";
const gnsim = "⋧";
const Gopf = "𝔾";
const gopf = "𝕘";
const grave = "`";
const GreaterEqual = "≥";
const GreaterEqualLess = "⋛";
const GreaterFullEqual = "≧";
const GreaterGreater = "⪢";
const GreaterLess = "≷";
const GreaterSlantEqual = "⩾";
const GreaterTilde = "≳";
const Gscr = "𝒢";
const gscr = "ℊ";
const gsim = "≳";
const gsime = "⪎";
const gsiml = "⪐";
const gtcc = "⪧";
const gtcir = "⩺";
const gt$2 = ">";
const GT$1 = ">";
const Gt = "≫";
const gtdot = "⋗";
const gtlPar = "⦕";
const gtquest = "⩼";
const gtrapprox = "⪆";
const gtrarr = "⥸";
const gtrdot = "⋗";
const gtreqless = "⋛";
const gtreqqless = "⪌";
const gtrless = "≷";
const gtrsim = "≳";
const gvertneqq = "≩︀";
const gvnE = "≩︀";
const Hacek = "ˇ";
const hairsp = " ";
const half = "½";
const hamilt = "ℋ";
const HARDcy = "Ъ";
const hardcy = "ъ";
const harrcir = "⥈";
const harr = "↔";
const hArr = "⇔";
const harrw = "↭";
const Hat = "^";
const hbar = "ℏ";
const Hcirc = "Ĥ";
const hcirc = "ĥ";
const hearts = "♥";
const heartsuit = "♥";
const hellip = "…";
const hercon = "⊹";
const hfr = "𝔥";
const Hfr = "ℌ";
const HilbertSpace = "ℋ";
const hksearow = "⤥";
const hkswarow = "⤦";
const hoarr = "⇿";
const homtht = "∻";
const hookleftarrow = "↩";
const hookrightarrow = "↪";
const hopf = "𝕙";
const Hopf = "ℍ";
const horbar = "―";
const HorizontalLine = "─";
const hscr = "𝒽";
const Hscr = "ℋ";
const hslash = "ℏ";
const Hstrok = "Ħ";
const hstrok = "ħ";
const HumpDownHump = "≎";
const HumpEqual = "≏";
const hybull = "⁃";
const hyphen = "‐";
const Iacute$1 = "Í";
const iacute$1 = "í";
const ic = "⁣";
const Icirc$1 = "Î";
const icirc$1 = "î";
const Icy = "И";
const icy = "и";
const Idot = "İ";
const IEcy = "Е";
const iecy = "е";
const iexcl$1 = "¡";
const iff = "⇔";
const ifr = "𝔦";
const Ifr = "ℑ";
const Igrave$1 = "Ì";
const igrave$1 = "ì";
const ii = "ⅈ";
const iiiint = "⨌";
const iiint = "∭";
const iinfin = "⧜";
const iiota = "℩";
const IJlig = "Ĳ";
const ijlig = "ĳ";
const Imacr = "Ī";
const imacr = "ī";
const image = "ℑ";
const ImaginaryI = "ⅈ";
const imagline = "ℐ";
const imagpart = "ℑ";
const imath = "ı";
const Im = "ℑ";
const imof = "⊷";
const imped = "Ƶ";
const Implies = "⇒";
const incare = "℅";
const infin = "∞";
const infintie = "⧝";
const inodot = "ı";
const intcal = "⊺";
const int = "∫";
const Int = "∬";
const integers = "ℤ";
const Integral = "∫";
const intercal = "⊺";
const Intersection = "⋂";
const intlarhk = "⨗";
const intprod = "⨼";
const InvisibleComma = "⁣";
const InvisibleTimes = "⁢";
const IOcy = "Ё";
const iocy = "ё";
const Iogon = "Į";
const iogon = "į";
const Iopf = "𝕀";
const iopf = "𝕚";
const Iota = "Ι";
const iota = "ι";
const iprod = "⨼";
const iquest$1 = "¿";
const iscr = "𝒾";
const Iscr = "ℐ";
const isin = "∈";
const isindot = "⋵";
const isinE = "⋹";
const isins = "⋴";
const isinsv = "⋳";
const isinv = "∈";
const it = "⁢";
const Itilde = "Ĩ";
const itilde = "ĩ";
const Iukcy = "І";
const iukcy = "і";
const Iuml$1 = "Ï";
const iuml$1 = "ï";
const Jcirc = "Ĵ";
const jcirc = "ĵ";
const Jcy = "Й";
const jcy = "й";
const Jfr = "𝔍";
const jfr = "𝔧";
const jmath = "ȷ";
const Jopf = "𝕁";
const jopf = "𝕛";
const Jscr = "𝒥";
const jscr = "𝒿";
const Jsercy = "Ј";
const jsercy = "ј";
const Jukcy = "Є";
const jukcy = "є";
const Kappa = "Κ";
const kappa = "κ";
const kappav = "ϰ";
const Kcedil = "Ķ";
const kcedil = "ķ";
const Kcy = "К";
const kcy = "к";
const Kfr = "𝔎";
const kfr = "𝔨";
const kgreen = "ĸ";
const KHcy = "Х";
const khcy = "х";
const KJcy = "Ќ";
const kjcy = "ќ";
const Kopf = "𝕂";
const kopf = "𝕜";
const Kscr = "𝒦";
const kscr = "𝓀";
const lAarr = "⇚";
const Lacute = "Ĺ";
const lacute = "ĺ";
const laemptyv = "⦴";
const lagran = "ℒ";
const Lambda = "Λ";
const lambda = "λ";
const lang = "⟨";
const Lang = "⟪";
const langd = "⦑";
const langle = "⟨";
const lap = "⪅";
const Laplacetrf = "ℒ";
const laquo$1 = "«";
const larrb = "⇤";
const larrbfs = "⤟";
const larr = "←";
const Larr = "↞";
const lArr = "⇐";
const larrfs = "⤝";
const larrhk = "↩";
const larrlp = "↫";
const larrpl = "⤹";
const larrsim = "⥳";
const larrtl = "↢";
const latail = "⤙";
const lAtail = "⤛";
const lat = "⪫";
const late = "⪭";
const lates = "⪭︀";
const lbarr = "⤌";
const lBarr = "⤎";
const lbbrk = "❲";
const lbrace = "{";
const lbrack = "[";
const lbrke = "⦋";
const lbrksld = "⦏";
const lbrkslu = "⦍";
const Lcaron = "Ľ";
const lcaron = "ľ";
const Lcedil = "Ļ";
const lcedil = "ļ";
const lceil = "⌈";
const lcub = "{";
const Lcy = "Л";
const lcy = "л";
const ldca = "⤶";
const ldquo = "“";
const ldquor = "„";
const ldrdhar = "⥧";
const ldrushar = "⥋";
const ldsh = "↲";
const le = "≤";
const lE = "≦";
const LeftAngleBracket = "⟨";
const LeftArrowBar = "⇤";
const leftarrow = "←";
const LeftArrow = "←";
const Leftarrow = "⇐";
const LeftArrowRightArrow = "⇆";
const leftarrowtail = "↢";
const LeftCeiling = "⌈";
const LeftDoubleBracket = "⟦";
const LeftDownTeeVector = "⥡";
const LeftDownVectorBar = "⥙";
const LeftDownVector = "⇃";
const LeftFloor = "⌊";
const leftharpoondown = "↽";
const leftharpoonup = "↼";
const leftleftarrows = "⇇";
const leftrightarrow = "↔";
const LeftRightArrow = "↔";
const Leftrightarrow = "⇔";
const leftrightarrows = "⇆";
const leftrightharpoons = "⇋";
const leftrightsquigarrow = "↭";
const LeftRightVector = "⥎";
const LeftTeeArrow = "↤";
const LeftTee = "⊣";
const LeftTeeVector = "⥚";
const leftthreetimes = "⋋";
const LeftTriangleBar = "⧏";
const LeftTriangle = "⊲";
const LeftTriangleEqual = "⊴";
const LeftUpDownVector = "⥑";
const LeftUpTeeVector = "⥠";
const LeftUpVectorBar = "⥘";
const LeftUpVector = "↿";
const LeftVectorBar = "⥒";
const LeftVector = "↼";
const lEg = "⪋";
const leg = "⋚";
const leq = "≤";
const leqq = "≦";
const leqslant = "⩽";
const lescc = "⪨";
const les = "⩽";
const lesdot = "⩿";
const lesdoto = "⪁";
const lesdotor = "⪃";
const lesg = "⋚︀";
const lesges = "⪓";
const lessapprox = "⪅";
const lessdot = "⋖";
const lesseqgtr = "⋚";
const lesseqqgtr = "⪋";
const LessEqualGreater = "⋚";
const LessFullEqual = "≦";
const LessGreater = "≶";
const lessgtr = "≶";
const LessLess = "⪡";
const lesssim = "≲";
const LessSlantEqual = "⩽";
const LessTilde = "≲";
const lfisht = "⥼";
const lfloor = "⌊";
const Lfr = "𝔏";
const lfr = "𝔩";
const lg = "≶";
const lgE = "⪑";
const lHar = "⥢";
const lhard = "↽";
const lharu = "↼";
const lharul = "⥪";
const lhblk = "▄";
const LJcy = "Љ";
const ljcy = "љ";
const llarr = "⇇";
const ll = "≪";
const Ll = "⋘";
const llcorner = "⌞";
const Lleftarrow = "⇚";
const llhard = "⥫";
const lltri = "◺";
const Lmidot = "Ŀ";
const lmidot = "ŀ";
const lmoustache = "⎰";
const lmoust = "⎰";
const lnap = "⪉";
const lnapprox = "⪉";
const lne = "⪇";
const lnE = "≨";
const lneq = "⪇";
const lneqq = "≨";
const lnsim = "⋦";
const loang = "⟬";
const loarr = "⇽";
const lobrk = "⟦";
const longleftarrow = "⟵";
const LongLeftArrow = "⟵";
const Longleftarrow = "⟸";
const longleftrightarrow = "⟷";
const LongLeftRightArrow = "⟷";
const Longleftrightarrow = "⟺";
const longmapsto = "⟼";
const longrightarrow = "⟶";
const LongRightArrow = "⟶";
const Longrightarrow = "⟹";
const looparrowleft = "↫";
const looparrowright = "↬";
const lopar = "⦅";
const Lopf = "𝕃";
const lopf = "𝕝";
const loplus = "⨭";
const lotimes = "⨴";
const lowast = "∗";
const lowbar = "_";
const LowerLeftArrow = "↙";
const LowerRightArrow = "↘";
const loz = "◊";
const lozenge = "◊";
const lozf = "⧫";
const lpar = "(";
const lparlt = "⦓";
const lrarr = "⇆";
const lrcorner = "⌟";
const lrhar = "⇋";
const lrhard = "⥭";
const lrm = "‎";
const lrtri = "⊿";
const lsaquo = "‹";
const lscr = "𝓁";
const Lscr = "ℒ";
const lsh = "↰";
const Lsh = "↰";
const lsim = "≲";
const lsime = "⪍";
const lsimg = "⪏";
const lsqb = "[";
const lsquo = "‘";
const lsquor = "‚";
const Lstrok = "Ł";
const lstrok = "ł";
const ltcc = "⪦";
const ltcir = "⩹";
const lt$2 = "<";
const LT$1 = "<";
const Lt = "≪";
const ltdot = "⋖";
const lthree = "⋋";
const ltimes = "⋉";
const ltlarr = "⥶";
const ltquest = "⩻";
const ltri = "◃";
const ltrie = "⊴";
const ltrif = "◂";
const ltrPar = "⦖";
const lurdshar = "⥊";
const luruhar = "⥦";
const lvertneqq = "≨︀";
const lvnE = "≨︀";
const macr$1 = "¯";
const male = "♂";
const malt = "✠";
const maltese = "✠";
const map$1 = "↦";
const mapsto = "↦";
const mapstodown = "↧";
const mapstoleft = "↤";
const mapstoup = "↥";
const marker = "▮";
const mcomma = "⨩";
const Mcy = "М";
const mcy = "м";
const mdash = "—";
const mDDot = "∺";
const measuredangle = "∡";
const MediumSpace = " ";
const Mellintrf = "ℳ";
const Mfr = "𝔐";
const mfr = "𝔪";
const mho = "℧";
const micro$1 = "µ";
const midast = "*";
const midcir = "⫰";
const mid = "∣";
const middot$1 = "·";
const minusb = "⊟";
const minus = "−";
const minusd = "∸";
const minusdu = "⨪";
const MinusPlus = "∓";
const mlcp = "⫛";
const mldr = "…";
const mnplus = "∓";
const models = "⊧";
const Mopf = "𝕄";
const mopf = "𝕞";
const mp = "∓";
const mscr = "𝓂";
const Mscr = "ℳ";
const mstpos = "∾";
const Mu = "Μ";
const mu = "μ";
const multimap = "⊸";
const mumap = "⊸";
const nabla = "∇";
const Nacute = "Ń";
const nacute = "ń";
const nang = "∠⃒";
const nap = "≉";
const napE = "⩰̸";
const napid = "≋̸";
const napos = "ŉ";
const napprox = "≉";
const natural = "♮";
const naturals = "ℕ";
const natur = "♮";
const nbsp$1 = " ";
const nbump = "≎̸";
const nbumpe = "≏̸";
const ncap = "⩃";
const Ncaron = "Ň";
const ncaron = "ň";
const Ncedil = "Ņ";
const ncedil = "ņ";
const ncong = "≇";
const ncongdot = "⩭̸";
const ncup = "⩂";
const Ncy = "Н";
const ncy = "н";
const ndash = "–";
const nearhk = "⤤";
const nearr = "↗";
const neArr = "⇗";
const nearrow = "↗";
const ne = "≠";
const nedot = "≐̸";
const NegativeMediumSpace = "​";
const NegativeThickSpace = "​";
const NegativeThinSpace = "​";
const NegativeVeryThinSpace = "​";
const nequiv = "≢";
const nesear = "⤨";
const nesim = "≂̸";
const NestedGreaterGreater = "≫";
const NestedLessLess = "≪";
const NewLine = "\n";
const nexist = "∄";
const nexists = "∄";
const Nfr = "𝔑";
const nfr = "𝔫";
const ngE = "≧̸";
const nge = "≱";
const ngeq = "≱";
const ngeqq = "≧̸";
const ngeqslant = "⩾̸";
const nges = "⩾̸";
const nGg = "⋙̸";
const ngsim = "≵";
const nGt = "≫⃒";
const ngt = "≯";
const ngtr = "≯";
const nGtv = "≫̸";
const nharr = "↮";
const nhArr = "⇎";
const nhpar = "⫲";
const ni = "∋";
const nis = "⋼";
const nisd = "⋺";
const niv = "∋";
const NJcy = "Њ";
const njcy = "њ";
const nlarr = "↚";
const nlArr = "⇍";
const nldr = "‥";
const nlE = "≦̸";
const nle = "≰";
const nleftarrow = "↚";
const nLeftarrow = "⇍";
const nleftrightarrow = "↮";
const nLeftrightarrow = "⇎";
const nleq = "≰";
const nleqq = "≦̸";
const nleqslant = "⩽̸";
const nles = "⩽̸";
const nless = "≮";
const nLl = "⋘̸";
const nlsim = "≴";
const nLt = "≪⃒";
const nlt = "≮";
const nltri = "⋪";
const nltrie = "⋬";
const nLtv = "≪̸";
const nmid = "∤";
const NoBreak = "⁠";
const NonBreakingSpace = " ";
const nopf = "𝕟";
const Nopf = "ℕ";
const Not = "⫬";
const not$1 = "¬";
const NotCongruent = "≢";
const NotCupCap = "≭";
const NotDoubleVerticalBar = "∦";
const NotElement = "∉";
const NotEqual = "≠";
const NotEqualTilde = "≂̸";
const NotExists = "∄";
const NotGreater = "≯";
const NotGreaterEqual = "≱";
const NotGreaterFullEqual = "≧̸";
const NotGreaterGreater = "≫̸";
const NotGreaterLess = "≹";
const NotGreaterSlantEqual = "⩾̸";
const NotGreaterTilde = "≵";
const NotHumpDownHump = "≎̸";
const NotHumpEqual = "≏̸";
const notin = "∉";
const notindot = "⋵̸";
const notinE = "⋹̸";
const notinva = "∉";
const notinvb = "⋷";
const notinvc = "⋶";
const NotLeftTriangleBar = "⧏̸";
const NotLeftTriangle = "⋪";
const NotLeftTriangleEqual = "⋬";
const NotLess = "≮";
const NotLessEqual = "≰";
const NotLessGreater = "≸";
const NotLessLess = "≪̸";
const NotLessSlantEqual = "⩽̸";
const NotLessTilde = "≴";
const NotNestedGreaterGreater = "⪢̸";
const NotNestedLessLess = "⪡̸";
const notni = "∌";
const notniva = "∌";
const notnivb = "⋾";
const notnivc = "⋽";
const NotPrecedes = "⊀";
const NotPrecedesEqual = "⪯̸";
const NotPrecedesSlantEqual = "⋠";
const NotReverseElement = "∌";
const NotRightTriangleBar = "⧐̸";
const NotRightTriangle = "⋫";
const NotRightTriangleEqual = "⋭";
const NotSquareSubset = "⊏̸";
const NotSquareSubsetEqual = "⋢";
const NotSquareSuperset = "⊐̸";
const NotSquareSupersetEqual = "⋣";
const NotSubset = "⊂⃒";
const NotSubsetEqual = "⊈";
const NotSucceeds = "⊁";
const NotSucceedsEqual = "⪰̸";
const NotSucceedsSlantEqual = "⋡";
const NotSucceedsTilde = "≿̸";
const NotSuperset = "⊃⃒";
const NotSupersetEqual = "⊉";
const NotTilde = "≁";
const NotTildeEqual = "≄";
const NotTildeFullEqual = "≇";
const NotTildeTilde = "≉";
const NotVerticalBar = "∤";
const nparallel = "∦";
const npar = "∦";
const nparsl = "⫽⃥";
const npart = "∂̸";
const npolint = "⨔";
const npr = "⊀";
const nprcue = "⋠";
const nprec = "⊀";
const npreceq = "⪯̸";
const npre = "⪯̸";
const nrarrc = "⤳̸";
const nrarr = "↛";
const nrArr = "⇏";
const nrarrw = "↝̸";
const nrightarrow = "↛";
const nRightarrow = "⇏";
const nrtri = "⋫";
const nrtrie = "⋭";
const nsc = "⊁";
const nsccue = "⋡";
const nsce = "⪰̸";
const Nscr = "𝒩";
const nscr = "𝓃";
const nshortmid = "∤";
const nshortparallel = "∦";
const nsim = "≁";
const nsime = "≄";
const nsimeq = "≄";
const nsmid = "∤";
const nspar = "∦";
const nsqsube = "⋢";
const nsqsupe = "⋣";
const nsub = "⊄";
const nsubE = "⫅̸";
const nsube = "⊈";
const nsubset = "⊂⃒";
const nsubseteq = "⊈";
const nsubseteqq = "⫅̸";
const nsucc = "⊁";
const nsucceq = "⪰̸";
const nsup = "⊅";
const nsupE = "⫆̸";
const nsupe = "⊉";
const nsupset = "⊃⃒";
const nsupseteq = "⊉";
const nsupseteqq = "⫆̸";
const ntgl = "≹";
const Ntilde$1 = "Ñ";
const ntilde$1 = "ñ";
const ntlg = "≸";
const ntriangleleft = "⋪";
const ntrianglelefteq = "⋬";
const ntriangleright = "⋫";
const ntrianglerighteq = "⋭";
const Nu = "Ν";
const nu = "ν";
const num = "#";
const numero = "№";
const numsp = " ";
const nvap = "≍⃒";
const nvdash = "⊬";
const nvDash = "⊭";
const nVdash = "⊮";
const nVDash = "⊯";
const nvge = "≥⃒";
const nvgt = ">⃒";
const nvHarr = "⤄";
const nvinfin = "⧞";
const nvlArr = "⤂";
const nvle = "≤⃒";
const nvlt = "<⃒";
const nvltrie = "⊴⃒";
const nvrArr = "⤃";
const nvrtrie = "⊵⃒";
const nvsim = "∼⃒";
const nwarhk = "⤣";
const nwarr = "↖";
const nwArr = "⇖";
const nwarrow = "↖";
const nwnear = "⤧";
const Oacute$1 = "Ó";
const oacute$1 = "ó";
const oast = "⊛";
const Ocirc$1 = "Ô";
const ocirc$1 = "ô";
const ocir = "⊚";
const Ocy = "О";
const ocy = "о";
const odash = "⊝";
const Odblac = "Ő";
const odblac = "ő";
const odiv = "⨸";
const odot = "⊙";
const odsold = "⦼";
const OElig = "Œ";
const oelig = "œ";
const ofcir = "⦿";
const Ofr = "𝔒";
const ofr = "𝔬";
const ogon = "˛";
const Ograve$1 = "Ò";
const ograve$1 = "ò";
const ogt = "⧁";
const ohbar = "⦵";
const ohm = "Ω";
const oint = "∮";
const olarr = "↺";
const olcir = "⦾";
const olcross = "⦻";
const oline = "‾";
const olt = "⧀";
const Omacr = "Ō";
const omacr = "ō";
const Omega = "Ω";
const omega = "ω";
const Omicron = "Ο";
const omicron = "ο";
const omid = "⦶";
const ominus = "⊖";
const Oopf = "𝕆";
const oopf = "𝕠";
const opar = "⦷";
const OpenCurlyDoubleQuote = "“";
const OpenCurlyQuote = "‘";
const operp = "⦹";
const oplus = "⊕";
const orarr = "↻";
const Or = "⩔";
const or = "∨";
const ord = "⩝";
const order = "ℴ";
const orderof = "ℴ";
const ordf$1 = "ª";
const ordm$1 = "º";
const origof = "⊶";
const oror = "⩖";
const orslope = "⩗";
const orv = "⩛";
const oS = "Ⓢ";
const Oscr = "𝒪";
const oscr = "ℴ";
const Oslash$1 = "Ø";
const oslash$1 = "ø";
const osol = "⊘";
const Otilde$1 = "Õ";
const otilde$1 = "õ";
const otimesas = "⨶";
const Otimes = "⨷";
const otimes = "⊗";
const Ouml$1 = "Ö";
const ouml$1 = "ö";
const ovbar = "⌽";
const OverBar = "‾";
const OverBrace = "⏞";
const OverBracket = "⎴";
const OverParenthesis = "⏜";
const para$1 = "¶";
const parallel = "∥";
const par = "∥";
const parsim = "⫳";
const parsl = "⫽";
const part = "∂";
const PartialD = "∂";
const Pcy = "П";
const pcy = "п";
const percnt = "%";
const period = ".";
const permil = "‰";
const perp = "⊥";
const pertenk = "‱";
const Pfr = "𝔓";
const pfr = "𝔭";
const Phi = "Φ";
const phi = "φ";
const phiv = "ϕ";
const phmmat = "ℳ";
const phone = "☎";
const Pi = "Π";
const pi = "π";
const pitchfork = "⋔";
const piv = "ϖ";
const planck = "ℏ";
const planckh = "ℎ";
const plankv = "ℏ";
const plusacir = "⨣";
const plusb = "⊞";
const pluscir = "⨢";
const plus = "+";
const plusdo = "∔";
const plusdu = "⨥";
const pluse = "⩲";
const PlusMinus = "±";
const plusmn$1 = "±";
const plussim = "⨦";
const plustwo = "⨧";
const pm = "±";
const Poincareplane = "ℌ";
const pointint = "⨕";
const popf = "𝕡";
const Popf = "ℙ";
const pound$1 = "£";
const prap = "⪷";
const Pr = "⪻";
const pr = "≺";
const prcue = "≼";
const precapprox = "⪷";
const prec = "≺";
const preccurlyeq = "≼";
const Precedes = "≺";
const PrecedesEqual = "⪯";
const PrecedesSlantEqual = "≼";
const PrecedesTilde = "≾";
const preceq = "⪯";
const precnapprox = "⪹";
const precneqq = "⪵";
const precnsim = "⋨";
const pre = "⪯";
const prE = "⪳";
const precsim = "≾";
const prime = "′";
const Prime = "″";
const primes = "ℙ";
const prnap = "⪹";
const prnE = "⪵";
const prnsim = "⋨";
const prod = "∏";
const Product = "∏";
const profalar = "⌮";
const profline = "⌒";
const profsurf = "⌓";
const prop = "∝";
const Proportional = "∝";
const Proportion = "∷";
const propto = "∝";
const prsim = "≾";
const prurel = "⊰";
const Pscr = "𝒫";
const pscr = "𝓅";
const Psi = "Ψ";
const psi = "ψ";
const puncsp = " ";
const Qfr = "𝔔";
const qfr = "𝔮";
const qint = "⨌";
const qopf = "𝕢";
const Qopf = "ℚ";
const qprime = "⁗";
const Qscr = "𝒬";
const qscr = "𝓆";
const quaternions = "ℍ";
const quatint = "⨖";
const quest = "?";
const questeq = "≟";
const quot$2 = '"';
const QUOT$1 = '"';
const rAarr = "⇛";
const race = "∽̱";
const Racute = "Ŕ";
const racute = "ŕ";
const radic = "√";
const raemptyv = "⦳";
const rang = "⟩";
const Rang = "⟫";
const rangd = "⦒";
const range = "⦥";
const rangle = "⟩";
const raquo$1 = "»";
const rarrap = "⥵";
const rarrb = "⇥";
const rarrbfs = "⤠";
const rarrc = "⤳";
const rarr = "→";
const Rarr = "↠";
const rArr = "⇒";
const rarrfs = "⤞";
const rarrhk = "↪";
const rarrlp = "↬";
const rarrpl = "⥅";
const rarrsim = "⥴";
const Rarrtl = "⤖";
const rarrtl = "↣";
const rarrw = "↝";
const ratail = "⤚";
const rAtail = "⤜";
const ratio = "∶";
const rationals = "ℚ";
const rbarr = "⤍";
const rBarr = "⤏";
const RBarr = "⤐";
const rbbrk = "❳";
const rbrace = "}";
const rbrack = "]";
const rbrke = "⦌";
const rbrksld = "⦎";
const rbrkslu = "⦐";
const Rcaron = "Ř";
const rcaron = "ř";
const Rcedil = "Ŗ";
const rcedil = "ŗ";
const rceil = "⌉";
const rcub = "}";
const Rcy = "Р";
const rcy = "р";
const rdca = "⤷";
const rdldhar = "⥩";
const rdquo = "”";
const rdquor = "”";
const rdsh = "↳";
const real = "ℜ";
const realine = "ℛ";
const realpart = "ℜ";
const reals = "ℝ";
const Re = "ℜ";
const rect = "▭";
const reg$1 = "®";
const REG$1 = "®";
const ReverseElement = "∋";
const ReverseEquilibrium = "⇋";
const ReverseUpEquilibrium = "⥯";
const rfisht = "⥽";
const rfloor = "⌋";
const rfr = "𝔯";
const Rfr = "ℜ";
const rHar = "⥤";
const rhard = "⇁";
const rharu = "⇀";
const rharul = "⥬";
const Rho = "Ρ";
const rho = "ρ";
const rhov = "ϱ";
const RightAngleBracket = "⟩";
const RightArrowBar = "⇥";
const rightarrow = "→";
const RightArrow = "→";
const Rightarrow = "⇒";
const RightArrowLeftArrow = "⇄";
const rightarrowtail = "↣";
const RightCeiling = "⌉";
const RightDoubleBracket = "⟧";
const RightDownTeeVector = "⥝";
const RightDownVectorBar = "⥕";
const RightDownVector = "⇂";
const RightFloor = "⌋";
const rightharpoondown = "⇁";
const rightharpoonup = "⇀";
const rightleftarrows = "⇄";
const rightleftharpoons = "⇌";
const rightrightarrows = "⇉";
const rightsquigarrow = "↝";
const RightTeeArrow = "↦";
const RightTee = "⊢";
const RightTeeVector = "⥛";
const rightthreetimes = "⋌";
const RightTriangleBar = "⧐";
const RightTriangle = "⊳";
const RightTriangleEqual = "⊵";
const RightUpDownVector = "⥏";
const RightUpTeeVector = "⥜";
const RightUpVectorBar = "⥔";
const RightUpVector = "↾";
const RightVectorBar = "⥓";
const RightVector = "⇀";
const ring = "˚";
const risingdotseq = "≓";
const rlarr = "⇄";
const rlhar = "⇌";
const rlm = "‏";
const rmoustache = "⎱";
const rmoust = "⎱";
const rnmid = "⫮";
const roang = "⟭";
const roarr = "⇾";
const robrk = "⟧";
const ropar = "⦆";
const ropf = "𝕣";
const Ropf = "ℝ";
const roplus = "⨮";
const rotimes = "⨵";
const RoundImplies = "⥰";
const rpar = ")";
const rpargt = "⦔";
const rppolint = "⨒";
const rrarr = "⇉";
const Rrightarrow = "⇛";
const rsaquo = "›";
const rscr = "𝓇";
const Rscr = "ℛ";
const rsh = "↱";
const Rsh = "↱";
const rsqb = "]";
const rsquo = "’";
const rsquor = "’";
const rthree = "⋌";
const rtimes = "⋊";
const rtri = "▹";
const rtrie = "⊵";
const rtrif = "▸";
const rtriltri = "⧎";
const RuleDelayed = "⧴";
const ruluhar = "⥨";
const rx = "℞";
const Sacute = "Ś";
const sacute = "ś";
const sbquo = "‚";
const scap = "⪸";
const Scaron = "Š";
const scaron = "š";
const Sc = "⪼";
const sc = "≻";
const sccue = "≽";
const sce = "⪰";
const scE = "⪴";
const Scedil = "Ş";
const scedil = "ş";
const Scirc = "Ŝ";
const scirc = "ŝ";
const scnap = "⪺";
const scnE = "⪶";
const scnsim = "⋩";
const scpolint = "⨓";
const scsim = "≿";
const Scy = "С";
const scy = "с";
const sdotb = "⊡";
const sdot = "⋅";
const sdote = "⩦";
const searhk = "⤥";
const searr = "↘";
const seArr = "⇘";
const searrow = "↘";
const sect$1 = "§";
const semi = ";";
const seswar = "⤩";
const setminus = "∖";
const setmn = "∖";
const sext = "✶";
const Sfr = "𝔖";
const sfr = "𝔰";
const sfrown = "⌢";
const sharp = "♯";
const SHCHcy = "Щ";
const shchcy = "щ";
const SHcy = "Ш";
const shcy = "ш";
const ShortDownArrow = "↓";
const ShortLeftArrow = "←";
const shortmid = "∣";
const shortparallel = "∥";
const ShortRightArrow = "→";
const ShortUpArrow = "↑";
const shy$1 = "­";
const Sigma = "Σ";
const sigma = "σ";
const sigmaf = "ς";
const sigmav = "ς";
const sim = "∼";
const simdot = "⩪";
const sime = "≃";
const simeq = "≃";
const simg = "⪞";
const simgE = "⪠";
const siml = "⪝";
const simlE = "⪟";
const simne = "≆";
const simplus = "⨤";
const simrarr = "⥲";
const slarr = "←";
const SmallCircle = "∘";
const smallsetminus = "∖";
const smashp = "⨳";
const smeparsl = "⧤";
const smid = "∣";
const smile = "⌣";
const smt = "⪪";
const smte = "⪬";
const smtes = "⪬︀";
const SOFTcy = "Ь";
const softcy = "ь";
const solbar = "⌿";
const solb = "⧄";
const sol = "/";
const Sopf = "𝕊";
const sopf = "𝕤";
const spades = "♠";
const spadesuit = "♠";
const spar = "∥";
const sqcap = "⊓";
const sqcaps = "⊓︀";
const sqcup = "⊔";
const sqcups = "⊔︀";
const Sqrt = "√";
const sqsub = "⊏";
const sqsube = "⊑";
const sqsubset = "⊏";
const sqsubseteq = "⊑";
const sqsup = "⊐";
const sqsupe = "⊒";
const sqsupset = "⊐";
const sqsupseteq = "⊒";
const square = "□";
const Square = "□";
const SquareIntersection = "⊓";
const SquareSubset = "⊏";
const SquareSubsetEqual = "⊑";
const SquareSuperset = "⊐";
const SquareSupersetEqual = "⊒";
const SquareUnion = "⊔";
const squarf = "▪";
const squ = "□";
const squf = "▪";
const srarr = "→";
const Sscr = "𝒮";
const sscr = "𝓈";
const ssetmn = "∖";
const ssmile = "⌣";
const sstarf = "⋆";
const Star = "⋆";
const star = "☆";
const starf = "★";
const straightepsilon = "ϵ";
const straightphi = "ϕ";
const strns = "¯";
const sub = "⊂";
const Sub = "⋐";
const subdot = "⪽";
const subE = "⫅";
const sube = "⊆";
const subedot = "⫃";
const submult = "⫁";
const subnE = "⫋";
const subne = "⊊";
const subplus = "⪿";
const subrarr = "⥹";
const subset = "⊂";
const Subset = "⋐";
const subseteq = "⊆";
const subseteqq = "⫅";
const SubsetEqual = "⊆";
const subsetneq = "⊊";
const subsetneqq = "⫋";
const subsim = "⫇";
const subsub = "⫕";
const subsup = "⫓";
const succapprox = "⪸";
const succ = "≻";
const succcurlyeq = "≽";
const Succeeds = "≻";
const SucceedsEqual = "⪰";
const SucceedsSlantEqual = "≽";
const SucceedsTilde = "≿";
const succeq = "⪰";
const succnapprox = "⪺";
const succneqq = "⪶";
const succnsim = "⋩";
const succsim = "≿";
const SuchThat = "∋";
const sum = "∑";
const Sum = "∑";
const sung = "♪";
const sup1$1 = "¹";
const sup2$1 = "²";
const sup3$1 = "³";
const sup = "⊃";
const Sup = "⋑";
const supdot = "⪾";
const supdsub = "⫘";
const supE = "⫆";
const supe = "⊇";
const supedot = "⫄";
const Superset = "⊃";
const SupersetEqual = "⊇";
const suphsol = "⟉";
const suphsub = "⫗";
const suplarr = "⥻";
const supmult = "⫂";
const supnE = "⫌";
const supne = "⊋";
const supplus = "⫀";
const supset = "⊃";
const Supset = "⋑";
const supseteq = "⊇";
const supseteqq = "⫆";
const supsetneq = "⊋";
const supsetneqq = "⫌";
const supsim = "⫈";
const supsub = "⫔";
const supsup = "⫖";
const swarhk = "⤦";
const swarr = "↙";
const swArr = "⇙";
const swarrow = "↙";
const swnwar = "⤪";
const szlig$1 = "ß";
const Tab = "	";
const target = "⌖";
const Tau = "Τ";
const tau = "τ";
const tbrk = "⎴";
const Tcaron = "Ť";
const tcaron = "ť";
const Tcedil = "Ţ";
const tcedil = "ţ";
const Tcy = "Т";
const tcy = "т";
const tdot = "⃛";
const telrec = "⌕";
const Tfr = "𝔗";
const tfr = "𝔱";
const there4 = "∴";
const therefore = "∴";
const Therefore = "∴";
const Theta = "Θ";
const theta = "θ";
const thetasym = "ϑ";
const thetav = "ϑ";
const thickapprox = "≈";
const thicksim = "∼";
const ThickSpace = "  ";
const ThinSpace = " ";
const thinsp = " ";
const thkap = "≈";
const thksim = "∼";
const THORN$1 = "Þ";
const thorn$1 = "þ";
const tilde = "˜";
const Tilde = "∼";
const TildeEqual = "≃";
const TildeFullEqual = "≅";
const TildeTilde = "≈";
const timesbar = "⨱";
const timesb = "⊠";
const times$1 = "×";
const timesd = "⨰";
const tint = "∭";
const toea = "⤨";
const topbot = "⌶";
const topcir = "⫱";
const top = "⊤";
const Topf = "𝕋";
const topf = "𝕥";
const topfork = "⫚";
const tosa = "⤩";
const tprime = "‴";
const trade = "™";
const TRADE = "™";
const triangle = "▵";
const triangledown = "▿";
const triangleleft = "◃";
const trianglelefteq = "⊴";
const triangleq = "≜";
const triangleright = "▹";
const trianglerighteq = "⊵";
const tridot = "◬";
const trie = "≜";
const triminus = "⨺";
const TripleDot = "⃛";
const triplus = "⨹";
const trisb = "⧍";
const tritime = "⨻";
const trpezium = "⏢";
const Tscr = "𝒯";
const tscr = "𝓉";
const TScy = "Ц";
const tscy = "ц";
const TSHcy = "Ћ";
const tshcy = "ћ";
const Tstrok = "Ŧ";
const tstrok = "ŧ";
const twixt = "≬";
const twoheadleftarrow = "↞";
const twoheadrightarrow = "↠";
const Uacute$1 = "Ú";
const uacute$1 = "ú";
const uarr = "↑";
const Uarr = "↟";
const uArr = "⇑";
const Uarrocir = "⥉";
const Ubrcy = "Ў";
const ubrcy = "ў";
const Ubreve = "Ŭ";
const ubreve = "ŭ";
const Ucirc$1 = "Û";
const ucirc$1 = "û";
const Ucy = "У";
const ucy = "у";
const udarr = "⇅";
const Udblac = "Ű";
const udblac = "ű";
const udhar = "⥮";
const ufisht = "⥾";
const Ufr = "𝔘";
const ufr = "𝔲";
const Ugrave$1 = "Ù";
const ugrave$1 = "ù";
const uHar = "⥣";
const uharl = "↿";
const uharr = "↾";
const uhblk = "▀";
const ulcorn = "⌜";
const ulcorner = "⌜";
const ulcrop = "⌏";
const ultri = "◸";
const Umacr = "Ū";
const umacr = "ū";
const uml$1 = "¨";
const UnderBar = "_";
const UnderBrace = "⏟";
const UnderBracket = "⎵";
const UnderParenthesis = "⏝";
const Union = "⋃";
const UnionPlus = "⊎";
const Uogon = "Ų";
const uogon = "ų";
const Uopf = "𝕌";
const uopf = "𝕦";
const UpArrowBar = "⤒";
const uparrow = "↑";
const UpArrow = "↑";
const Uparrow = "⇑";
const UpArrowDownArrow = "⇅";
const updownarrow = "↕";
const UpDownArrow = "↕";
const Updownarrow = "⇕";
const UpEquilibrium = "⥮";
const upharpoonleft = "↿";
const upharpoonright = "↾";
const uplus = "⊎";
const UpperLeftArrow = "↖";
const UpperRightArrow = "↗";
const upsi = "υ";
const Upsi = "ϒ";
const upsih = "ϒ";
const Upsilon = "Υ";
const upsilon = "υ";
const UpTeeArrow = "↥";
const UpTee = "⊥";
const upuparrows = "⇈";
const urcorn = "⌝";
const urcorner = "⌝";
const urcrop = "⌎";
const Uring = "Ů";
const uring = "ů";
const urtri = "◹";
const Uscr = "𝒰";
const uscr = "𝓊";
const utdot = "⋰";
const Utilde = "Ũ";
const utilde = "ũ";
const utri = "▵";
const utrif = "▴";
const uuarr = "⇈";
const Uuml$1 = "Ü";
const uuml$1 = "ü";
const uwangle = "⦧";
const vangrt = "⦜";
const varepsilon = "ϵ";
const varkappa = "ϰ";
const varnothing = "∅";
const varphi = "ϕ";
const varpi = "ϖ";
const varpropto = "∝";
const varr = "↕";
const vArr = "⇕";
const varrho = "ϱ";
const varsigma = "ς";
const varsubsetneq = "⊊︀";
const varsubsetneqq = "⫋︀";
const varsupsetneq = "⊋︀";
const varsupsetneqq = "⫌︀";
const vartheta = "ϑ";
const vartriangleleft = "⊲";
const vartriangleright = "⊳";
const vBar = "⫨";
const Vbar = "⫫";
const vBarv = "⫩";
const Vcy = "В";
const vcy = "в";
const vdash = "⊢";
const vDash = "⊨";
const Vdash = "⊩";
const VDash = "⊫";
const Vdashl = "⫦";
const veebar = "⊻";
const vee = "∨";
const Vee = "⋁";
const veeeq = "≚";
const vellip = "⋮";
const verbar = "|";
const Verbar = "‖";
const vert = "|";
const Vert = "‖";
const VerticalBar = "∣";
const VerticalLine = "|";
const VerticalSeparator = "❘";
const VerticalTilde = "≀";
const VeryThinSpace = " ";
const Vfr = "𝔙";
const vfr = "𝔳";
const vltri = "⊲";
const vnsub = "⊂⃒";
const vnsup = "⊃⃒";
const Vopf = "𝕍";
const vopf = "𝕧";
const vprop = "∝";
const vrtri = "⊳";
const Vscr = "𝒱";
const vscr = "𝓋";
const vsubnE = "⫋︀";
const vsubne = "⊊︀";
const vsupnE = "⫌︀";
const vsupne = "⊋︀";
const Vvdash = "⊪";
const vzigzag = "⦚";
const Wcirc = "Ŵ";
const wcirc = "ŵ";
const wedbar = "⩟";
const wedge = "∧";
const Wedge = "⋀";
const wedgeq = "≙";
const weierp = "℘";
const Wfr = "𝔚";
const wfr = "𝔴";
const Wopf = "𝕎";
const wopf = "𝕨";
const wp = "℘";
const wr = "≀";
const wreath = "≀";
const Wscr = "𝒲";
const wscr = "𝓌";
const xcap = "⋂";
const xcirc = "◯";
const xcup = "⋃";
const xdtri = "▽";
const Xfr = "𝔛";
const xfr = "𝔵";
const xharr = "⟷";
const xhArr = "⟺";
const Xi = "Ξ";
const xi = "ξ";
const xlarr = "⟵";
const xlArr = "⟸";
const xmap = "⟼";
const xnis = "⋻";
const xodot = "⨀";
const Xopf = "𝕏";
const xopf = "𝕩";
const xoplus = "⨁";
const xotime = "⨂";
const xrarr = "⟶";
const xrArr = "⟹";
const Xscr = "𝒳";
const xscr = "𝓍";
const xsqcup = "⨆";
const xuplus = "⨄";
const xutri = "△";
const xvee = "⋁";
const xwedge = "⋀";
const Yacute$1 = "Ý";
const yacute$1 = "ý";
const YAcy = "Я";
const yacy = "я";
const Ycirc = "Ŷ";
const ycirc = "ŷ";
const Ycy = "Ы";
const ycy = "ы";
const yen$1 = "¥";
const Yfr = "𝔜";
const yfr = "𝔶";
const YIcy = "Ї";
const yicy = "ї";
const Yopf = "𝕐";
const yopf = "𝕪";
const Yscr = "𝒴";
const yscr = "𝓎";
const YUcy = "Ю";
const yucy = "ю";
const yuml$1 = "ÿ";
const Yuml = "Ÿ";
const Zacute = "Ź";
const zacute = "ź";
const Zcaron = "Ž";
const zcaron = "ž";
const Zcy = "З";
const zcy = "з";
const Zdot = "Ż";
const zdot = "ż";
const zeetrf = "ℨ";
const ZeroWidthSpace = "​";
const Zeta = "Ζ";
const zeta = "ζ";
const zfr = "𝔷";
const Zfr = "ℨ";
const ZHcy = "Ж";
const zhcy = "ж";
const zigrarr = "⇝";
const zopf = "𝕫";
const Zopf = "ℤ";
const Zscr = "𝒵";
const zscr = "𝓏";
const zwj = "‍";
const zwnj = "‌";
const require$$0 = {
  Aacute: Aacute$1,
  aacute: aacute$1,
  Abreve,
  abreve,
  ac,
  acd,
  acE,
  Acirc: Acirc$1,
  acirc: acirc$1,
  acute: acute$1,
  Acy,
  acy,
  AElig: AElig$1,
  aelig: aelig$1,
  af,
  Afr,
  afr,
  Agrave: Agrave$1,
  agrave: agrave$1,
  alefsym,
  aleph,
  Alpha,
  alpha,
  Amacr,
  amacr,
  amalg,
  amp: amp$2,
  AMP: AMP$1,
  andand,
  And,
  and,
  andd,
  andslope,
  andv,
  ang,
  ange,
  angle,
  angmsdaa,
  angmsdab,
  angmsdac,
  angmsdad,
  angmsdae,
  angmsdaf,
  angmsdag,
  angmsdah,
  angmsd,
  angrt,
  angrtvb,
  angrtvbd,
  angsph,
  angst,
  angzarr,
  Aogon,
  aogon,
  Aopf,
  aopf,
  apacir,
  ap,
  apE,
  ape,
  apid,
  apos: apos$1,
  ApplyFunction,
  approx,
  approxeq,
  Aring: Aring$1,
  aring: aring$1,
  Ascr,
  ascr,
  Assign,
  ast,
  asymp,
  asympeq,
  Atilde: Atilde$1,
  atilde: atilde$1,
  Auml: Auml$1,
  auml: auml$1,
  awconint,
  awint,
  backcong,
  backepsilon,
  backprime,
  backsim,
  backsimeq,
  Backslash,
  Barv,
  barvee,
  barwed,
  Barwed,
  barwedge,
  bbrk,
  bbrktbrk,
  bcong,
  Bcy,
  bcy,
  bdquo,
  becaus,
  because,
  Because,
  bemptyv,
  bepsi,
  bernou,
  Bernoullis,
  Beta,
  beta,
  beth,
  between,
  Bfr,
  bfr,
  bigcap,
  bigcirc,
  bigcup,
  bigodot,
  bigoplus,
  bigotimes,
  bigsqcup,
  bigstar,
  bigtriangledown,
  bigtriangleup,
  biguplus,
  bigvee,
  bigwedge,
  bkarow,
  blacklozenge,
  blacksquare,
  blacktriangle,
  blacktriangledown,
  blacktriangleleft,
  blacktriangleright,
  blank,
  blk12,
  blk14,
  blk34,
  block,
  bne,
  bnequiv,
  bNot,
  bnot,
  Bopf,
  bopf,
  bot,
  bottom,
  bowtie,
  boxbox,
  boxdl,
  boxdL,
  boxDl,
  boxDL,
  boxdr,
  boxdR,
  boxDr,
  boxDR,
  boxh,
  boxH,
  boxhd,
  boxHd,
  boxhD,
  boxHD,
  boxhu,
  boxHu,
  boxhU,
  boxHU,
  boxminus,
  boxplus,
  boxtimes,
  boxul,
  boxuL,
  boxUl,
  boxUL,
  boxur,
  boxuR,
  boxUr,
  boxUR,
  boxv,
  boxV,
  boxvh,
  boxvH,
  boxVh,
  boxVH,
  boxvl,
  boxvL,
  boxVl,
  boxVL,
  boxvr,
  boxvR,
  boxVr,
  boxVR,
  bprime,
  breve,
  Breve,
  brvbar: brvbar$1,
  bscr,
  Bscr,
  bsemi,
  bsim,
  bsime,
  bsolb,
  bsol,
  bsolhsub,
  bull,
  bullet,
  bump,
  bumpE,
  bumpe,
  Bumpeq,
  bumpeq,
  Cacute,
  cacute,
  capand,
  capbrcup,
  capcap,
  cap,
  Cap,
  capcup,
  capdot,
  CapitalDifferentialD,
  caps,
  caret,
  caron,
  Cayleys,
  ccaps,
  Ccaron,
  ccaron,
  Ccedil: Ccedil$1,
  ccedil: ccedil$1,
  Ccirc,
  ccirc,
  Cconint,
  ccups,
  ccupssm,
  Cdot,
  cdot,
  cedil: cedil$1,
  Cedilla,
  cemptyv,
  cent: cent$1,
  centerdot,
  CenterDot,
  cfr,
  Cfr,
  CHcy,
  chcy,
  check,
  checkmark,
  Chi,
  chi,
  circ,
  circeq,
  circlearrowleft,
  circlearrowright,
  circledast,
  circledcirc,
  circleddash,
  CircleDot,
  circledR,
  circledS,
  CircleMinus,
  CirclePlus,
  CircleTimes,
  cir,
  cirE,
  cire,
  cirfnint,
  cirmid,
  cirscir,
  ClockwiseContourIntegral,
  CloseCurlyDoubleQuote,
  CloseCurlyQuote,
  clubs,
  clubsuit,
  colon,
  Colon,
  Colone,
  colone,
  coloneq,
  comma,
  commat,
  comp,
  compfn,
  complement,
  complexes,
  cong,
  congdot,
  Congruent,
  conint,
  Conint,
  ContourIntegral,
  copf,
  Copf,
  coprod,
  Coproduct,
  copy: copy$1,
  COPY: COPY$1,
  copysr,
  CounterClockwiseContourIntegral,
  crarr,
  cross,
  Cross,
  Cscr,
  cscr,
  csub,
  csube,
  csup,
  csupe,
  ctdot,
  cudarrl,
  cudarrr,
  cuepr,
  cuesc,
  cularr,
  cularrp,
  cupbrcap,
  cupcap,
  CupCap,
  cup,
  Cup,
  cupcup,
  cupdot,
  cupor,
  cups,
  curarr,
  curarrm,
  curlyeqprec,
  curlyeqsucc,
  curlyvee,
  curlywedge,
  curren: curren$1,
  curvearrowleft,
  curvearrowright,
  cuvee,
  cuwed,
  cwconint,
  cwint,
  cylcty,
  dagger,
  Dagger,
  daleth,
  darr,
  Darr,
  dArr,
  dash,
  Dashv,
  dashv,
  dbkarow,
  dblac,
  Dcaron,
  dcaron,
  Dcy,
  dcy,
  ddagger,
  ddarr,
  DD,
  dd,
  DDotrahd,
  ddotseq,
  deg: deg$1,
  Del,
  Delta,
  delta,
  demptyv,
  dfisht,
  Dfr,
  dfr,
  dHar,
  dharl,
  dharr,
  DiacriticalAcute,
  DiacriticalDot,
  DiacriticalDoubleAcute,
  DiacriticalGrave,
  DiacriticalTilde,
  diam,
  diamond,
  Diamond,
  diamondsuit,
  diams,
  die,
  DifferentialD,
  digamma,
  disin,
  div,
  divide: divide$1,
  divideontimes,
  divonx,
  DJcy,
  djcy,
  dlcorn,
  dlcrop,
  dollar,
  Dopf,
  dopf,
  Dot,
  dot,
  DotDot,
  doteq,
  doteqdot,
  DotEqual,
  dotminus,
  dotplus,
  dotsquare,
  doublebarwedge,
  DoubleContourIntegral,
  DoubleDot,
  DoubleDownArrow,
  DoubleLeftArrow,
  DoubleLeftRightArrow,
  DoubleLeftTee,
  DoubleLongLeftArrow,
  DoubleLongLeftRightArrow,
  DoubleLongRightArrow,
  DoubleRightArrow,
  DoubleRightTee,
  DoubleUpArrow,
  DoubleUpDownArrow,
  DoubleVerticalBar,
  DownArrowBar,
  downarrow,
  DownArrow,
  Downarrow,
  DownArrowUpArrow,
  DownBreve,
  downdownarrows,
  downharpoonleft,
  downharpoonright,
  DownLeftRightVector,
  DownLeftTeeVector,
  DownLeftVectorBar,
  DownLeftVector,
  DownRightTeeVector,
  DownRightVectorBar,
  DownRightVector,
  DownTeeArrow,
  DownTee,
  drbkarow,
  drcorn,
  drcrop,
  Dscr,
  dscr,
  DScy,
  dscy,
  dsol,
  Dstrok,
  dstrok,
  dtdot,
  dtri,
  dtrif,
  duarr,
  duhar,
  dwangle,
  DZcy,
  dzcy,
  dzigrarr,
  Eacute: Eacute$1,
  eacute: eacute$1,
  easter,
  Ecaron,
  ecaron,
  Ecirc: Ecirc$1,
  ecirc: ecirc$1,
  ecir,
  ecolon,
  Ecy,
  ecy,
  eDDot,
  Edot,
  edot,
  eDot,
  ee,
  efDot,
  Efr,
  efr,
  eg,
  Egrave: Egrave$1,
  egrave: egrave$1,
  egs,
  egsdot,
  el,
  Element,
  elinters,
  ell,
  els,
  elsdot,
  Emacr,
  emacr,
  empty,
  emptyset,
  EmptySmallSquare,
  emptyv,
  EmptyVerySmallSquare,
  emsp13,
  emsp14,
  emsp,
  ENG,
  eng,
  ensp,
  Eogon,
  eogon,
  Eopf,
  eopf,
  epar,
  eparsl,
  eplus,
  epsi,
  Epsilon,
  epsilon,
  epsiv,
  eqcirc,
  eqcolon,
  eqsim,
  eqslantgtr,
  eqslantless,
  Equal,
  equals,
  EqualTilde,
  equest,
  Equilibrium,
  equiv,
  equivDD,
  eqvparsl,
  erarr,
  erDot,
  escr,
  Escr,
  esdot,
  Esim,
  esim,
  Eta,
  eta,
  ETH: ETH$1,
  eth: eth$1,
  Euml: Euml$1,
  euml: euml$1,
  euro,
  excl,
  exist,
  Exists,
  expectation,
  exponentiale,
  ExponentialE,
  fallingdotseq,
  Fcy,
  fcy,
  female,
  ffilig,
  fflig,
  ffllig,
  Ffr,
  ffr,
  filig,
  FilledSmallSquare,
  FilledVerySmallSquare,
  fjlig,
  flat,
  fllig,
  fltns,
  fnof,
  Fopf,
  fopf,
  forall,
  ForAll,
  fork,
  forkv,
  Fouriertrf,
  fpartint,
  frac12: frac12$1,
  frac13,
  frac14: frac14$1,
  frac15,
  frac16,
  frac18,
  frac23,
  frac25,
  frac34: frac34$1,
  frac35,
  frac38,
  frac45,
  frac56,
  frac58,
  frac78,
  frasl,
  frown,
  fscr,
  Fscr,
  gacute,
  Gamma,
  gamma,
  Gammad,
  gammad,
  gap,
  Gbreve,
  gbreve,
  Gcedil,
  Gcirc,
  gcirc,
  Gcy,
  gcy,
  Gdot,
  gdot,
  ge,
  gE,
  gEl,
  gel,
  geq,
  geqq,
  geqslant,
  gescc,
  ges,
  gesdot,
  gesdoto,
  gesdotol,
  gesl,
  gesles,
  Gfr,
  gfr,
  gg,
  Gg,
  ggg,
  gimel,
  GJcy,
  gjcy,
  gla,
  gl,
  glE,
  glj,
  gnap,
  gnapprox,
  gne,
  gnE,
  gneq,
  gneqq,
  gnsim,
  Gopf,
  gopf,
  grave,
  GreaterEqual,
  GreaterEqualLess,
  GreaterFullEqual,
  GreaterGreater,
  GreaterLess,
  GreaterSlantEqual,
  GreaterTilde,
  Gscr,
  gscr,
  gsim,
  gsime,
  gsiml,
  gtcc,
  gtcir,
  gt: gt$2,
  GT: GT$1,
  Gt,
  gtdot,
  gtlPar,
  gtquest,
  gtrapprox,
  gtrarr,
  gtrdot,
  gtreqless,
  gtreqqless,
  gtrless,
  gtrsim,
  gvertneqq,
  gvnE,
  Hacek,
  hairsp,
  half,
  hamilt,
  HARDcy,
  hardcy,
  harrcir,
  harr,
  hArr,
  harrw,
  Hat,
  hbar,
  Hcirc,
  hcirc,
  hearts,
  heartsuit,
  hellip,
  hercon,
  hfr,
  Hfr,
  HilbertSpace,
  hksearow,
  hkswarow,
  hoarr,
  homtht,
  hookleftarrow,
  hookrightarrow,
  hopf,
  Hopf,
  horbar,
  HorizontalLine,
  hscr,
  Hscr,
  hslash,
  Hstrok,
  hstrok,
  HumpDownHump,
  HumpEqual,
  hybull,
  hyphen,
  Iacute: Iacute$1,
  iacute: iacute$1,
  ic,
  Icirc: Icirc$1,
  icirc: icirc$1,
  Icy,
  icy,
  Idot,
  IEcy,
  iecy,
  iexcl: iexcl$1,
  iff,
  ifr,
  Ifr,
  Igrave: Igrave$1,
  igrave: igrave$1,
  ii,
  iiiint,
  iiint,
  iinfin,
  iiota,
  IJlig,
  ijlig,
  Imacr,
  imacr,
  image,
  ImaginaryI,
  imagline,
  imagpart,
  imath,
  Im,
  imof,
  imped,
  Implies,
  incare,
  "in": "∈",
  infin,
  infintie,
  inodot,
  intcal,
  int,
  Int,
  integers,
  Integral,
  intercal,
  Intersection,
  intlarhk,
  intprod,
  InvisibleComma,
  InvisibleTimes,
  IOcy,
  iocy,
  Iogon,
  iogon,
  Iopf,
  iopf,
  Iota,
  iota,
  iprod,
  iquest: iquest$1,
  iscr,
  Iscr,
  isin,
  isindot,
  isinE,
  isins,
  isinsv,
  isinv,
  it,
  Itilde,
  itilde,
  Iukcy,
  iukcy,
  Iuml: Iuml$1,
  iuml: iuml$1,
  Jcirc,
  jcirc,
  Jcy,
  jcy,
  Jfr,
  jfr,
  jmath,
  Jopf,
  jopf,
  Jscr,
  jscr,
  Jsercy,
  jsercy,
  Jukcy,
  jukcy,
  Kappa,
  kappa,
  kappav,
  Kcedil,
  kcedil,
  Kcy,
  kcy,
  Kfr,
  kfr,
  kgreen,
  KHcy,
  khcy,
  KJcy,
  kjcy,
  Kopf,
  kopf,
  Kscr,
  kscr,
  lAarr,
  Lacute,
  lacute,
  laemptyv,
  lagran,
  Lambda,
  lambda,
  lang,
  Lang,
  langd,
  langle,
  lap,
  Laplacetrf,
  laquo: laquo$1,
  larrb,
  larrbfs,
  larr,
  Larr,
  lArr,
  larrfs,
  larrhk,
  larrlp,
  larrpl,
  larrsim,
  larrtl,
  latail,
  lAtail,
  lat,
  late,
  lates,
  lbarr,
  lBarr,
  lbbrk,
  lbrace,
  lbrack,
  lbrke,
  lbrksld,
  lbrkslu,
  Lcaron,
  lcaron,
  Lcedil,
  lcedil,
  lceil,
  lcub,
  Lcy,
  lcy,
  ldca,
  ldquo,
  ldquor,
  ldrdhar,
  ldrushar,
  ldsh,
  le,
  lE,
  LeftAngleBracket,
  LeftArrowBar,
  leftarrow,
  LeftArrow,
  Leftarrow,
  LeftArrowRightArrow,
  leftarrowtail,
  LeftCeiling,
  LeftDoubleBracket,
  LeftDownTeeVector,
  LeftDownVectorBar,
  LeftDownVector,
  LeftFloor,
  leftharpoondown,
  leftharpoonup,
  leftleftarrows,
  leftrightarrow,
  LeftRightArrow,
  Leftrightarrow,
  leftrightarrows,
  leftrightharpoons,
  leftrightsquigarrow,
  LeftRightVector,
  LeftTeeArrow,
  LeftTee,
  LeftTeeVector,
  leftthreetimes,
  LeftTriangleBar,
  LeftTriangle,
  LeftTriangleEqual,
  LeftUpDownVector,
  LeftUpTeeVector,
  LeftUpVectorBar,
  LeftUpVector,
  LeftVectorBar,
  LeftVector,
  lEg,
  leg,
  leq,
  leqq,
  leqslant,
  lescc,
  les,
  lesdot,
  lesdoto,
  lesdotor,
  lesg,
  lesges,
  lessapprox,
  lessdot,
  lesseqgtr,
  lesseqqgtr,
  LessEqualGreater,
  LessFullEqual,
  LessGreater,
  lessgtr,
  LessLess,
  lesssim,
  LessSlantEqual,
  LessTilde,
  lfisht,
  lfloor,
  Lfr,
  lfr,
  lg,
  lgE,
  lHar,
  lhard,
  lharu,
  lharul,
  lhblk,
  LJcy,
  ljcy,
  llarr,
  ll,
  Ll,
  llcorner,
  Lleftarrow,
  llhard,
  lltri,
  Lmidot,
  lmidot,
  lmoustache,
  lmoust,
  lnap,
  lnapprox,
  lne,
  lnE,
  lneq,
  lneqq,
  lnsim,
  loang,
  loarr,
  lobrk,
  longleftarrow,
  LongLeftArrow,
  Longleftarrow,
  longleftrightarrow,
  LongLeftRightArrow,
  Longleftrightarrow,
  longmapsto,
  longrightarrow,
  LongRightArrow,
  Longrightarrow,
  looparrowleft,
  looparrowright,
  lopar,
  Lopf,
  lopf,
  loplus,
  lotimes,
  lowast,
  lowbar,
  LowerLeftArrow,
  LowerRightArrow,
  loz,
  lozenge,
  lozf,
  lpar,
  lparlt,
  lrarr,
  lrcorner,
  lrhar,
  lrhard,
  lrm,
  lrtri,
  lsaquo,
  lscr,
  Lscr,
  lsh,
  Lsh,
  lsim,
  lsime,
  lsimg,
  lsqb,
  lsquo,
  lsquor,
  Lstrok,
  lstrok,
  ltcc,
  ltcir,
  lt: lt$2,
  LT: LT$1,
  Lt,
  ltdot,
  lthree,
  ltimes,
  ltlarr,
  ltquest,
  ltri,
  ltrie,
  ltrif,
  ltrPar,
  lurdshar,
  luruhar,
  lvertneqq,
  lvnE,
  macr: macr$1,
  male,
  malt,
  maltese,
  "Map": "⤅",
  map: map$1,
  mapsto,
  mapstodown,
  mapstoleft,
  mapstoup,
  marker,
  mcomma,
  Mcy,
  mcy,
  mdash,
  mDDot,
  measuredangle,
  MediumSpace,
  Mellintrf,
  Mfr,
  mfr,
  mho,
  micro: micro$1,
  midast,
  midcir,
  mid,
  middot: middot$1,
  minusb,
  minus,
  minusd,
  minusdu,
  MinusPlus,
  mlcp,
  mldr,
  mnplus,
  models,
  Mopf,
  mopf,
  mp,
  mscr,
  Mscr,
  mstpos,
  Mu,
  mu,
  multimap,
  mumap,
  nabla,
  Nacute,
  nacute,
  nang,
  nap,
  napE,
  napid,
  napos,
  napprox,
  natural,
  naturals,
  natur,
  nbsp: nbsp$1,
  nbump,
  nbumpe,
  ncap,
  Ncaron,
  ncaron,
  Ncedil,
  ncedil,
  ncong,
  ncongdot,
  ncup,
  Ncy,
  ncy,
  ndash,
  nearhk,
  nearr,
  neArr,
  nearrow,
  ne,
  nedot,
  NegativeMediumSpace,
  NegativeThickSpace,
  NegativeThinSpace,
  NegativeVeryThinSpace,
  nequiv,
  nesear,
  nesim,
  NestedGreaterGreater,
  NestedLessLess,
  NewLine,
  nexist,
  nexists,
  Nfr,
  nfr,
  ngE,
  nge,
  ngeq,
  ngeqq,
  ngeqslant,
  nges,
  nGg,
  ngsim,
  nGt,
  ngt,
  ngtr,
  nGtv,
  nharr,
  nhArr,
  nhpar,
  ni,
  nis,
  nisd,
  niv,
  NJcy,
  njcy,
  nlarr,
  nlArr,
  nldr,
  nlE,
  nle,
  nleftarrow,
  nLeftarrow,
  nleftrightarrow,
  nLeftrightarrow,
  nleq,
  nleqq,
  nleqslant,
  nles,
  nless,
  nLl,
  nlsim,
  nLt,
  nlt,
  nltri,
  nltrie,
  nLtv,
  nmid,
  NoBreak,
  NonBreakingSpace,
  nopf,
  Nopf,
  Not,
  not: not$1,
  NotCongruent,
  NotCupCap,
  NotDoubleVerticalBar,
  NotElement,
  NotEqual,
  NotEqualTilde,
  NotExists,
  NotGreater,
  NotGreaterEqual,
  NotGreaterFullEqual,
  NotGreaterGreater,
  NotGreaterLess,
  NotGreaterSlantEqual,
  NotGreaterTilde,
  NotHumpDownHump,
  NotHumpEqual,
  notin,
  notindot,
  notinE,
  notinva,
  notinvb,
  notinvc,
  NotLeftTriangleBar,
  NotLeftTriangle,
  NotLeftTriangleEqual,
  NotLess,
  NotLessEqual,
  NotLessGreater,
  NotLessLess,
  NotLessSlantEqual,
  NotLessTilde,
  NotNestedGreaterGreater,
  NotNestedLessLess,
  notni,
  notniva,
  notnivb,
  notnivc,
  NotPrecedes,
  NotPrecedesEqual,
  NotPrecedesSlantEqual,
  NotReverseElement,
  NotRightTriangleBar,
  NotRightTriangle,
  NotRightTriangleEqual,
  NotSquareSubset,
  NotSquareSubsetEqual,
  NotSquareSuperset,
  NotSquareSupersetEqual,
  NotSubset,
  NotSubsetEqual,
  NotSucceeds,
  NotSucceedsEqual,
  NotSucceedsSlantEqual,
  NotSucceedsTilde,
  NotSuperset,
  NotSupersetEqual,
  NotTilde,
  NotTildeEqual,
  NotTildeFullEqual,
  NotTildeTilde,
  NotVerticalBar,
  nparallel,
  npar,
  nparsl,
  npart,
  npolint,
  npr,
  nprcue,
  nprec,
  npreceq,
  npre,
  nrarrc,
  nrarr,
  nrArr,
  nrarrw,
  nrightarrow,
  nRightarrow,
  nrtri,
  nrtrie,
  nsc,
  nsccue,
  nsce,
  Nscr,
  nscr,
  nshortmid,
  nshortparallel,
  nsim,
  nsime,
  nsimeq,
  nsmid,
  nspar,
  nsqsube,
  nsqsupe,
  nsub,
  nsubE,
  nsube,
  nsubset,
  nsubseteq,
  nsubseteqq,
  nsucc,
  nsucceq,
  nsup,
  nsupE,
  nsupe,
  nsupset,
  nsupseteq,
  nsupseteqq,
  ntgl,
  Ntilde: Ntilde$1,
  ntilde: ntilde$1,
  ntlg,
  ntriangleleft,
  ntrianglelefteq,
  ntriangleright,
  ntrianglerighteq,
  Nu,
  nu,
  num,
  numero,
  numsp,
  nvap,
  nvdash,
  nvDash,
  nVdash,
  nVDash,
  nvge,
  nvgt,
  nvHarr,
  nvinfin,
  nvlArr,
  nvle,
  nvlt,
  nvltrie,
  nvrArr,
  nvrtrie,
  nvsim,
  nwarhk,
  nwarr,
  nwArr,
  nwarrow,
  nwnear,
  Oacute: Oacute$1,
  oacute: oacute$1,
  oast,
  Ocirc: Ocirc$1,
  ocirc: ocirc$1,
  ocir,
  Ocy,
  ocy,
  odash,
  Odblac,
  odblac,
  odiv,
  odot,
  odsold,
  OElig,
  oelig,
  ofcir,
  Ofr,
  ofr,
  ogon,
  Ograve: Ograve$1,
  ograve: ograve$1,
  ogt,
  ohbar,
  ohm,
  oint,
  olarr,
  olcir,
  olcross,
  oline,
  olt,
  Omacr,
  omacr,
  Omega,
  omega,
  Omicron,
  omicron,
  omid,
  ominus,
  Oopf,
  oopf,
  opar,
  OpenCurlyDoubleQuote,
  OpenCurlyQuote,
  operp,
  oplus,
  orarr,
  Or,
  or,
  ord,
  order,
  orderof,
  ordf: ordf$1,
  ordm: ordm$1,
  origof,
  oror,
  orslope,
  orv,
  oS,
  Oscr,
  oscr,
  Oslash: Oslash$1,
  oslash: oslash$1,
  osol,
  Otilde: Otilde$1,
  otilde: otilde$1,
  otimesas,
  Otimes,
  otimes,
  Ouml: Ouml$1,
  ouml: ouml$1,
  ovbar,
  OverBar,
  OverBrace,
  OverBracket,
  OverParenthesis,
  para: para$1,
  parallel,
  par,
  parsim,
  parsl,
  part,
  PartialD,
  Pcy,
  pcy,
  percnt,
  period,
  permil,
  perp,
  pertenk,
  Pfr,
  pfr,
  Phi,
  phi,
  phiv,
  phmmat,
  phone,
  Pi,
  pi,
  pitchfork,
  piv,
  planck,
  planckh,
  plankv,
  plusacir,
  plusb,
  pluscir,
  plus,
  plusdo,
  plusdu,
  pluse,
  PlusMinus,
  plusmn: plusmn$1,
  plussim,
  plustwo,
  pm,
  Poincareplane,
  pointint,
  popf,
  Popf,
  pound: pound$1,
  prap,
  Pr,
  pr,
  prcue,
  precapprox,
  prec,
  preccurlyeq,
  Precedes,
  PrecedesEqual,
  PrecedesSlantEqual,
  PrecedesTilde,
  preceq,
  precnapprox,
  precneqq,
  precnsim,
  pre,
  prE,
  precsim,
  prime,
  Prime,
  primes,
  prnap,
  prnE,
  prnsim,
  prod,
  Product,
  profalar,
  profline,
  profsurf,
  prop,
  Proportional,
  Proportion,
  propto,
  prsim,
  prurel,
  Pscr,
  pscr,
  Psi,
  psi,
  puncsp,
  Qfr,
  qfr,
  qint,
  qopf,
  Qopf,
  qprime,
  Qscr,
  qscr,
  quaternions,
  quatint,
  quest,
  questeq,
  quot: quot$2,
  QUOT: QUOT$1,
  rAarr,
  race,
  Racute,
  racute,
  radic,
  raemptyv,
  rang,
  Rang,
  rangd,
  range,
  rangle,
  raquo: raquo$1,
  rarrap,
  rarrb,
  rarrbfs,
  rarrc,
  rarr,
  Rarr,
  rArr,
  rarrfs,
  rarrhk,
  rarrlp,
  rarrpl,
  rarrsim,
  Rarrtl,
  rarrtl,
  rarrw,
  ratail,
  rAtail,
  ratio,
  rationals,
  rbarr,
  rBarr,
  RBarr,
  rbbrk,
  rbrace,
  rbrack,
  rbrke,
  rbrksld,
  rbrkslu,
  Rcaron,
  rcaron,
  Rcedil,
  rcedil,
  rceil,
  rcub,
  Rcy,
  rcy,
  rdca,
  rdldhar,
  rdquo,
  rdquor,
  rdsh,
  real,
  realine,
  realpart,
  reals,
  Re,
  rect,
  reg: reg$1,
  REG: REG$1,
  ReverseElement,
  ReverseEquilibrium,
  ReverseUpEquilibrium,
  rfisht,
  rfloor,
  rfr,
  Rfr,
  rHar,
  rhard,
  rharu,
  rharul,
  Rho,
  rho,
  rhov,
  RightAngleBracket,
  RightArrowBar,
  rightarrow,
  RightArrow,
  Rightarrow,
  RightArrowLeftArrow,
  rightarrowtail,
  RightCeiling,
  RightDoubleBracket,
  RightDownTeeVector,
  RightDownVectorBar,
  RightDownVector,
  RightFloor,
  rightharpoondown,
  rightharpoonup,
  rightleftarrows,
  rightleftharpoons,
  rightrightarrows,
  rightsquigarrow,
  RightTeeArrow,
  RightTee,
  RightTeeVector,
  rightthreetimes,
  RightTriangleBar,
  RightTriangle,
  RightTriangleEqual,
  RightUpDownVector,
  RightUpTeeVector,
  RightUpVectorBar,
  RightUpVector,
  RightVectorBar,
  RightVector,
  ring,
  risingdotseq,
  rlarr,
  rlhar,
  rlm,
  rmoustache,
  rmoust,
  rnmid,
  roang,
  roarr,
  robrk,
  ropar,
  ropf,
  Ropf,
  roplus,
  rotimes,
  RoundImplies,
  rpar,
  rpargt,
  rppolint,
  rrarr,
  Rrightarrow,
  rsaquo,
  rscr,
  Rscr,
  rsh,
  Rsh,
  rsqb,
  rsquo,
  rsquor,
  rthree,
  rtimes,
  rtri,
  rtrie,
  rtrif,
  rtriltri,
  RuleDelayed,
  ruluhar,
  rx,
  Sacute,
  sacute,
  sbquo,
  scap,
  Scaron,
  scaron,
  Sc,
  sc,
  sccue,
  sce,
  scE,
  Scedil,
  scedil,
  Scirc,
  scirc,
  scnap,
  scnE,
  scnsim,
  scpolint,
  scsim,
  Scy,
  scy,
  sdotb,
  sdot,
  sdote,
  searhk,
  searr,
  seArr,
  searrow,
  sect: sect$1,
  semi,
  seswar,
  setminus,
  setmn,
  sext,
  Sfr,
  sfr,
  sfrown,
  sharp,
  SHCHcy,
  shchcy,
  SHcy,
  shcy,
  ShortDownArrow,
  ShortLeftArrow,
  shortmid,
  shortparallel,
  ShortRightArrow,
  ShortUpArrow,
  shy: shy$1,
  Sigma,
  sigma,
  sigmaf,
  sigmav,
  sim,
  simdot,
  sime,
  simeq,
  simg,
  simgE,
  siml,
  simlE,
  simne,
  simplus,
  simrarr,
  slarr,
  SmallCircle,
  smallsetminus,
  smashp,
  smeparsl,
  smid,
  smile,
  smt,
  smte,
  smtes,
  SOFTcy,
  softcy,
  solbar,
  solb,
  sol,
  Sopf,
  sopf,
  spades,
  spadesuit,
  spar,
  sqcap,
  sqcaps,
  sqcup,
  sqcups,
  Sqrt,
  sqsub,
  sqsube,
  sqsubset,
  sqsubseteq,
  sqsup,
  sqsupe,
  sqsupset,
  sqsupseteq,
  square,
  Square,
  SquareIntersection,
  SquareSubset,
  SquareSubsetEqual,
  SquareSuperset,
  SquareSupersetEqual,
  SquareUnion,
  squarf,
  squ,
  squf,
  srarr,
  Sscr,
  sscr,
  ssetmn,
  ssmile,
  sstarf,
  Star,
  star,
  starf,
  straightepsilon,
  straightphi,
  strns,
  sub,
  Sub,
  subdot,
  subE,
  sube,
  subedot,
  submult,
  subnE,
  subne,
  subplus,
  subrarr,
  subset,
  Subset,
  subseteq,
  subseteqq,
  SubsetEqual,
  subsetneq,
  subsetneqq,
  subsim,
  subsub,
  subsup,
  succapprox,
  succ,
  succcurlyeq,
  Succeeds,
  SucceedsEqual,
  SucceedsSlantEqual,
  SucceedsTilde,
  succeq,
  succnapprox,
  succneqq,
  succnsim,
  succsim,
  SuchThat,
  sum,
  Sum,
  sung,
  sup1: sup1$1,
  sup2: sup2$1,
  sup3: sup3$1,
  sup,
  Sup,
  supdot,
  supdsub,
  supE,
  supe,
  supedot,
  Superset,
  SupersetEqual,
  suphsol,
  suphsub,
  suplarr,
  supmult,
  supnE,
  supne,
  supplus,
  supset,
  Supset,
  supseteq,
  supseteqq,
  supsetneq,
  supsetneqq,
  supsim,
  supsub,
  supsup,
  swarhk,
  swarr,
  swArr,
  swarrow,
  swnwar,
  szlig: szlig$1,
  Tab,
  target,
  Tau,
  tau,
  tbrk,
  Tcaron,
  tcaron,
  Tcedil,
  tcedil,
  Tcy,
  tcy,
  tdot,
  telrec,
  Tfr,
  tfr,
  there4,
  therefore,
  Therefore,
  Theta,
  theta,
  thetasym,
  thetav,
  thickapprox,
  thicksim,
  ThickSpace,
  ThinSpace,
  thinsp,
  thkap,
  thksim,
  THORN: THORN$1,
  thorn: thorn$1,
  tilde,
  Tilde,
  TildeEqual,
  TildeFullEqual,
  TildeTilde,
  timesbar,
  timesb,
  times: times$1,
  timesd,
  tint,
  toea,
  topbot,
  topcir,
  top,
  Topf,
  topf,
  topfork,
  tosa,
  tprime,
  trade,
  TRADE,
  triangle,
  triangledown,
  triangleleft,
  trianglelefteq,
  triangleq,
  triangleright,
  trianglerighteq,
  tridot,
  trie,
  triminus,
  TripleDot,
  triplus,
  trisb,
  tritime,
  trpezium,
  Tscr,
  tscr,
  TScy,
  tscy,
  TSHcy,
  tshcy,
  Tstrok,
  tstrok,
  twixt,
  twoheadleftarrow,
  twoheadrightarrow,
  Uacute: Uacute$1,
  uacute: uacute$1,
  uarr,
  Uarr,
  uArr,
  Uarrocir,
  Ubrcy,
  ubrcy,
  Ubreve,
  ubreve,
  Ucirc: Ucirc$1,
  ucirc: ucirc$1,
  Ucy,
  ucy,
  udarr,
  Udblac,
  udblac,
  udhar,
  ufisht,
  Ufr,
  ufr,
  Ugrave: Ugrave$1,
  ugrave: ugrave$1,
  uHar,
  uharl,
  uharr,
  uhblk,
  ulcorn,
  ulcorner,
  ulcrop,
  ultri,
  Umacr,
  umacr,
  uml: uml$1,
  UnderBar,
  UnderBrace,
  UnderBracket,
  UnderParenthesis,
  Union,
  UnionPlus,
  Uogon,
  uogon,
  Uopf,
  uopf,
  UpArrowBar,
  uparrow,
  UpArrow,
  Uparrow,
  UpArrowDownArrow,
  updownarrow,
  UpDownArrow,
  Updownarrow,
  UpEquilibrium,
  upharpoonleft,
  upharpoonright,
  uplus,
  UpperLeftArrow,
  UpperRightArrow,
  upsi,
  Upsi,
  upsih,
  Upsilon,
  upsilon,
  UpTeeArrow,
  UpTee,
  upuparrows,
  urcorn,
  urcorner,
  urcrop,
  Uring,
  uring,
  urtri,
  Uscr,
  uscr,
  utdot,
  Utilde,
  utilde,
  utri,
  utrif,
  uuarr,
  Uuml: Uuml$1,
  uuml: uuml$1,
  uwangle,
  vangrt,
  varepsilon,
  varkappa,
  varnothing,
  varphi,
  varpi,
  varpropto,
  varr,
  vArr,
  varrho,
  varsigma,
  varsubsetneq,
  varsubsetneqq,
  varsupsetneq,
  varsupsetneqq,
  vartheta,
  vartriangleleft,
  vartriangleright,
  vBar,
  Vbar,
  vBarv,
  Vcy,
  vcy,
  vdash,
  vDash,
  Vdash,
  VDash,
  Vdashl,
  veebar,
  vee,
  Vee,
  veeeq,
  vellip,
  verbar,
  Verbar,
  vert,
  Vert,
  VerticalBar,
  VerticalLine,
  VerticalSeparator,
  VerticalTilde,
  VeryThinSpace,
  Vfr,
  vfr,
  vltri,
  vnsub,
  vnsup,
  Vopf,
  vopf,
  vprop,
  vrtri,
  Vscr,
  vscr,
  vsubnE,
  vsubne,
  vsupnE,
  vsupne,
  Vvdash,
  vzigzag,
  Wcirc,
  wcirc,
  wedbar,
  wedge,
  Wedge,
  wedgeq,
  weierp,
  Wfr,
  wfr,
  Wopf,
  wopf,
  wp,
  wr,
  wreath,
  Wscr,
  wscr,
  xcap,
  xcirc,
  xcup,
  xdtri,
  Xfr,
  xfr,
  xharr,
  xhArr,
  Xi,
  xi,
  xlarr,
  xlArr,
  xmap,
  xnis,
  xodot,
  Xopf,
  xopf,
  xoplus,
  xotime,
  xrarr,
  xrArr,
  Xscr,
  xscr,
  xsqcup,
  xuplus,
  xutri,
  xvee,
  xwedge,
  Yacute: Yacute$1,
  yacute: yacute$1,
  YAcy,
  yacy,
  Ycirc,
  ycirc,
  Ycy,
  ycy,
  yen: yen$1,
  Yfr,
  yfr,
  YIcy,
  yicy,
  Yopf,
  yopf,
  Yscr,
  yscr,
  YUcy,
  yucy,
  yuml: yuml$1,
  Yuml,
  Zacute,
  zacute,
  Zcaron,
  zcaron,
  Zcy,
  zcy,
  Zdot,
  zdot,
  zeetrf,
  ZeroWidthSpace,
  Zeta,
  zeta,
  zfr,
  Zfr,
  ZHcy,
  zhcy,
  zigrarr,
  zopf,
  Zopf,
  Zscr,
  zscr,
  zwj,
  zwnj
};
const Aacute = "Á";
const aacute = "á";
const Acirc = "Â";
const acirc = "â";
const acute = "´";
const AElig = "Æ";
const aelig = "æ";
const Agrave = "À";
const agrave = "à";
const amp$1 = "&";
const AMP = "&";
const Aring = "Å";
const aring = "å";
const Atilde = "Ã";
const atilde = "ã";
const Auml = "Ä";
const auml = "ä";
const brvbar = "¦";
const Ccedil = "Ç";
const ccedil = "ç";
const cedil = "¸";
const cent = "¢";
const copy = "©";
const COPY = "©";
const curren = "¤";
const deg = "°";
const divide = "÷";
const Eacute = "É";
const eacute = "é";
const Ecirc = "Ê";
const ecirc = "ê";
const Egrave = "È";
const egrave = "è";
const ETH = "Ð";
const eth = "ð";
const Euml = "Ë";
const euml = "ë";
const frac12 = "½";
const frac14 = "¼";
const frac34 = "¾";
const gt$1 = ">";
const GT = ">";
const Iacute = "Í";
const iacute = "í";
const Icirc = "Î";
const icirc = "î";
const iexcl = "¡";
const Igrave = "Ì";
const igrave = "ì";
const iquest = "¿";
const Iuml = "Ï";
const iuml = "ï";
const laquo = "«";
const lt$1 = "<";
const LT = "<";
const macr = "¯";
const micro = "µ";
const middot = "·";
const nbsp = " ";
const not = "¬";
const Ntilde = "Ñ";
const ntilde = "ñ";
const Oacute = "Ó";
const oacute = "ó";
const Ocirc = "Ô";
const ocirc = "ô";
const Ograve = "Ò";
const ograve = "ò";
const ordf = "ª";
const ordm = "º";
const Oslash = "Ø";
const oslash = "ø";
const Otilde = "Õ";
const otilde = "õ";
const Ouml = "Ö";
const ouml = "ö";
const para = "¶";
const plusmn = "±";
const pound = "£";
const quot$1 = '"';
const QUOT = '"';
const raquo = "»";
const reg = "®";
const REG = "®";
const sect = "§";
const shy = "­";
const sup1 = "¹";
const sup2 = "²";
const sup3 = "³";
const szlig = "ß";
const THORN = "Þ";
const thorn = "þ";
const times = "×";
const Uacute = "Ú";
const uacute = "ú";
const Ucirc = "Û";
const ucirc = "û";
const Ugrave = "Ù";
const ugrave = "ù";
const uml = "¨";
const Uuml = "Ü";
const uuml = "ü";
const Yacute = "Ý";
const yacute = "ý";
const yen = "¥";
const yuml = "ÿ";
const require$$1$2 = {
  Aacute,
  aacute,
  Acirc,
  acirc,
  acute,
  AElig,
  aelig,
  Agrave,
  agrave,
  amp: amp$1,
  AMP,
  Aring,
  aring,
  Atilde,
  atilde,
  Auml,
  auml,
  brvbar,
  Ccedil,
  ccedil,
  cedil,
  cent,
  copy,
  COPY,
  curren,
  deg,
  divide,
  Eacute,
  eacute,
  Ecirc,
  ecirc,
  Egrave,
  egrave,
  ETH,
  eth,
  Euml,
  euml,
  frac12,
  frac14,
  frac34,
  gt: gt$1,
  GT,
  Iacute,
  iacute,
  Icirc,
  icirc,
  iexcl,
  Igrave,
  igrave,
  iquest,
  Iuml,
  iuml,
  laquo,
  lt: lt$1,
  LT,
  macr,
  micro,
  middot,
  nbsp,
  not,
  Ntilde,
  ntilde,
  Oacute,
  oacute,
  Ocirc,
  ocirc,
  Ograve,
  ograve,
  ordf,
  ordm,
  Oslash,
  oslash,
  Otilde,
  otilde,
  Ouml,
  ouml,
  para,
  plusmn,
  pound,
  quot: quot$1,
  QUOT,
  raquo,
  reg,
  REG,
  sect,
  shy,
  sup1,
  sup2,
  sup3,
  szlig,
  THORN,
  thorn,
  times,
  Uacute,
  uacute,
  Ucirc,
  ucirc,
  Ugrave,
  ugrave,
  uml,
  Uuml,
  uuml,
  Yacute,
  yacute,
  yen,
  yuml
};
const amp = "&";
const apos = "'";
const gt = ">";
const lt = "<";
const quot = '"';
const require$$2 = {
  amp,
  apos,
  gt,
  lt,
  quot
};
var Tokenizer_1 = Tokenizer$8;
var decodeCodePoint$1 = decode_codepoint;
var entityMap$1 = require$$0;
var legacyMap$1 = require$$1$2;
var xmlMap$1 = require$$2;
var i = 0;
var TEXT = i++;
var BEFORE_TAG_NAME = i++;
var IN_TAG_NAME = i++;
var IN_SELF_CLOSING_TAG = i++;
var BEFORE_CLOSING_TAG_NAME = i++;
var IN_CLOSING_TAG_NAME = i++;
var AFTER_CLOSING_TAG_NAME = i++;
var BEFORE_ATTRIBUTE_NAME = i++;
var IN_ATTRIBUTE_NAME = i++;
var AFTER_ATTRIBUTE_NAME = i++;
var BEFORE_ATTRIBUTE_VALUE = i++;
var IN_ATTRIBUTE_VALUE_DQ = i++;
var IN_ATTRIBUTE_VALUE_SQ = i++;
var IN_ATTRIBUTE_VALUE_NQ = i++;
var BEFORE_DECLARATION = i++;
var IN_DECLARATION = i++;
var IN_PROCESSING_INSTRUCTION = i++;
var BEFORE_COMMENT = i++;
var IN_COMMENT = i++;
var AFTER_COMMENT_1 = i++;
var AFTER_COMMENT_2 = i++;
var BEFORE_CDATA_1 = i++;
var BEFORE_CDATA_2 = i++;
var BEFORE_CDATA_3 = i++;
var BEFORE_CDATA_4 = i++;
var BEFORE_CDATA_5 = i++;
var BEFORE_CDATA_6 = i++;
var IN_CDATA = i++;
var AFTER_CDATA_1 = i++;
var AFTER_CDATA_2 = i++;
var BEFORE_SPECIAL = i++;
var BEFORE_SPECIAL_END = i++;
var BEFORE_SCRIPT_1 = i++;
var BEFORE_SCRIPT_2 = i++;
var BEFORE_SCRIPT_3 = i++;
var BEFORE_SCRIPT_4 = i++;
var BEFORE_SCRIPT_5 = i++;
var AFTER_SCRIPT_1 = i++;
var AFTER_SCRIPT_2 = i++;
var AFTER_SCRIPT_3 = i++;
var AFTER_SCRIPT_4 = i++;
var AFTER_SCRIPT_5 = i++;
var BEFORE_STYLE_1 = i++;
var BEFORE_STYLE_2 = i++;
var BEFORE_STYLE_3 = i++;
var BEFORE_STYLE_4 = i++;
var AFTER_STYLE_1 = i++;
var AFTER_STYLE_2 = i++;
var AFTER_STYLE_3 = i++;
var AFTER_STYLE_4 = i++;
var BEFORE_ENTITY = i++;
var BEFORE_NUMERIC_ENTITY = i++;
var IN_NAMED_ENTITY = i++;
var IN_NUMERIC_ENTITY = i++;
var IN_HEX_ENTITY = i++;
var j = 0;
var SPECIAL_NONE = j++;
var SPECIAL_SCRIPT = j++;
var SPECIAL_STYLE = j++;
function whitespace(c) {
  return c === " " || c === "\n" || c === "	" || c === "\f" || c === "\r";
}
function ifElseState(upper, SUCCESS, FAILURE) {
  var lower = upper.toLowerCase();
  if (upper === lower) {
    return function(c) {
      if (c === lower) {
        this._state = SUCCESS;
      } else {
        this._state = FAILURE;
        this._index--;
      }
    };
  } else {
    return function(c) {
      if (c === lower || c === upper) {
        this._state = SUCCESS;
      } else {
        this._state = FAILURE;
        this._index--;
      }
    };
  }
}
function consumeSpecialNameChar(upper, NEXT_STATE) {
  var lower = upper.toLowerCase();
  return function(c) {
    if (c === lower || c === upper) {
      this._state = NEXT_STATE;
    } else {
      this._state = IN_TAG_NAME;
      this._index--;
    }
  };
}
function Tokenizer$8(options2, cbs) {
  this._state = TEXT;
  this._buffer = "";
  this._sectionStart = 0;
  this._index = 0;
  this._bufferOffset = 0;
  this._baseState = TEXT;
  this._special = SPECIAL_NONE;
  this._cbs = cbs;
  this._running = true;
  this._ended = false;
  this._xmlMode = !!(options2 && options2.xmlMode);
  this._decodeEntities = !!(options2 && options2.decodeEntities);
}
Tokenizer$8.prototype._stateText = function(c) {
  if (c === "<") {
    if (this._index > this._sectionStart) {
      this._cbs.ontext(this._getSection());
    }
    this._state = BEFORE_TAG_NAME;
    this._sectionStart = this._index;
  } else if (this._decodeEntities && this._special === SPECIAL_NONE && c === "&") {
    if (this._index > this._sectionStart) {
      this._cbs.ontext(this._getSection());
    }
    this._baseState = TEXT;
    this._state = BEFORE_ENTITY;
    this._sectionStart = this._index;
  }
};
Tokenizer$8.prototype._stateBeforeTagName = function(c) {
  if (c === "/") {
    this._state = BEFORE_CLOSING_TAG_NAME;
  } else if (c === "<") {
    this._cbs.ontext(this._getSection());
    this._sectionStart = this._index;
  } else if (c === ">" || this._special !== SPECIAL_NONE || whitespace(c)) {
    this._state = TEXT;
  } else if (c === "!") {
    this._state = BEFORE_DECLARATION;
    this._sectionStart = this._index + 1;
  } else if (c === "?") {
    this._state = IN_PROCESSING_INSTRUCTION;
    this._sectionStart = this._index + 1;
  } else {
    this._state = !this._xmlMode && (c === "s" || c === "S") ? BEFORE_SPECIAL : IN_TAG_NAME;
    this._sectionStart = this._index;
  }
};
Tokenizer$8.prototype._stateInTagName = function(c) {
  if (c === "/" || c === ">" || whitespace(c)) {
    this._emitToken("onopentagname");
    this._state = BEFORE_ATTRIBUTE_NAME;
    this._index--;
  }
};
Tokenizer$8.prototype._stateBeforeCloseingTagName = function(c) {
  if (whitespace(c))
    ;
  else if (c === ">") {
    this._state = TEXT;
  } else if (this._special !== SPECIAL_NONE) {
    if (c === "s" || c === "S") {
      this._state = BEFORE_SPECIAL_END;
    } else {
      this._state = TEXT;
      this._index--;
    }
  } else {
    this._state = IN_CLOSING_TAG_NAME;
    this._sectionStart = this._index;
  }
};
Tokenizer$8.prototype._stateInCloseingTagName = function(c) {
  if (c === ">" || whitespace(c)) {
    this._emitToken("onclosetag");
    this._state = AFTER_CLOSING_TAG_NAME;
    this._index--;
  }
};
Tokenizer$8.prototype._stateAfterCloseingTagName = function(c) {
  if (c === ">") {
    this._state = TEXT;
    this._sectionStart = this._index + 1;
  }
};
Tokenizer$8.prototype._stateBeforeAttributeName = function(c) {
  if (c === ">") {
    this._cbs.onopentagend();
    this._state = TEXT;
    this._sectionStart = this._index + 1;
  } else if (c === "/") {
    this._state = IN_SELF_CLOSING_TAG;
  } else if (!whitespace(c)) {
    this._state = IN_ATTRIBUTE_NAME;
    this._sectionStart = this._index;
  }
};
Tokenizer$8.prototype._stateInSelfClosingTag = function(c) {
  if (c === ">") {
    this._cbs.onselfclosingtag();
    this._state = TEXT;
    this._sectionStart = this._index + 1;
  } else if (!whitespace(c)) {
    this._state = BEFORE_ATTRIBUTE_NAME;
    this._index--;
  }
};
Tokenizer$8.prototype._stateInAttributeName = function(c) {
  if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
    this._cbs.onattribname(this._getSection());
    this._sectionStart = -1;
    this._state = AFTER_ATTRIBUTE_NAME;
    this._index--;
  }
};
Tokenizer$8.prototype._stateAfterAttributeName = function(c) {
  if (c === "=") {
    this._state = BEFORE_ATTRIBUTE_VALUE;
  } else if (c === "/" || c === ">") {
    this._cbs.onattribend();
    this._state = BEFORE_ATTRIBUTE_NAME;
    this._index--;
  } else if (!whitespace(c)) {
    this._cbs.onattribend();
    this._state = IN_ATTRIBUTE_NAME;
    this._sectionStart = this._index;
  }
};
Tokenizer$8.prototype._stateBeforeAttributeValue = function(c) {
  if (c === '"') {
    this._state = IN_ATTRIBUTE_VALUE_DQ;
    this._sectionStart = this._index + 1;
  } else if (c === "'") {
    this._state = IN_ATTRIBUTE_VALUE_SQ;
    this._sectionStart = this._index + 1;
  } else if (!whitespace(c)) {
    this._state = IN_ATTRIBUTE_VALUE_NQ;
    this._sectionStart = this._index;
    this._index--;
  }
};
Tokenizer$8.prototype._stateInAttributeValueDoubleQuotes = function(c) {
  if (c === '"') {
    this._emitToken("onattribdata");
    this._cbs.onattribend();
    this._state = BEFORE_ATTRIBUTE_NAME;
  } else if (this._decodeEntities && c === "&") {
    this._emitToken("onattribdata");
    this._baseState = this._state;
    this._state = BEFORE_ENTITY;
    this._sectionStart = this._index;
  }
};
Tokenizer$8.prototype._stateInAttributeValueSingleQuotes = function(c) {
  if (c === "'") {
    this._emitToken("onattribdata");
    this._cbs.onattribend();
    this._state = BEFORE_ATTRIBUTE_NAME;
  } else if (this._decodeEntities && c === "&") {
    this._emitToken("onattribdata");
    this._baseState = this._state;
    this._state = BEFORE_ENTITY;
    this._sectionStart = this._index;
  }
};
Tokenizer$8.prototype._stateInAttributeValueNoQuotes = function(c) {
  if (whitespace(c) || c === ">") {
    this._emitToken("onattribdata");
    this._cbs.onattribend();
    this._state = BEFORE_ATTRIBUTE_NAME;
    this._index--;
  } else if (this._decodeEntities && c === "&") {
    this._emitToken("onattribdata");
    this._baseState = this._state;
    this._state = BEFORE_ENTITY;
    this._sectionStart = this._index;
  }
};
Tokenizer$8.prototype._stateBeforeDeclaration = function(c) {
  this._state = c === "[" ? BEFORE_CDATA_1 : c === "-" ? BEFORE_COMMENT : IN_DECLARATION;
};
Tokenizer$8.prototype._stateInDeclaration = function(c) {
  if (c === ">") {
    this._cbs.ondeclaration(this._getSection());
    this._state = TEXT;
    this._sectionStart = this._index + 1;
  }
};
Tokenizer$8.prototype._stateInProcessingInstruction = function(c) {
  if (c === ">") {
    this._cbs.onprocessinginstruction(this._getSection());
    this._state = TEXT;
    this._sectionStart = this._index + 1;
  }
};
Tokenizer$8.prototype._stateBeforeComment = function(c) {
  if (c === "-") {
    this._state = IN_COMMENT;
    this._sectionStart = this._index + 1;
  } else {
    this._state = IN_DECLARATION;
  }
};
Tokenizer$8.prototype._stateInComment = function(c) {
  if (c === "-")
    this._state = AFTER_COMMENT_1;
};
Tokenizer$8.prototype._stateAfterComment1 = function(c) {
  if (c === "-") {
    this._state = AFTER_COMMENT_2;
  } else {
    this._state = IN_COMMENT;
  }
};
Tokenizer$8.prototype._stateAfterComment2 = function(c) {
  if (c === ">") {
    this._cbs.oncomment(
      this._buffer.substring(this._sectionStart, this._index - 2)
    );
    this._state = TEXT;
    this._sectionStart = this._index + 1;
  } else if (c !== "-") {
    this._state = IN_COMMENT;
  }
};
Tokenizer$8.prototype._stateBeforeCdata1 = ifElseState(
  "C",
  BEFORE_CDATA_2,
  IN_DECLARATION
);
Tokenizer$8.prototype._stateBeforeCdata2 = ifElseState(
  "D",
  BEFORE_CDATA_3,
  IN_DECLARATION
);
Tokenizer$8.prototype._stateBeforeCdata3 = ifElseState(
  "A",
  BEFORE_CDATA_4,
  IN_DECLARATION
);
Tokenizer$8.prototype._stateBeforeCdata4 = ifElseState(
  "T",
  BEFORE_CDATA_5,
  IN_DECLARATION
);
Tokenizer$8.prototype._stateBeforeCdata5 = ifElseState(
  "A",
  BEFORE_CDATA_6,
  IN_DECLARATION
);
Tokenizer$8.prototype._stateBeforeCdata6 = function(c) {
  if (c === "[") {
    this._state = IN_CDATA;
    this._sectionStart = this._index + 1;
  } else {
    this._state = IN_DECLARATION;
    this._index--;
  }
};
Tokenizer$8.prototype._stateInCdata = function(c) {
  if (c === "]")
    this._state = AFTER_CDATA_1;
};
Tokenizer$8.prototype._stateAfterCdata1 = function(c) {
  if (c === "]")
    this._state = AFTER_CDATA_2;
  else
    this._state = IN_CDATA;
};
Tokenizer$8.prototype._stateAfterCdata2 = function(c) {
  if (c === ">") {
    this._cbs.oncdata(
      this._buffer.substring(this._sectionStart, this._index - 2)
    );
    this._state = TEXT;
    this._sectionStart = this._index + 1;
  } else if (c !== "]") {
    this._state = IN_CDATA;
  }
};
Tokenizer$8.prototype._stateBeforeSpecial = function(c) {
  if (c === "c" || c === "C") {
    this._state = BEFORE_SCRIPT_1;
  } else if (c === "t" || c === "T") {
    this._state = BEFORE_STYLE_1;
  } else {
    this._state = IN_TAG_NAME;
    this._index--;
  }
};
Tokenizer$8.prototype._stateBeforeSpecialEnd = function(c) {
  if (this._special === SPECIAL_SCRIPT && (c === "c" || c === "C")) {
    this._state = AFTER_SCRIPT_1;
  } else if (this._special === SPECIAL_STYLE && (c === "t" || c === "T")) {
    this._state = AFTER_STYLE_1;
  } else
    this._state = TEXT;
};
Tokenizer$8.prototype._stateBeforeScript1 = consumeSpecialNameChar(
  "R",
  BEFORE_SCRIPT_2
);
Tokenizer$8.prototype._stateBeforeScript2 = consumeSpecialNameChar(
  "I",
  BEFORE_SCRIPT_3
);
Tokenizer$8.prototype._stateBeforeScript3 = consumeSpecialNameChar(
  "P",
  BEFORE_SCRIPT_4
);
Tokenizer$8.prototype._stateBeforeScript4 = consumeSpecialNameChar(
  "T",
  BEFORE_SCRIPT_5
);
Tokenizer$8.prototype._stateBeforeScript5 = function(c) {
  if (c === "/" || c === ">" || whitespace(c)) {
    this._special = SPECIAL_SCRIPT;
  }
  this._state = IN_TAG_NAME;
  this._index--;
};
Tokenizer$8.prototype._stateAfterScript1 = ifElseState("R", AFTER_SCRIPT_2, TEXT);
Tokenizer$8.prototype._stateAfterScript2 = ifElseState("I", AFTER_SCRIPT_3, TEXT);
Tokenizer$8.prototype._stateAfterScript3 = ifElseState("P", AFTER_SCRIPT_4, TEXT);
Tokenizer$8.prototype._stateAfterScript4 = ifElseState("T", AFTER_SCRIPT_5, TEXT);
Tokenizer$8.prototype._stateAfterScript5 = function(c) {
  if (c === ">" || whitespace(c)) {
    this._special = SPECIAL_NONE;
    this._state = IN_CLOSING_TAG_NAME;
    this._sectionStart = this._index - 6;
    this._index--;
  } else
    this._state = TEXT;
};
Tokenizer$8.prototype._stateBeforeStyle1 = consumeSpecialNameChar(
  "Y",
  BEFORE_STYLE_2
);
Tokenizer$8.prototype._stateBeforeStyle2 = consumeSpecialNameChar(
  "L",
  BEFORE_STYLE_3
);
Tokenizer$8.prototype._stateBeforeStyle3 = consumeSpecialNameChar(
  "E",
  BEFORE_STYLE_4
);
Tokenizer$8.prototype._stateBeforeStyle4 = function(c) {
  if (c === "/" || c === ">" || whitespace(c)) {
    this._special = SPECIAL_STYLE;
  }
  this._state = IN_TAG_NAME;
  this._index--;
};
Tokenizer$8.prototype._stateAfterStyle1 = ifElseState("Y", AFTER_STYLE_2, TEXT);
Tokenizer$8.prototype._stateAfterStyle2 = ifElseState("L", AFTER_STYLE_3, TEXT);
Tokenizer$8.prototype._stateAfterStyle3 = ifElseState("E", AFTER_STYLE_4, TEXT);
Tokenizer$8.prototype._stateAfterStyle4 = function(c) {
  if (c === ">" || whitespace(c)) {
    this._special = SPECIAL_NONE;
    this._state = IN_CLOSING_TAG_NAME;
    this._sectionStart = this._index - 5;
    this._index--;
  } else
    this._state = TEXT;
};
Tokenizer$8.prototype._stateBeforeEntity = ifElseState(
  "#",
  BEFORE_NUMERIC_ENTITY,
  IN_NAMED_ENTITY
);
Tokenizer$8.prototype._stateBeforeNumericEntity = ifElseState(
  "X",
  IN_HEX_ENTITY,
  IN_NUMERIC_ENTITY
);
Tokenizer$8.prototype._parseNamedEntityStrict = function() {
  if (this._sectionStart + 1 < this._index) {
    var entity = this._buffer.substring(
      this._sectionStart + 1,
      this._index
    ), map2 = this._xmlMode ? xmlMap$1 : entityMap$1;
    if (map2.hasOwnProperty(entity)) {
      this._emitPartial(map2[entity]);
      this._sectionStart = this._index + 1;
    }
  }
};
Tokenizer$8.prototype._parseLegacyEntity = function() {
  var start = this._sectionStart + 1, limit = this._index - start;
  if (limit > 6)
    limit = 6;
  while (limit >= 2) {
    var entity = this._buffer.substr(start, limit);
    if (legacyMap$1.hasOwnProperty(entity)) {
      this._emitPartial(legacyMap$1[entity]);
      this._sectionStart += limit + 1;
      return;
    } else {
      limit--;
    }
  }
};
Tokenizer$8.prototype._stateInNamedEntity = function(c) {
  if (c === ";") {
    this._parseNamedEntityStrict();
    if (this._sectionStart + 1 < this._index && !this._xmlMode) {
      this._parseLegacyEntity();
    }
    this._state = this._baseState;
  } else if ((c < "a" || c > "z") && (c < "A" || c > "Z") && (c < "0" || c > "9")) {
    if (this._xmlMode)
      ;
    else if (this._sectionStart + 1 === this._index)
      ;
    else if (this._baseState !== TEXT) {
      if (c !== "=") {
        this._parseNamedEntityStrict();
      }
    } else {
      this._parseLegacyEntity();
    }
    this._state = this._baseState;
    this._index--;
  }
};
Tokenizer$8.prototype._decodeNumericEntity = function(offset, base) {
  var sectionStart = this._sectionStart + offset;
  if (sectionStart !== this._index) {
    var entity = this._buffer.substring(sectionStart, this._index);
    var parsed = parseInt(entity, base);
    this._emitPartial(decodeCodePoint$1(parsed));
    this._sectionStart = this._index;
  } else {
    this._sectionStart--;
  }
  this._state = this._baseState;
};
Tokenizer$8.prototype._stateInNumericEntity = function(c) {
  if (c === ";") {
    this._decodeNumericEntity(2, 10);
    this._sectionStart++;
  } else if (c < "0" || c > "9") {
    if (!this._xmlMode) {
      this._decodeNumericEntity(2, 10);
    } else {
      this._state = this._baseState;
    }
    this._index--;
  }
};
Tokenizer$8.prototype._stateInHexEntity = function(c) {
  if (c === ";") {
    this._decodeNumericEntity(3, 16);
    this._sectionStart++;
  } else if ((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")) {
    if (!this._xmlMode) {
      this._decodeNumericEntity(3, 16);
    } else {
      this._state = this._baseState;
    }
    this._index--;
  }
};
Tokenizer$8.prototype._cleanup = function() {
  if (this._sectionStart < 0) {
    this._buffer = "";
    this._bufferOffset += this._index;
    this._index = 0;
  } else if (this._running) {
    if (this._state === TEXT) {
      if (this._sectionStart !== this._index) {
        this._cbs.ontext(this._buffer.substr(this._sectionStart));
      }
      this._buffer = "";
      this._bufferOffset += this._index;
      this._index = 0;
    } else if (this._sectionStart === this._index) {
      this._buffer = "";
      this._bufferOffset += this._index;
      this._index = 0;
    } else {
      this._buffer = this._buffer.substr(this._sectionStart);
      this._index -= this._sectionStart;
      this._bufferOffset += this._sectionStart;
    }
    this._sectionStart = 0;
  }
};
Tokenizer$8.prototype.write = function(chunk) {
  if (this._ended)
    this._cbs.onerror(Error(".write() after done!"));
  this._buffer += chunk;
  this._parse();
};
Tokenizer$8.prototype._parse = function() {
  while (this._index < this._buffer.length && this._running) {
    var c = this._buffer.charAt(this._index);
    if (this._state === TEXT) {
      this._stateText(c);
    } else if (this._state === BEFORE_TAG_NAME) {
      this._stateBeforeTagName(c);
    } else if (this._state === IN_TAG_NAME) {
      this._stateInTagName(c);
    } else if (this._state === BEFORE_CLOSING_TAG_NAME) {
      this._stateBeforeCloseingTagName(c);
    } else if (this._state === IN_CLOSING_TAG_NAME) {
      this._stateInCloseingTagName(c);
    } else if (this._state === AFTER_CLOSING_TAG_NAME) {
      this._stateAfterCloseingTagName(c);
    } else if (this._state === IN_SELF_CLOSING_TAG) {
      this._stateInSelfClosingTag(c);
    } else if (this._state === BEFORE_ATTRIBUTE_NAME) {
      this._stateBeforeAttributeName(c);
    } else if (this._state === IN_ATTRIBUTE_NAME) {
      this._stateInAttributeName(c);
    } else if (this._state === AFTER_ATTRIBUTE_NAME) {
      this._stateAfterAttributeName(c);
    } else if (this._state === BEFORE_ATTRIBUTE_VALUE) {
      this._stateBeforeAttributeValue(c);
    } else if (this._state === IN_ATTRIBUTE_VALUE_DQ) {
      this._stateInAttributeValueDoubleQuotes(c);
    } else if (this._state === IN_ATTRIBUTE_VALUE_SQ) {
      this._stateInAttributeValueSingleQuotes(c);
    } else if (this._state === IN_ATTRIBUTE_VALUE_NQ) {
      this._stateInAttributeValueNoQuotes(c);
    } else if (this._state === BEFORE_DECLARATION) {
      this._stateBeforeDeclaration(c);
    } else if (this._state === IN_DECLARATION) {
      this._stateInDeclaration(c);
    } else if (this._state === IN_PROCESSING_INSTRUCTION) {
      this._stateInProcessingInstruction(c);
    } else if (this._state === BEFORE_COMMENT) {
      this._stateBeforeComment(c);
    } else if (this._state === IN_COMMENT) {
      this._stateInComment(c);
    } else if (this._state === AFTER_COMMENT_1) {
      this._stateAfterComment1(c);
    } else if (this._state === AFTER_COMMENT_2) {
      this._stateAfterComment2(c);
    } else if (this._state === BEFORE_CDATA_1) {
      this._stateBeforeCdata1(c);
    } else if (this._state === BEFORE_CDATA_2) {
      this._stateBeforeCdata2(c);
    } else if (this._state === BEFORE_CDATA_3) {
      this._stateBeforeCdata3(c);
    } else if (this._state === BEFORE_CDATA_4) {
      this._stateBeforeCdata4(c);
    } else if (this._state === BEFORE_CDATA_5) {
      this._stateBeforeCdata5(c);
    } else if (this._state === BEFORE_CDATA_6) {
      this._stateBeforeCdata6(c);
    } else if (this._state === IN_CDATA) {
      this._stateInCdata(c);
    } else if (this._state === AFTER_CDATA_1) {
      this._stateAfterCdata1(c);
    } else if (this._state === AFTER_CDATA_2) {
      this._stateAfterCdata2(c);
    } else if (this._state === BEFORE_SPECIAL) {
      this._stateBeforeSpecial(c);
    } else if (this._state === BEFORE_SPECIAL_END) {
      this._stateBeforeSpecialEnd(c);
    } else if (this._state === BEFORE_SCRIPT_1) {
      this._stateBeforeScript1(c);
    } else if (this._state === BEFORE_SCRIPT_2) {
      this._stateBeforeScript2(c);
    } else if (this._state === BEFORE_SCRIPT_3) {
      this._stateBeforeScript3(c);
    } else if (this._state === BEFORE_SCRIPT_4) {
      this._stateBeforeScript4(c);
    } else if (this._state === BEFORE_SCRIPT_5) {
      this._stateBeforeScript5(c);
    } else if (this._state === AFTER_SCRIPT_1) {
      this._stateAfterScript1(c);
    } else if (this._state === AFTER_SCRIPT_2) {
      this._stateAfterScript2(c);
    } else if (this._state === AFTER_SCRIPT_3) {
      this._stateAfterScript3(c);
    } else if (this._state === AFTER_SCRIPT_4) {
      this._stateAfterScript4(c);
    } else if (this._state === AFTER_SCRIPT_5) {
      this._stateAfterScript5(c);
    } else if (this._state === BEFORE_STYLE_1) {
      this._stateBeforeStyle1(c);
    } else if (this._state === BEFORE_STYLE_2) {
      this._stateBeforeStyle2(c);
    } else if (this._state === BEFORE_STYLE_3) {
      this._stateBeforeStyle3(c);
    } else if (this._state === BEFORE_STYLE_4) {
      this._stateBeforeStyle4(c);
    } else if (this._state === AFTER_STYLE_1) {
      this._stateAfterStyle1(c);
    } else if (this._state === AFTER_STYLE_2) {
      this._stateAfterStyle2(c);
    } else if (this._state === AFTER_STYLE_3) {
      this._stateAfterStyle3(c);
    } else if (this._state === AFTER_STYLE_4) {
      this._stateAfterStyle4(c);
    } else if (this._state === BEFORE_ENTITY) {
      this._stateBeforeEntity(c);
    } else if (this._state === BEFORE_NUMERIC_ENTITY) {
      this._stateBeforeNumericEntity(c);
    } else if (this._state === IN_NAMED_ENTITY) {
      this._stateInNamedEntity(c);
    } else if (this._state === IN_NUMERIC_ENTITY) {
      this._stateInNumericEntity(c);
    } else if (this._state === IN_HEX_ENTITY) {
      this._stateInHexEntity(c);
    } else {
      this._cbs.onerror(Error("unknown _state"), this._state);
    }
    this._index++;
  }
  this._cleanup();
};
Tokenizer$8.prototype.pause = function() {
  this._running = false;
};
Tokenizer$8.prototype.resume = function() {
  this._running = true;
  if (this._index < this._buffer.length) {
    this._parse();
  }
  if (this._ended) {
    this._finish();
  }
};
Tokenizer$8.prototype.end = function(chunk) {
  if (this._ended)
    this._cbs.onerror(Error(".end() after done!"));
  if (chunk)
    this.write(chunk);
  this._ended = true;
  if (this._running)
    this._finish();
};
Tokenizer$8.prototype._finish = function() {
  if (this._sectionStart < this._index) {
    this._handleTrailingData();
  }
  this._cbs.onend();
};
Tokenizer$8.prototype._handleTrailingData = function() {
  var data = this._buffer.substr(this._sectionStart);
  if (this._state === IN_CDATA || this._state === AFTER_CDATA_1 || this._state === AFTER_CDATA_2) {
    this._cbs.oncdata(data);
  } else if (this._state === IN_COMMENT || this._state === AFTER_COMMENT_1 || this._state === AFTER_COMMENT_2) {
    this._cbs.oncomment(data);
  } else if (this._state === IN_NAMED_ENTITY && !this._xmlMode) {
    this._parseLegacyEntity();
    if (this._sectionStart < this._index) {
      this._state = this._baseState;
      this._handleTrailingData();
    }
  } else if (this._state === IN_NUMERIC_ENTITY && !this._xmlMode) {
    this._decodeNumericEntity(2, 10);
    if (this._sectionStart < this._index) {
      this._state = this._baseState;
      this._handleTrailingData();
    }
  } else if (this._state === IN_HEX_ENTITY && !this._xmlMode) {
    this._decodeNumericEntity(3, 16);
    if (this._sectionStart < this._index) {
      this._state = this._baseState;
      this._handleTrailingData();
    }
  } else if (this._state !== IN_TAG_NAME && this._state !== BEFORE_ATTRIBUTE_NAME && this._state !== BEFORE_ATTRIBUTE_VALUE && this._state !== AFTER_ATTRIBUTE_NAME && this._state !== IN_ATTRIBUTE_NAME && this._state !== IN_ATTRIBUTE_VALUE_SQ && this._state !== IN_ATTRIBUTE_VALUE_DQ && this._state !== IN_ATTRIBUTE_VALUE_NQ && this._state !== IN_CLOSING_TAG_NAME) {
    this._cbs.ontext(data);
  }
};
Tokenizer$8.prototype.reset = function() {
  Tokenizer$8.call(
    this,
    { xmlMode: this._xmlMode, decodeEntities: this._decodeEntities },
    this._cbs
  );
};
Tokenizer$8.prototype.getAbsoluteIndex = function() {
  return this._bufferOffset + this._index;
};
Tokenizer$8.prototype._getSection = function() {
  return this._buffer.substring(this._sectionStart, this._index);
};
Tokenizer$8.prototype._emitToken = function(name2) {
  this._cbs[name2](this._getSection());
  this._sectionStart = -1;
};
Tokenizer$8.prototype._emitPartial = function(value) {
  if (this._baseState !== TEXT) {
    this._cbs.onattribdata(value);
  } else {
    this._cbs.ontext(value);
  }
};
var inherits_browserExports = {};
var inherits_browser = {
  get exports() {
    return inherits_browserExports;
  },
  set exports(v) {
    inherits_browserExports = v;
  }
};
if (typeof Object.create === "function") {
  inherits_browser.exports = function inherits2(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  inherits_browser.exports = function inherits2(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}
var Tokenizer$7 = Tokenizer_1;
var formTags = {
  input: true,
  option: true,
  optgroup: true,
  select: true,
  button: true,
  datalist: true,
  textarea: true
};
var openImpliesClose = {
  tr: { tr: true, th: true, td: true },
  th: { th: true },
  td: { thead: true, th: true, td: true },
  body: { head: true, link: true, script: true },
  li: { li: true },
  p: { p: true },
  h1: { p: true },
  h2: { p: true },
  h3: { p: true },
  h4: { p: true },
  h5: { p: true },
  h6: { p: true },
  select: formTags,
  input: formTags,
  output: formTags,
  button: formTags,
  datalist: formTags,
  textarea: formTags,
  option: { option: true },
  optgroup: { optgroup: true }
};
var voidElements = {
  __proto__: null,
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};
var foreignContextElements = {
  __proto__: null,
  math: true,
  svg: true
};
var htmlIntegrationElements = {
  __proto__: null,
  mi: true,
  mo: true,
  mn: true,
  ms: true,
  mtext: true,
  "annotation-xml": true,
  foreignObject: true,
  desc: true,
  title: true
};
var re_nameEnd = /\s|\//;
function Parser$3(cbs, options2) {
  this._options = options2 || {};
  this._cbs = cbs || {};
  this._tagname = "";
  this._attribname = "";
  this._attribvalue = "";
  this._attribs = null;
  this._stack = [];
  this._foreignContext = [];
  this.startIndex = 0;
  this.endIndex = null;
  this._lowerCaseTagNames = "lowerCaseTags" in this._options ? !!this._options.lowerCaseTags : !this._options.xmlMode;
  this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ? !!this._options.lowerCaseAttributeNames : !this._options.xmlMode;
  if (this._options.Tokenizer) {
    Tokenizer$7 = this._options.Tokenizer;
  }
  this._tokenizer = new Tokenizer$7(this._options, this);
  if (this._cbs.onparserinit)
    this._cbs.onparserinit(this);
}
inherits_browserExports(Parser$3, require$$2$1.EventEmitter);
Parser$3.prototype._updatePosition = function(initialOffset) {
  if (this.endIndex === null) {
    if (this._tokenizer._sectionStart <= initialOffset) {
      this.startIndex = 0;
    } else {
      this.startIndex = this._tokenizer._sectionStart - initialOffset;
    }
  } else
    this.startIndex = this.endIndex + 1;
  this.endIndex = this._tokenizer.getAbsoluteIndex();
};
Parser$3.prototype.ontext = function(data) {
  this._updatePosition(1);
  this.endIndex--;
  if (this._cbs.ontext)
    this._cbs.ontext(data);
};
Parser$3.prototype.onopentagname = function(name2) {
  if (this._lowerCaseTagNames) {
    name2 = name2.toLowerCase();
  }
  this._tagname = name2;
  if (!this._options.xmlMode && name2 in openImpliesClose) {
    for (var el2; (el2 = this._stack[this._stack.length - 1]) in openImpliesClose[name2]; this.onclosetag(el2))
      ;
  }
  if (this._options.xmlMode || !(name2 in voidElements)) {
    this._stack.push(name2);
    if (name2 in foreignContextElements)
      this._foreignContext.push(true);
    else if (name2 in htmlIntegrationElements)
      this._foreignContext.push(false);
  }
  if (this._cbs.onopentagname)
    this._cbs.onopentagname(name2);
  if (this._cbs.onopentag)
    this._attribs = {};
};
Parser$3.prototype.onopentagend = function() {
  this._updatePosition(1);
  if (this._attribs) {
    if (this._cbs.onopentag)
      this._cbs.onopentag(this._tagname, this._attribs);
    this._attribs = null;
  }
  if (!this._options.xmlMode && this._cbs.onclosetag && this._tagname in voidElements) {
    this._cbs.onclosetag(this._tagname);
  }
  this._tagname = "";
};
Parser$3.prototype.onclosetag = function(name2) {
  this._updatePosition(1);
  if (this._lowerCaseTagNames) {
    name2 = name2.toLowerCase();
  }
  if (name2 in foreignContextElements || name2 in htmlIntegrationElements) {
    this._foreignContext.pop();
  }
  if (this._stack.length && (!(name2 in voidElements) || this._options.xmlMode)) {
    var pos = this._stack.lastIndexOf(name2);
    if (pos !== -1) {
      if (this._cbs.onclosetag) {
        pos = this._stack.length - pos;
        while (pos--)
          this._cbs.onclosetag(this._stack.pop());
      } else
        this._stack.length = pos;
    } else if (name2 === "p" && !this._options.xmlMode) {
      this.onopentagname(name2);
      this._closeCurrentTag();
    }
  } else if (!this._options.xmlMode && (name2 === "br" || name2 === "p")) {
    this.onopentagname(name2);
    this._closeCurrentTag();
  }
};
Parser$3.prototype.onselfclosingtag = function() {
  if (this._options.xmlMode || this._options.recognizeSelfClosing || this._foreignContext[this._foreignContext.length - 1]) {
    this._closeCurrentTag();
  } else {
    this.onopentagend();
  }
};
Parser$3.prototype._closeCurrentTag = function() {
  var name2 = this._tagname;
  this.onopentagend();
  if (this._stack[this._stack.length - 1] === name2) {
    if (this._cbs.onclosetag) {
      this._cbs.onclosetag(name2);
    }
    this._stack.pop();
  }
};
Parser$3.prototype.onattribname = function(name2) {
  if (this._lowerCaseAttributeNames) {
    name2 = name2.toLowerCase();
  }
  this._attribname = name2;
};
Parser$3.prototype.onattribdata = function(value) {
  this._attribvalue += value;
};
Parser$3.prototype.onattribend = function() {
  if (this._cbs.onattribute)
    this._cbs.onattribute(this._attribname, this._attribvalue);
  if (this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)) {
    this._attribs[this._attribname] = this._attribvalue;
  }
  this._attribname = "";
  this._attribvalue = "";
};
Parser$3.prototype._getInstructionName = function(value) {
  var idx = value.search(re_nameEnd), name2 = idx < 0 ? value : value.substr(0, idx);
  if (this._lowerCaseTagNames) {
    name2 = name2.toLowerCase();
  }
  return name2;
};
Parser$3.prototype.ondeclaration = function(value) {
  if (this._cbs.onprocessinginstruction) {
    var name2 = this._getInstructionName(value);
    this._cbs.onprocessinginstruction("!" + name2, "!" + value);
  }
};
Parser$3.prototype.onprocessinginstruction = function(value) {
  if (this._cbs.onprocessinginstruction) {
    var name2 = this._getInstructionName(value);
    this._cbs.onprocessinginstruction("?" + name2, "?" + value);
  }
};
Parser$3.prototype.oncomment = function(value) {
  this._updatePosition(4);
  if (this._cbs.oncomment)
    this._cbs.oncomment(value);
  if (this._cbs.oncommentend)
    this._cbs.oncommentend();
};
Parser$3.prototype.oncdata = function(value) {
  this._updatePosition(1);
  if (this._options.xmlMode || this._options.recognizeCDATA) {
    if (this._cbs.oncdatastart)
      this._cbs.oncdatastart();
    if (this._cbs.ontext)
      this._cbs.ontext(value);
    if (this._cbs.oncdataend)
      this._cbs.oncdataend();
  } else {
    this.oncomment("[CDATA[" + value + "]]");
  }
};
Parser$3.prototype.onerror = function(err) {
  if (this._cbs.onerror)
    this._cbs.onerror(err);
};
Parser$3.prototype.onend = function() {
  if (this._cbs.onclosetag) {
    for (var i2 = this._stack.length; i2 > 0; this._cbs.onclosetag(this._stack[--i2]))
      ;
  }
  if (this._cbs.onend)
    this._cbs.onend();
};
Parser$3.prototype.reset = function() {
  if (this._cbs.onreset)
    this._cbs.onreset();
  this._tokenizer.reset();
  this._tagname = "";
  this._attribname = "";
  this._attribs = null;
  this._stack = [];
  if (this._cbs.onparserinit)
    this._cbs.onparserinit(this);
};
Parser$3.prototype.parseComplete = function(data) {
  this.reset();
  this.end(data);
};
Parser$3.prototype.write = function(chunk) {
  this._tokenizer.write(chunk);
};
Parser$3.prototype.end = function(chunk) {
  this._tokenizer.end(chunk);
};
Parser$3.prototype.pause = function() {
  this._tokenizer.pause();
};
Parser$3.prototype.resume = function() {
  this._tokenizer.resume();
};
Parser$3.prototype.parseChunk = Parser$3.prototype.write;
Parser$3.prototype.done = Parser$3.prototype.end;
var Parser_1 = Parser$3;
var domelementtype = {
  Text: "text",
  //Text
  Directive: "directive",
  //<? ... ?>
  Comment: "comment",
  //<!-- ... -->
  Script: "script",
  //<script> tags
  Style: "style",
  //<style> tags
  Tag: "tag",
  //Any tag
  CDATA: "cdata",
  //<![CDATA[ ... ]]>
  Doctype: "doctype",
  isTag: function(elem) {
    return elem.type === "tag" || elem.type === "script" || elem.type === "style";
  }
};
var nodeExports = {};
var node = {
  get exports() {
    return nodeExports;
  },
  set exports(v) {
    nodeExports = v;
  }
};
node.exports = {
  get firstChild() {
    var children = this.children;
    return children && children[0] || null;
  },
  get lastChild() {
    var children = this.children;
    return children && children[children.length - 1] || null;
  },
  get nodeType() {
    return nodeTypes$1[this.type] || nodeTypes$1.element;
  }
};
var domLvl1$1 = {
  tagName: "name",
  childNodes: "children",
  parentNode: "parent",
  previousSibling: "prev",
  nextSibling: "next",
  nodeValue: "data"
};
var nodeTypes$1 = {
  element: 1,
  text: 3,
  cdata: 4,
  comment: 8
};
Object.keys(domLvl1$1).forEach(function(key) {
});
var elementExports = {};
var element = {
  get exports() {
    return elementExports;
  },
  set exports(v) {
    elementExports = v;
  }
};
var NodePrototype$1 = nodeExports;
var ElementPrototype$1 = element.exports = Object.create(NodePrototype$1);
var domLvl1 = {
  tagName: "name"
};
Object.keys(domLvl1).forEach(function(key) {
  var shorthand = domLvl1[key];
  Object.defineProperty(ElementPrototype$1, key, {
    get: function() {
      return this[shorthand] || null;
    },
    set: function(val) {
      this[shorthand] = val;
      return val;
    }
  });
});
var ElementType$3 = domelementtype;
var re_whitespace = /\s+/g;
var NodePrototype = nodeExports;
var ElementPrototype = elementExports;
function DomHandler(callback, options2, elementCB) {
  if (typeof callback === "object") {
    elementCB = options2;
    options2 = callback;
    callback = null;
  } else if (typeof options2 === "function") {
    elementCB = options2;
    options2 = defaultOpts;
  }
  this._callback = callback;
  this._options = options2 || defaultOpts;
  this._elementCB = elementCB;
  this.dom = [];
  this._done = false;
  this._tagStack = [];
  this._parser = this._parser || null;
}
var defaultOpts = {
  normalizeWhitespace: false,
  //Replace all whitespace with single spaces
  withStartIndices: false,
  //Add startIndex properties to nodes
  withEndIndices: false
  //Add endIndex properties to nodes
};
DomHandler.prototype.onparserinit = function(parser2) {
  this._parser = parser2;
};
DomHandler.prototype.onreset = function() {
  DomHandler.call(this, this._callback, this._options, this._elementCB);
};
DomHandler.prototype.onend = function() {
  if (this._done)
    return;
  this._done = true;
  this._parser = null;
  this._handleCallback(null);
};
DomHandler.prototype._handleCallback = DomHandler.prototype.onerror = function(error) {
  if (typeof this._callback === "function") {
    this._callback(error, this.dom);
  } else {
    if (error)
      throw error;
  }
};
DomHandler.prototype.onclosetag = function() {
  var elem = this._tagStack.pop();
  if (this._options.withEndIndices && elem) {
    elem.endIndex = this._parser.endIndex;
  }
  if (this._elementCB)
    this._elementCB(elem);
};
DomHandler.prototype._createDomElement = function(properties) {
  if (!this._options.withDomLvl1)
    return properties;
  var element2;
  if (properties.type === "tag") {
    element2 = Object.create(ElementPrototype);
  } else {
    element2 = Object.create(NodePrototype);
  }
  for (var key in properties) {
    if (properties.hasOwnProperty(key)) {
      element2[key] = properties[key];
    }
  }
  return element2;
};
DomHandler.prototype._addDomElement = function(element2) {
  var parent2 = this._tagStack[this._tagStack.length - 1];
  var siblings = parent2 ? parent2.children : this.dom;
  var previousSibling = siblings[siblings.length - 1];
  element2.next = null;
  if (this._options.withStartIndices) {
    element2.startIndex = this._parser.startIndex;
  }
  if (this._options.withEndIndices) {
    element2.endIndex = this._parser.endIndex;
  }
  if (previousSibling) {
    element2.prev = previousSibling;
    previousSibling.next = element2;
  } else {
    element2.prev = null;
  }
  siblings.push(element2);
  element2.parent = parent2 || null;
};
DomHandler.prototype.onopentag = function(name2, attribs) {
  var properties = {
    type: name2 === "script" ? ElementType$3.Script : name2 === "style" ? ElementType$3.Style : ElementType$3.Tag,
    name: name2,
    attribs,
    children: []
  };
  var element2 = this._createDomElement(properties);
  this._addDomElement(element2);
  this._tagStack.push(element2);
};
DomHandler.prototype.ontext = function(data) {
  var normalize = this._options.normalizeWhitespace || this._options.ignoreWhitespace;
  var lastTag;
  if (!this._tagStack.length && this.dom.length && (lastTag = this.dom[this.dom.length - 1]).type === ElementType$3.Text) {
    if (normalize) {
      lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
    } else {
      lastTag.data += data;
    }
  } else {
    if (this._tagStack.length && (lastTag = this._tagStack[this._tagStack.length - 1]) && (lastTag = lastTag.children[lastTag.children.length - 1]) && lastTag.type === ElementType$3.Text) {
      if (normalize) {
        lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
      } else {
        lastTag.data += data;
      }
    } else {
      if (normalize) {
        data = data.replace(re_whitespace, " ");
      }
      var element2 = this._createDomElement({
        data,
        type: ElementType$3.Text
      });
      this._addDomElement(element2);
    }
  }
};
DomHandler.prototype.oncomment = function(data) {
  var lastTag = this._tagStack[this._tagStack.length - 1];
  if (lastTag && lastTag.type === ElementType$3.Comment) {
    lastTag.data += data;
    return;
  }
  var properties = {
    data,
    type: ElementType$3.Comment
  };
  var element2 = this._createDomElement(properties);
  this._addDomElement(element2);
  this._tagStack.push(element2);
};
DomHandler.prototype.oncdatastart = function() {
  var properties = {
    children: [{
      data: "",
      type: ElementType$3.Text
    }],
    type: ElementType$3.CDATA
  };
  var element2 = this._createDomElement(properties);
  this._addDomElement(element2);
  this._tagStack.push(element2);
};
DomHandler.prototype.oncommentend = DomHandler.prototype.oncdataend = function() {
  this._tagStack.pop();
};
DomHandler.prototype.onprocessinginstruction = function(name2, data) {
  var element2 = this._createDomElement({
    name: name2,
    data,
    type: ElementType$3.Directive
  });
  this._addDomElement(element2);
};
var domhandler = DomHandler;
var domutilsExports = {};
var domutils = {
  get exports() {
    return domutilsExports;
  },
  set exports(v) {
    domutilsExports = v;
  }
};
var domSerializerExports = {};
var domSerializer = {
  get exports() {
    return domSerializerExports;
  },
  set exports(v) {
    domSerializerExports = v;
  }
};
var entities$1 = {};
var encode$1 = {};
var inverseXML = getInverseObj(require$$2), xmlReplacer = getInverseReplacer(inverseXML);
encode$1.XML = getInverse(inverseXML, xmlReplacer);
var inverseHTML = getInverseObj(require$$0), htmlReplacer = getInverseReplacer(inverseHTML);
encode$1.HTML = getInverse(inverseHTML, htmlReplacer);
function getInverseObj(obj) {
  return Object.keys(obj).sort().reduce(function(inverse, name2) {
    inverse[obj[name2]] = "&" + name2 + ";";
    return inverse;
  }, {});
}
function getInverseReplacer(inverse) {
  var single = [], multiple = [];
  Object.keys(inverse).forEach(function(k) {
    if (k.length === 1) {
      single.push("\\" + k);
    } else {
      multiple.push(k);
    }
  });
  multiple.unshift("[" + single.join("") + "]");
  return new RegExp(multiple.join("|"), "g");
}
var re_nonASCII = /[^\0-\x7F]/g, re_astralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
function singleCharReplacer(c) {
  return "&#x" + c.charCodeAt(0).toString(16).toUpperCase() + ";";
}
function astralReplacer(c) {
  var high = c.charCodeAt(0);
  var low = c.charCodeAt(1);
  var codePoint = (high - 55296) * 1024 + low - 56320 + 65536;
  return "&#x" + codePoint.toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
  function func(name2) {
    return inverse[name2];
  }
  return function(data) {
    return data.replace(re, func).replace(re_astralSymbols, astralReplacer).replace(re_nonASCII, singleCharReplacer);
  };
}
var re_xmlChars = getInverseReplacer(inverseXML);
function escapeXML(data) {
  return data.replace(re_xmlChars, singleCharReplacer).replace(re_astralSymbols, astralReplacer).replace(re_nonASCII, singleCharReplacer);
}
encode$1.escape = escapeXML;
var entityMap = require$$0, legacyMap = require$$1$2, xmlMap = require$$2, decodeCodePoint = decode_codepoint;
var decodeXMLStrict = getStrictDecoder(xmlMap), decodeHTMLStrict = getStrictDecoder(entityMap);
function getStrictDecoder(map2) {
  var keys2 = Object.keys(map2).join("|"), replace = getReplacer(map2);
  keys2 += "|#[xX][\\da-fA-F]+|#\\d+";
  var re = new RegExp("&(?:" + keys2 + ");", "g");
  return function(str) {
    return String(str).replace(re, replace);
  };
}
var decodeHTML = function() {
  var legacy2 = Object.keys(legacyMap).sort(sorter);
  var keys2 = Object.keys(entityMap).sort(sorter);
  for (var i2 = 0, j2 = 0; i2 < keys2.length; i2++) {
    if (legacy2[j2] === keys2[i2]) {
      keys2[i2] += ";?";
      j2++;
    } else {
      keys2[i2] += ";";
    }
  }
  var re = new RegExp("&(?:" + keys2.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), replace = getReplacer(entityMap);
  function replacer(str) {
    if (str.substr(-1) !== ";")
      str += ";";
    return replace(str);
  }
  return function(str) {
    return String(str).replace(re, replacer);
  };
}();
function sorter(a, b) {
  return a < b ? 1 : -1;
}
function getReplacer(map2) {
  return function replace(str) {
    if (str.charAt(1) === "#") {
      if (str.charAt(2) === "X" || str.charAt(2) === "x") {
        return decodeCodePoint(parseInt(str.substr(3), 16));
      }
      return decodeCodePoint(parseInt(str.substr(2), 10));
    }
    return map2[str.slice(1, -1)];
  };
}
var decode$1 = {
  XML: decodeXMLStrict,
  HTML: decodeHTML,
  HTMLStrict: decodeHTMLStrict
};
var encode = encode$1, decode = decode$1;
entities$1.decode = function(data, level) {
  return (!level || level <= 0 ? decode.XML : decode.HTML)(data);
};
entities$1.decodeStrict = function(data, level) {
  return (!level || level <= 0 ? decode.XML : decode.HTMLStrict)(data);
};
entities$1.encode = function(data, level) {
  return (!level || level <= 0 ? encode.XML : encode.HTML)(data);
};
entities$1.encodeXML = encode.XML;
entities$1.encodeHTML4 = entities$1.encodeHTML5 = entities$1.encodeHTML = encode.HTML;
entities$1.decodeXML = entities$1.decodeXMLStrict = decode.XML;
entities$1.decodeHTML4 = entities$1.decodeHTML5 = entities$1.decodeHTML = decode.HTML;
entities$1.decodeHTML4Strict = entities$1.decodeHTML5Strict = entities$1.decodeHTMLStrict = decode.HTMLStrict;
entities$1.escape = encode.escape;
var ElementType$2 = domelementtype;
var entities = entities$1;
var unencodedElements = {
  __proto__: null,
  style: true,
  script: true,
  xmp: true,
  iframe: true,
  noembed: true,
  noframes: true,
  plaintext: true,
  noscript: true
};
function formatAttrs(attributes2, opts) {
  if (!attributes2)
    return;
  var output = "", value;
  for (var key in attributes2) {
    value = attributes2[key];
    if (output) {
      output += " ";
    }
    output += key;
    if (value !== null && value !== "" || opts.xmlMode) {
      output += '="' + (opts.decodeEntities ? entities.encodeXML(value) : value) + '"';
    }
  }
  return output;
}
var singleTag = {
  __proto__: null,
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};
var render$1 = domSerializer.exports = function(dom, opts) {
  if (!Array.isArray(dom) && !dom.cheerio)
    dom = [dom];
  opts = opts || {};
  var output = "";
  for (var i2 = 0; i2 < dom.length; i2++) {
    var elem = dom[i2];
    if (elem.type === "root")
      output += render$1(elem.children, opts);
    else if (ElementType$2.isTag(elem))
      output += renderTag(elem, opts);
    else if (elem.type === ElementType$2.Directive)
      output += renderDirective(elem);
    else if (elem.type === ElementType$2.Comment)
      output += renderComment(elem);
    else if (elem.type === ElementType$2.CDATA)
      output += renderCdata(elem);
    else
      output += renderText(elem, opts);
  }
  return output;
};
function renderTag(elem, opts) {
  if (elem.name === "svg")
    opts = { decodeEntities: opts.decodeEntities, xmlMode: true };
  var tag2 = "<" + elem.name, attribs = formatAttrs(elem.attribs, opts);
  if (attribs) {
    tag2 += " " + attribs;
  }
  if (opts.xmlMode && (!elem.children || elem.children.length === 0)) {
    tag2 += "/>";
  } else {
    tag2 += ">";
    if (elem.children) {
      tag2 += render$1(elem.children, opts);
    }
    if (!singleTag[elem.name] || opts.xmlMode) {
      tag2 += "</" + elem.name + ">";
    }
  }
  return tag2;
}
function renderDirective(elem) {
  return "<" + elem.data + ">";
}
function renderText(elem, opts) {
  var data = elem.data || "";
  if (opts.decodeEntities && !(elem.parent && elem.parent.name in unencodedElements)) {
    data = entities.encodeXML(data);
  }
  return data;
}
function renderCdata(elem) {
  return "<![CDATA[" + elem.children[0].data + "]]>";
}
function renderComment(elem) {
  return "<!--" + elem.data + "-->";
}
var ElementType$1 = domelementtype, getOuterHTML = domSerializerExports, isTag$5 = ElementType$1.isTag;
var stringify$1 = {
  getInnerHTML,
  getOuterHTML,
  getText: getText$1
};
function getInnerHTML(elem, opts) {
  return elem.children ? elem.children.map(function(elem2) {
    return getOuterHTML(elem2, opts);
  }).join("") : "";
}
function getText$1(elem) {
  if (Array.isArray(elem))
    return elem.map(getText$1).join("");
  if (isTag$5(elem) || elem.type === ElementType$1.CDATA)
    return getText$1(elem.children);
  if (elem.type === ElementType$1.Text)
    return elem.data;
  return "";
}
var traversal = {};
var getChildren$4 = traversal.getChildren = function(elem) {
  return elem.children;
};
var getParent$3 = traversal.getParent = function(elem) {
  return elem.parent;
};
traversal.getSiblings = function(elem) {
  var parent2 = getParent$3(elem);
  return parent2 ? getChildren$4(parent2) : [elem];
};
traversal.getAttributeValue = function(elem, name2) {
  return elem.attribs && elem.attribs[name2];
};
traversal.hasAttrib = function(elem, name2) {
  return !!elem.attribs && hasOwnProperty.call(elem.attribs, name2);
};
traversal.getName = function(elem) {
  return elem.name;
};
var manipulation$1 = {};
manipulation$1.removeElement = function(elem) {
  if (elem.prev)
    elem.prev.next = elem.next;
  if (elem.next)
    elem.next.prev = elem.prev;
  if (elem.parent) {
    var childs = elem.parent.children;
    childs.splice(childs.lastIndexOf(elem), 1);
  }
};
manipulation$1.replaceElement = function(elem, replacement) {
  var prev = replacement.prev = elem.prev;
  if (prev) {
    prev.next = replacement;
  }
  var next = replacement.next = elem.next;
  if (next) {
    next.prev = replacement;
  }
  var parent2 = replacement.parent = elem.parent;
  if (parent2) {
    var childs = parent2.children;
    childs[childs.lastIndexOf(elem)] = replacement;
  }
};
manipulation$1.appendChild = function(elem, child2) {
  child2.parent = elem;
  if (elem.children.push(child2) !== 1) {
    var sibling2 = elem.children[elem.children.length - 2];
    sibling2.next = child2;
    child2.prev = sibling2;
    child2.next = null;
  }
};
manipulation$1.append = function(elem, next) {
  var parent2 = elem.parent, currNext = elem.next;
  next.next = currNext;
  next.prev = elem;
  elem.next = next;
  next.parent = parent2;
  if (currNext) {
    currNext.prev = next;
    if (parent2) {
      var childs = parent2.children;
      childs.splice(childs.lastIndexOf(currNext), 0, next);
    }
  } else if (parent2) {
    parent2.children.push(next);
  }
};
manipulation$1.prepend = function(elem, prev) {
  var parent2 = elem.parent;
  if (parent2) {
    var childs = parent2.children;
    childs.splice(childs.lastIndexOf(elem), 0, prev);
  }
  if (elem.prev) {
    elem.prev.next = prev;
  }
  prev.parent = parent2;
  prev.prev = elem.prev;
  prev.next = elem;
  elem.prev = prev;
};
var isTag$4 = domelementtype.isTag;
var querying = {
  filter: filter$1,
  find,
  findOneChild,
  findOne: findOne$1,
  existsOne: existsOne$1,
  findAll: findAll$1
};
function filter$1(test, element2, recurse, limit) {
  if (!Array.isArray(element2))
    element2 = [element2];
  if (typeof limit !== "number" || !isFinite(limit)) {
    limit = Infinity;
  }
  return find(test, element2, recurse !== false, limit);
}
function find(test, elems, recurse, limit) {
  var result = [], childs;
  for (var i2 = 0, j2 = elems.length; i2 < j2; i2++) {
    if (test(elems[i2])) {
      result.push(elems[i2]);
      if (--limit <= 0)
        break;
    }
    childs = elems[i2].children;
    if (recurse && childs && childs.length > 0) {
      childs = find(test, childs, recurse, limit);
      result = result.concat(childs);
      limit -= childs.length;
      if (limit <= 0)
        break;
    }
  }
  return result;
}
function findOneChild(test, elems) {
  for (var i2 = 0, l = elems.length; i2 < l; i2++) {
    if (test(elems[i2]))
      return elems[i2];
  }
  return null;
}
function findOne$1(test, elems) {
  var elem = null;
  for (var i2 = 0, l = elems.length; i2 < l && !elem; i2++) {
    if (!isTag$4(elems[i2])) {
      continue;
    } else if (test(elems[i2])) {
      elem = elems[i2];
    } else if (elems[i2].children.length > 0) {
      elem = findOne$1(test, elems[i2].children);
    }
  }
  return elem;
}
function existsOne$1(test, elems) {
  for (var i2 = 0, l = elems.length; i2 < l; i2++) {
    if (isTag$4(elems[i2]) && (test(elems[i2]) || elems[i2].children.length > 0 && existsOne$1(test, elems[i2].children))) {
      return true;
    }
  }
  return false;
}
function findAll$1(test, elems) {
  var result = [];
  for (var i2 = 0, j2 = elems.length; i2 < j2; i2++) {
    if (!isTag$4(elems[i2]))
      continue;
    if (test(elems[i2]))
      result.push(elems[i2]);
    if (elems[i2].children.length > 0) {
      result = result.concat(findAll$1(test, elems[i2].children));
    }
  }
  return result;
}
var legacy = {};
var ElementType = domelementtype;
var isTag$3 = legacy.isTag = ElementType.isTag;
legacy.testElement = function(options2, element2) {
  for (var key in options2) {
    if (!options2.hasOwnProperty(key))
      ;
    else if (key === "tag_name") {
      if (!isTag$3(element2) || !options2.tag_name(element2.name)) {
        return false;
      }
    } else if (key === "tag_type") {
      if (!options2.tag_type(element2.type))
        return false;
    } else if (key === "tag_contains") {
      if (isTag$3(element2) || !options2.tag_contains(element2.data)) {
        return false;
      }
    } else if (!element2.attribs || !options2[key](element2.attribs[key])) {
      return false;
    }
  }
  return true;
};
var Checks = {
  tag_name: function(name2) {
    if (typeof name2 === "function") {
      return function(elem) {
        return isTag$3(elem) && name2(elem.name);
      };
    } else if (name2 === "*") {
      return isTag$3;
    } else {
      return function(elem) {
        return isTag$3(elem) && elem.name === name2;
      };
    }
  },
  tag_type: function(type) {
    if (typeof type === "function") {
      return function(elem) {
        return type(elem.type);
      };
    } else {
      return function(elem) {
        return elem.type === type;
      };
    }
  },
  tag_contains: function(data) {
    if (typeof data === "function") {
      return function(elem) {
        return !isTag$3(elem) && data(elem.data);
      };
    } else {
      return function(elem) {
        return !isTag$3(elem) && elem.data === data;
      };
    }
  }
};
function getAttribCheck(attrib, value) {
  if (typeof value === "function") {
    return function(elem) {
      return elem.attribs && value(elem.attribs[attrib]);
    };
  } else {
    return function(elem) {
      return elem.attribs && elem.attribs[attrib] === value;
    };
  }
}
function combineFuncs(a, b) {
  return function(elem) {
    return a(elem) || b(elem);
  };
}
legacy.getElements = function(options2, element2, recurse, limit) {
  var funcs = Object.keys(options2).map(function(key) {
    var value = options2[key];
    return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
  });
  return funcs.length === 0 ? [] : this.filter(
    funcs.reduce(combineFuncs),
    element2,
    recurse,
    limit
  );
};
legacy.getElementById = function(id, element2, recurse) {
  if (!Array.isArray(element2))
    element2 = [element2];
  return this.findOne(getAttribCheck("id", id), element2, recurse !== false);
};
legacy.getElementsByTagName = function(name2, element2, recurse, limit) {
  return this.filter(Checks.tag_name(name2), element2, recurse, limit);
};
legacy.getElementsByTagType = function(type, element2, recurse, limit) {
  return this.filter(Checks.tag_type(type), element2, recurse, limit);
};
var helpers = {};
helpers.removeSubsets = function(nodes) {
  var idx = nodes.length, node2, ancestor, replace;
  while (--idx > -1) {
    node2 = ancestor = nodes[idx];
    nodes[idx] = null;
    replace = true;
    while (ancestor) {
      if (nodes.indexOf(ancestor) > -1) {
        replace = false;
        nodes.splice(idx, 1);
        break;
      }
      ancestor = ancestor.parent;
    }
    if (replace) {
      nodes[idx] = node2;
    }
  }
  return nodes;
};
var POSITION = {
  DISCONNECTED: 1,
  PRECEDING: 2,
  FOLLOWING: 4,
  CONTAINS: 8,
  CONTAINED_BY: 16
};
var comparePos = helpers.compareDocumentPosition = function(nodeA, nodeB) {
  var aParents = [];
  var bParents = [];
  var current, sharedParent, siblings, aSibling, bSibling, idx;
  if (nodeA === nodeB) {
    return 0;
  }
  current = nodeA;
  while (current) {
    aParents.unshift(current);
    current = current.parent;
  }
  current = nodeB;
  while (current) {
    bParents.unshift(current);
    current = current.parent;
  }
  idx = 0;
  while (aParents[idx] === bParents[idx]) {
    idx++;
  }
  if (idx === 0) {
    return POSITION.DISCONNECTED;
  }
  sharedParent = aParents[idx - 1];
  siblings = sharedParent.children;
  aSibling = aParents[idx];
  bSibling = bParents[idx];
  if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
    if (sharedParent === nodeB) {
      return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
    }
    return POSITION.FOLLOWING;
  } else {
    if (sharedParent === nodeA) {
      return POSITION.PRECEDING | POSITION.CONTAINS;
    }
    return POSITION.PRECEDING;
  }
};
helpers.uniqueSort = function(nodes) {
  var idx = nodes.length, node2, position;
  nodes = nodes.slice();
  while (--idx > -1) {
    node2 = nodes[idx];
    position = nodes.indexOf(node2);
    if (position > -1 && position < idx) {
      nodes.splice(idx, 1);
    }
  }
  nodes.sort(function(a, b) {
    var relative = comparePos(a, b);
    if (relative & POSITION.PRECEDING) {
      return -1;
    } else if (relative & POSITION.FOLLOWING) {
      return 1;
    }
    return 0;
  });
  return nodes;
};
(function(module) {
  var DomUtils2 = module.exports;
  [
    stringify$1,
    traversal,
    manipulation$1,
    querying,
    legacy,
    helpers
  ].forEach(function(ext) {
    Object.keys(ext).forEach(function(key) {
      DomUtils2[key] = ext[key].bind(DomUtils2);
    });
  });
})(domutils);
var FeedHandler_1;
var hasRequiredFeedHandler;
function requireFeedHandler() {
  if (hasRequiredFeedHandler)
    return FeedHandler_1;
  hasRequiredFeedHandler = 1;
  var DomHandler2 = domhandler;
  var DomUtils2 = domutilsExports;
  function FeedHandler(callback, options2) {
    this.init(callback, options2);
  }
  inherits_browserExports(FeedHandler, DomHandler2);
  FeedHandler.prototype.init = DomHandler2;
  function getElements(what, where) {
    return DomUtils2.getElementsByTagName(what, where, true);
  }
  function getOneElement(what, where) {
    return DomUtils2.getElementsByTagName(what, where, true, 1)[0];
  }
  function fetch(what, where, recurse) {
    return DomUtils2.getText(
      DomUtils2.getElementsByTagName(what, where, recurse, 1)
    ).trim();
  }
  function addConditionally(obj, prop2, what, where, recurse) {
    var tmp = fetch(what, where, recurse);
    if (tmp)
      obj[prop2] = tmp;
  }
  var isValidFeed = function(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
  };
  FeedHandler.prototype.onend = function() {
    var feed = {}, feedRoot = getOneElement(isValidFeed, this.dom), tmp, childs;
    if (feedRoot) {
      if (feedRoot.name === "feed") {
        childs = feedRoot.children;
        feed.type = "atom";
        addConditionally(feed, "id", "id", childs);
        addConditionally(feed, "title", "title", childs);
        if ((tmp = getOneElement("link", childs)) && (tmp = tmp.attribs) && (tmp = tmp.href))
          feed.link = tmp;
        addConditionally(feed, "description", "subtitle", childs);
        if (tmp = fetch("updated", childs))
          feed.updated = new Date(tmp);
        addConditionally(feed, "author", "email", childs, true);
        feed.items = getElements("entry", childs).map(function(item) {
          var entry = {}, tmp2;
          item = item.children;
          addConditionally(entry, "id", "id", item);
          addConditionally(entry, "title", "title", item);
          if ((tmp2 = getOneElement("link", item)) && (tmp2 = tmp2.attribs) && (tmp2 = tmp2.href))
            entry.link = tmp2;
          if (tmp2 = fetch("summary", item) || fetch("content", item))
            entry.description = tmp2;
          if (tmp2 = fetch("updated", item))
            entry.pubDate = new Date(tmp2);
          return entry;
        });
      } else {
        childs = getOneElement("channel", feedRoot.children).children;
        feed.type = feedRoot.name.substr(0, 3);
        feed.id = "";
        addConditionally(feed, "title", "title", childs);
        addConditionally(feed, "link", "link", childs);
        addConditionally(feed, "description", "description", childs);
        if (tmp = fetch("lastBuildDate", childs))
          feed.updated = new Date(tmp);
        addConditionally(feed, "author", "managingEditor", childs, true);
        feed.items = getElements("item", feedRoot.children).map(function(item) {
          var entry = {}, tmp2;
          item = item.children;
          addConditionally(entry, "id", "guid", item);
          addConditionally(entry, "title", "title", item);
          addConditionally(entry, "link", "link", item);
          addConditionally(entry, "description", "description", item);
          if (tmp2 = fetch("pubDate", item))
            entry.pubDate = new Date(tmp2);
          return entry;
        });
      }
    }
    this.dom = feed;
    DomHandler2.prototype._handleCallback.call(
      this,
      feedRoot ? null : Error("couldn't find root of feed")
    );
  };
  FeedHandler_1 = FeedHandler;
  return FeedHandler_1;
}
const __viteBrowserExternal = new Proxy({}, {
  get(_2, key) {
    throw new Error(`Module "" has been externalized for browser compatibility. Cannot access ".${key}" in client code.  See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
  }
});
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$1$1 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var WritableStream_1;
var hasRequiredWritableStream;
function requireWritableStream() {
  if (hasRequiredWritableStream)
    return WritableStream_1;
  hasRequiredWritableStream = 1;
  WritableStream_1 = Stream;
  var Parser2 = Parser_1;
  var WritableStream2 = require$$1$1.Writable;
  var StringDecoder = require$$2$2.StringDecoder;
  var Buffer2 = require$$3.Buffer;
  function Stream(cbs, options2) {
    var parser2 = this._parser = new Parser2(cbs, options2);
    var decoder = this._decoder = new StringDecoder();
    WritableStream2.call(this, { decodeStrings: false });
    this.once("finish", function() {
      parser2.end(decoder.end());
    });
  }
  inherits_browserExports(Stream, WritableStream2);
  Stream.prototype._write = function(chunk, encoding, cb) {
    if (chunk instanceof Buffer2)
      chunk = this._decoder.write(chunk);
    this._parser.write(chunk);
    cb();
  };
  return WritableStream_1;
}
var Stream_1;
var hasRequiredStream;
function requireStream() {
  if (hasRequiredStream)
    return Stream_1;
  hasRequiredStream = 1;
  Stream_1 = Stream;
  var Parser2 = requireWritableStream();
  function Stream(options2) {
    Parser2.call(this, new Cbs(this), options2);
  }
  inherits_browserExports(Stream, Parser2);
  Stream.prototype.readable = true;
  function Cbs(scope) {
    this.scope = scope;
  }
  var EVENTS = requireLib().EVENTS;
  Object.keys(EVENTS).forEach(function(name2) {
    if (EVENTS[name2] === 0) {
      Cbs.prototype["on" + name2] = function() {
        this.scope.emit(name2);
      };
    } else if (EVENTS[name2] === 1) {
      Cbs.prototype["on" + name2] = function(a) {
        this.scope.emit(name2, a);
      };
    } else if (EVENTS[name2] === 2) {
      Cbs.prototype["on" + name2] = function(a, b) {
        this.scope.emit(name2, a, b);
      };
    } else {
      throw Error("wrong number of arguments!");
    }
  });
  return Stream_1;
}
var ProxyHandler_1;
var hasRequiredProxyHandler;
function requireProxyHandler() {
  if (hasRequiredProxyHandler)
    return ProxyHandler_1;
  hasRequiredProxyHandler = 1;
  ProxyHandler_1 = ProxyHandler;
  function ProxyHandler(cbs) {
    this._cbs = cbs || {};
  }
  var EVENTS = requireLib().EVENTS;
  Object.keys(EVENTS).forEach(function(name2) {
    if (EVENTS[name2] === 0) {
      name2 = "on" + name2;
      ProxyHandler.prototype[name2] = function() {
        if (this._cbs[name2])
          this._cbs[name2]();
      };
    } else if (EVENTS[name2] === 1) {
      name2 = "on" + name2;
      ProxyHandler.prototype[name2] = function(a) {
        if (this._cbs[name2])
          this._cbs[name2](a);
      };
    } else if (EVENTS[name2] === 2) {
      name2 = "on" + name2;
      ProxyHandler.prototype[name2] = function(a, b) {
        if (this._cbs[name2])
          this._cbs[name2](a, b);
      };
    } else {
      throw Error("wrong number of arguments");
    }
  });
  return ProxyHandler_1;
}
var CollectingHandler_1;
var hasRequiredCollectingHandler;
function requireCollectingHandler() {
  if (hasRequiredCollectingHandler)
    return CollectingHandler_1;
  hasRequiredCollectingHandler = 1;
  CollectingHandler_1 = CollectingHandler;
  function CollectingHandler(cbs) {
    this._cbs = cbs || {};
    this.events = [];
  }
  var EVENTS = requireLib().EVENTS;
  Object.keys(EVENTS).forEach(function(name2) {
    if (EVENTS[name2] === 0) {
      name2 = "on" + name2;
      CollectingHandler.prototype[name2] = function() {
        this.events.push([name2]);
        if (this._cbs[name2])
          this._cbs[name2]();
      };
    } else if (EVENTS[name2] === 1) {
      name2 = "on" + name2;
      CollectingHandler.prototype[name2] = function(a) {
        this.events.push([name2, a]);
        if (this._cbs[name2])
          this._cbs[name2](a);
      };
    } else if (EVENTS[name2] === 2) {
      name2 = "on" + name2;
      CollectingHandler.prototype[name2] = function(a, b) {
        this.events.push([name2, a, b]);
        if (this._cbs[name2])
          this._cbs[name2](a, b);
      };
    } else {
      throw Error("wrong number of arguments");
    }
  });
  CollectingHandler.prototype.onreset = function() {
    this.events = [];
    if (this._cbs.onreset)
      this._cbs.onreset();
  };
  CollectingHandler.prototype.restart = function() {
    if (this._cbs.onreset)
      this._cbs.onreset();
    for (var i2 = 0, len = this.events.length; i2 < len; i2++) {
      if (this._cbs[this.events[i2][0]]) {
        var num2 = this.events[i2].length;
        if (num2 === 1) {
          this._cbs[this.events[i2][0]]();
        } else if (num2 === 2) {
          this._cbs[this.events[i2][0]](this.events[i2][1]);
        } else {
          this._cbs[this.events[i2][0]](
            this.events[i2][1],
            this.events[i2][2]
          );
        }
      }
    }
  };
  return CollectingHandler_1;
}
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib)
    return libExports;
  hasRequiredLib = 1;
  (function(module) {
    var Parser2 = Parser_1;
    var DomHandler2 = domhandler;
    function defineProp(name2, value) {
      delete module.exports[name2];
      module.exports[name2] = value;
      return value;
    }
    module.exports = {
      Parser: Parser2,
      Tokenizer: Tokenizer_1,
      ElementType: domelementtype,
      DomHandler: DomHandler2,
      get FeedHandler() {
        return defineProp("FeedHandler", requireFeedHandler());
      },
      get Stream() {
        return defineProp("Stream", requireStream());
      },
      get WritableStream() {
        return defineProp("WritableStream", requireWritableStream());
      },
      get ProxyHandler() {
        return defineProp("ProxyHandler", requireProxyHandler());
      },
      get DomUtils() {
        return defineProp("DomUtils", domutilsExports);
      },
      get CollectingHandler() {
        return defineProp(
          "CollectingHandler",
          requireCollectingHandler()
        );
      },
      // For legacy support
      DefaultHandler: DomHandler2,
      get RssHandler() {
        return defineProp("RssHandler", this.FeedHandler);
      },
      //helper methods
      parseDOM: function(data, options2) {
        var handler = new DomHandler2(options2);
        new Parser2(handler, options2).end(data);
        return handler.dom;
      },
      parseFeed: function(feed, options2) {
        var handler = new module.exports.FeedHandler(options2);
        new Parser2(handler, options2).end(feed);
        return handler.dom;
      },
      createDomStream: function(cb, options2, elementCb) {
        var handler = new DomHandler2(cb, options2, elementCb);
        return new Parser2(handler, options2);
      },
      // List of all events that the parser emits
      EVENTS: {
        /* Format: eventname: number of arguments */
        attribute: 2,
        cdatastart: 0,
        cdataend: 0,
        text: 1,
        processinginstruction: 2,
        comment: 1,
        commentend: 0,
        closetag: 1,
        opentag: 2,
        opentagname: 1,
        error: 1,
        end: 0
      }
    };
  })(lib$1);
  return libExports;
}
var lib = {};
var parserExports = {};
var parser = {
  get exports() {
    return parserExports;
  },
  set exports(v) {
    parserExports = v;
  }
};
var tokenizerExports = {};
var tokenizer = {
  get exports() {
    return tokenizerExports;
  },
  set exports(v) {
    tokenizerExports = v;
  }
};
var preprocessorExports = {};
var preprocessor = {
  get exports() {
    return preprocessorExports;
  },
  set exports(v) {
    preprocessorExports = v;
  }
};
var unicode = {};
unicode.REPLACEMENT_CHARACTER = "�";
unicode.CODE_POINTS = {
  EOF: -1,
  NULL: 0,
  TABULATION: 9,
  CARRIAGE_RETURN: 13,
  LINE_FEED: 10,
  FORM_FEED: 12,
  SPACE: 32,
  EXCLAMATION_MARK: 33,
  QUOTATION_MARK: 34,
  NUMBER_SIGN: 35,
  AMPERSAND: 38,
  APOSTROPHE: 39,
  HYPHEN_MINUS: 45,
  SOLIDUS: 47,
  DIGIT_0: 48,
  DIGIT_9: 57,
  SEMICOLON: 59,
  LESS_THAN_SIGN: 60,
  EQUALS_SIGN: 61,
  GREATER_THAN_SIGN: 62,
  QUESTION_MARK: 63,
  LATIN_CAPITAL_A: 65,
  LATIN_CAPITAL_F: 70,
  LATIN_CAPITAL_X: 88,
  LATIN_CAPITAL_Z: 90,
  GRAVE_ACCENT: 96,
  LATIN_SMALL_A: 97,
  LATIN_SMALL_F: 102,
  LATIN_SMALL_X: 120,
  LATIN_SMALL_Z: 122,
  REPLACEMENT_CHARACTER: 65533
};
unicode.CODE_POINT_SEQUENCES = {
  DASH_DASH_STRING: [45, 45],
  //--
  DOCTYPE_STRING: [68, 79, 67, 84, 89, 80, 69],
  //DOCTYPE
  CDATA_START_STRING: [91, 67, 68, 65, 84, 65, 91],
  //[CDATA[
  CDATA_END_STRING: [93, 93, 62],
  //]]>
  SCRIPT_STRING: [115, 99, 114, 105, 112, 116],
  //script
  PUBLIC_STRING: [80, 85, 66, 76, 73, 67],
  //PUBLIC
  SYSTEM_STRING: [83, 89, 83, 84, 69, 77]
  //SYSTEM
};
var UNICODE$4 = unicode;
var $$a = UNICODE$4.CODE_POINTS;
function isSurrogatePair(cp1, cp2) {
  return cp1 >= 55296 && cp1 <= 56319 && cp2 >= 56320 && cp2 <= 57343;
}
function getSurrogatePairCodePoint(cp1, cp2) {
  return (cp1 - 55296) * 1024 + 9216 + cp2;
}
var DEFAULT_BUFFER_WATERLINE = 1 << 16;
var Preprocessor$1 = preprocessor.exports = function() {
  this.html = null;
  this.pos = -1;
  this.lastGapPos = -1;
  this.lastCharPos = -1;
  this.gapStack = [];
  this.skipNextNewLine = false;
  this.lastChunkWritten = false;
  this.endOfChunkHit = false;
  this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
};
Preprocessor$1.prototype.dropParsedChunk = function() {
  if (this.pos > this.bufferWaterline) {
    this.lastCharPos -= this.pos;
    this.html = this.html.substring(this.pos);
    this.pos = 0;
    this.lastGapPos = -1;
    this.gapStack = [];
  }
};
Preprocessor$1.prototype._addGap = function() {
  this.gapStack.push(this.lastGapPos);
  this.lastGapPos = this.pos;
};
Preprocessor$1.prototype._processHighRangeCodePoint = function(cp) {
  if (this.pos !== this.lastCharPos) {
    var nextCp = this.html.charCodeAt(this.pos + 1);
    if (isSurrogatePair(cp, nextCp)) {
      this.pos++;
      cp = getSurrogatePairCodePoint(cp, nextCp);
      this._addGap();
    }
  } else if (!this.lastChunkWritten) {
    this.endOfChunkHit = true;
    return $$a.EOF;
  }
  return cp;
};
Preprocessor$1.prototype.write = function(chunk, isLastChunk) {
  if (this.html)
    this.html += chunk;
  else
    this.html = chunk;
  this.lastCharPos = this.html.length - 1;
  this.endOfChunkHit = false;
  this.lastChunkWritten = isLastChunk;
};
Preprocessor$1.prototype.insertHtmlAtCurrentPos = function(chunk) {
  this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1, this.html.length);
  this.lastCharPos = this.html.length - 1;
  this.endOfChunkHit = false;
};
Preprocessor$1.prototype.advance = function() {
  this.pos++;
  if (this.pos > this.lastCharPos) {
    if (!this.lastChunkWritten)
      this.endOfChunkHit = true;
    return $$a.EOF;
  }
  var cp = this.html.charCodeAt(this.pos);
  if (this.skipNextNewLine && cp === $$a.LINE_FEED) {
    this.skipNextNewLine = false;
    this._addGap();
    return this.advance();
  }
  if (cp === $$a.CARRIAGE_RETURN) {
    this.skipNextNewLine = true;
    return $$a.LINE_FEED;
  }
  this.skipNextNewLine = false;
  return cp >= 55296 ? this._processHighRangeCodePoint(cp) : cp;
};
Preprocessor$1.prototype.retreat = function() {
  if (this.pos === this.lastGapPos) {
    this.lastGapPos = this.gapStack.pop();
    this.pos--;
  }
  this.pos--;
};
var named_entity_data = new Uint16Array([4, 52, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 106, 303, 412, 810, 1432, 1701, 1796, 1987, 2114, 2360, 2420, 2484, 3170, 3251, 4140, 4393, 4575, 4610, 5106, 5512, 5728, 6117, 6274, 6315, 6345, 6427, 6516, 7002, 7910, 8733, 9323, 9870, 10170, 10631, 10893, 11318, 11386, 11467, 12773, 13092, 14474, 14922, 15448, 15542, 16419, 17666, 18166, 18611, 19004, 19095, 19298, 19397, 4, 16, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 140, 150, 158, 169, 176, 194, 199, 210, 216, 222, 226, 242, 256, 266, 283, 294, 108, 105, 103, 5, 198, 1, 59, 148, 1, 198, 80, 5, 38, 1, 59, 156, 1, 38, 99, 117, 116, 101, 5, 193, 1, 59, 167, 1, 193, 114, 101, 118, 101, 59, 1, 258, 4, 2, 105, 121, 182, 191, 114, 99, 5, 194, 1, 59, 189, 1, 194, 59, 1, 1040, 114, 59, 3, 55349, 56580, 114, 97, 118, 101, 5, 192, 1, 59, 208, 1, 192, 112, 104, 97, 59, 1, 913, 97, 99, 114, 59, 1, 256, 100, 59, 1, 10835, 4, 2, 103, 112, 232, 237, 111, 110, 59, 1, 260, 102, 59, 3, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 1, 8289, 105, 110, 103, 5, 197, 1, 59, 264, 1, 197, 4, 2, 99, 115, 272, 277, 114, 59, 3, 55349, 56476, 105, 103, 110, 59, 1, 8788, 105, 108, 100, 101, 5, 195, 1, 59, 292, 1, 195, 109, 108, 5, 196, 1, 59, 301, 1, 196, 4, 8, 97, 99, 101, 102, 111, 114, 115, 117, 321, 350, 354, 383, 388, 394, 400, 405, 4, 2, 99, 114, 327, 336, 107, 115, 108, 97, 115, 104, 59, 1, 8726, 4, 2, 118, 119, 342, 345, 59, 1, 10983, 101, 100, 59, 1, 8966, 121, 59, 1, 1041, 4, 3, 99, 114, 116, 362, 369, 379, 97, 117, 115, 101, 59, 1, 8757, 110, 111, 117, 108, 108, 105, 115, 59, 1, 8492, 97, 59, 1, 914, 114, 59, 3, 55349, 56581, 112, 102, 59, 3, 55349, 56633, 101, 118, 101, 59, 1, 728, 99, 114, 59, 1, 8492, 109, 112, 101, 113, 59, 1, 8782, 4, 14, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 442, 447, 456, 504, 542, 547, 569, 573, 577, 616, 678, 784, 790, 796, 99, 121, 59, 1, 1063, 80, 89, 5, 169, 1, 59, 454, 1, 169, 4, 3, 99, 112, 121, 464, 470, 497, 117, 116, 101, 59, 1, 262, 4, 2, 59, 105, 476, 478, 1, 8914, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8517, 108, 101, 121, 115, 59, 1, 8493, 4, 4, 97, 101, 105, 111, 514, 520, 530, 535, 114, 111, 110, 59, 1, 268, 100, 105, 108, 5, 199, 1, 59, 528, 1, 199, 114, 99, 59, 1, 264, 110, 105, 110, 116, 59, 1, 8752, 111, 116, 59, 1, 266, 4, 2, 100, 110, 553, 560, 105, 108, 108, 97, 59, 1, 184, 116, 101, 114, 68, 111, 116, 59, 1, 183, 114, 59, 1, 8493, 105, 59, 1, 935, 114, 99, 108, 101, 4, 4, 68, 77, 80, 84, 591, 596, 603, 609, 111, 116, 59, 1, 8857, 105, 110, 117, 115, 59, 1, 8854, 108, 117, 115, 59, 1, 8853, 105, 109, 101, 115, 59, 1, 8855, 111, 4, 2, 99, 115, 623, 646, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8754, 101, 67, 117, 114, 108, 121, 4, 2, 68, 81, 658, 671, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8221, 117, 111, 116, 101, 59, 1, 8217, 4, 4, 108, 110, 112, 117, 688, 701, 736, 753, 111, 110, 4, 2, 59, 101, 696, 698, 1, 8759, 59, 1, 10868, 4, 3, 103, 105, 116, 709, 717, 722, 114, 117, 101, 110, 116, 59, 1, 8801, 110, 116, 59, 1, 8751, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8750, 4, 2, 102, 114, 742, 745, 59, 1, 8450, 111, 100, 117, 99, 116, 59, 1, 8720, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8755, 111, 115, 115, 59, 1, 10799, 99, 114, 59, 3, 55349, 56478, 112, 4, 2, 59, 67, 803, 805, 1, 8915, 97, 112, 59, 1, 8781, 4, 11, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 834, 850, 855, 860, 865, 888, 903, 916, 921, 1011, 1415, 4, 2, 59, 111, 840, 842, 1, 8517, 116, 114, 97, 104, 100, 59, 1, 10513, 99, 121, 59, 1, 1026, 99, 121, 59, 1, 1029, 99, 121, 59, 1, 1039, 4, 3, 103, 114, 115, 873, 879, 883, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8609, 104, 118, 59, 1, 10980, 4, 2, 97, 121, 894, 900, 114, 111, 110, 59, 1, 270, 59, 1, 1044, 108, 4, 2, 59, 116, 910, 912, 1, 8711, 97, 59, 1, 916, 114, 59, 3, 55349, 56583, 4, 2, 97, 102, 927, 998, 4, 2, 99, 109, 933, 992, 114, 105, 116, 105, 99, 97, 108, 4, 4, 65, 68, 71, 84, 950, 957, 978, 985, 99, 117, 116, 101, 59, 1, 180, 111, 4, 2, 116, 117, 964, 967, 59, 1, 729, 98, 108, 101, 65, 99, 117, 116, 101, 59, 1, 733, 114, 97, 118, 101, 59, 1, 96, 105, 108, 100, 101, 59, 1, 732, 111, 110, 100, 59, 1, 8900, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8518, 4, 4, 112, 116, 117, 119, 1021, 1026, 1048, 1249, 102, 59, 3, 55349, 56635, 4, 3, 59, 68, 69, 1034, 1036, 1041, 1, 168, 111, 116, 59, 1, 8412, 113, 117, 97, 108, 59, 1, 8784, 98, 108, 101, 4, 6, 67, 68, 76, 82, 85, 86, 1065, 1082, 1101, 1189, 1211, 1236, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8751, 111, 4, 2, 116, 119, 1089, 1092, 59, 1, 168, 110, 65, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 101, 111, 1107, 1141, 102, 116, 4, 3, 65, 82, 84, 1117, 1124, 1136, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8660, 101, 101, 59, 1, 10980, 110, 103, 4, 2, 76, 82, 1149, 1177, 101, 102, 116, 4, 2, 65, 82, 1158, 1165, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10233, 105, 103, 104, 116, 4, 2, 65, 84, 1199, 1206, 114, 114, 111, 119, 59, 1, 8658, 101, 101, 59, 1, 8872, 112, 4, 2, 65, 68, 1218, 1225, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8741, 110, 4, 6, 65, 66, 76, 82, 84, 97, 1264, 1292, 1299, 1352, 1391, 1408, 114, 114, 111, 119, 4, 3, 59, 66, 85, 1276, 1278, 1283, 1, 8595, 97, 114, 59, 1, 10515, 112, 65, 114, 114, 111, 119, 59, 1, 8693, 114, 101, 118, 101, 59, 1, 785, 101, 102, 116, 4, 3, 82, 84, 86, 1310, 1323, 1334, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 1, 10576, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10590, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1345, 1347, 1, 8637, 97, 114, 59, 1, 10582, 105, 103, 104, 116, 4, 2, 84, 86, 1362, 1373, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10591, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1384, 1386, 1, 8641, 97, 114, 59, 1, 10583, 101, 101, 4, 2, 59, 65, 1399, 1401, 1, 8868, 114, 114, 111, 119, 59, 1, 8615, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 99, 116, 1421, 1426, 114, 59, 3, 55349, 56479, 114, 111, 107, 59, 1, 272, 4, 16, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1466, 1470, 1478, 1489, 1515, 1520, 1525, 1536, 1544, 1593, 1609, 1617, 1650, 1664, 1668, 1677, 71, 59, 1, 330, 72, 5, 208, 1, 59, 1476, 1, 208, 99, 117, 116, 101, 5, 201, 1, 59, 1487, 1, 201, 4, 3, 97, 105, 121, 1497, 1503, 1512, 114, 111, 110, 59, 1, 282, 114, 99, 5, 202, 1, 59, 1510, 1, 202, 59, 1, 1069, 111, 116, 59, 1, 278, 114, 59, 3, 55349, 56584, 114, 97, 118, 101, 5, 200, 1, 59, 1534, 1, 200, 101, 109, 101, 110, 116, 59, 1, 8712, 4, 2, 97, 112, 1550, 1555, 99, 114, 59, 1, 274, 116, 121, 4, 2, 83, 86, 1563, 1576, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9723, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9643, 4, 2, 103, 112, 1599, 1604, 111, 110, 59, 1, 280, 102, 59, 3, 55349, 56636, 115, 105, 108, 111, 110, 59, 1, 917, 117, 4, 2, 97, 105, 1624, 1640, 108, 4, 2, 59, 84, 1631, 1633, 1, 10869, 105, 108, 100, 101, 59, 1, 8770, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8652, 4, 2, 99, 105, 1656, 1660, 114, 59, 1, 8496, 109, 59, 1, 10867, 97, 59, 1, 919, 109, 108, 5, 203, 1, 59, 1675, 1, 203, 4, 2, 105, 112, 1683, 1689, 115, 116, 115, 59, 1, 8707, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 1, 8519, 4, 5, 99, 102, 105, 111, 115, 1713, 1717, 1722, 1762, 1791, 121, 59, 1, 1060, 114, 59, 3, 55349, 56585, 108, 108, 101, 100, 4, 2, 83, 86, 1732, 1745, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9724, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9642, 4, 3, 112, 114, 117, 1770, 1775, 1781, 102, 59, 3, 55349, 56637, 65, 108, 108, 59, 1, 8704, 114, 105, 101, 114, 116, 114, 102, 59, 1, 8497, 99, 114, 59, 1, 8497, 4, 12, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1822, 1827, 1834, 1848, 1855, 1877, 1882, 1887, 1890, 1896, 1978, 1984, 99, 121, 59, 1, 1027, 5, 62, 1, 59, 1832, 1, 62, 109, 109, 97, 4, 2, 59, 100, 1843, 1845, 1, 915, 59, 1, 988, 114, 101, 118, 101, 59, 1, 286, 4, 3, 101, 105, 121, 1863, 1869, 1874, 100, 105, 108, 59, 1, 290, 114, 99, 59, 1, 284, 59, 1, 1043, 111, 116, 59, 1, 288, 114, 59, 3, 55349, 56586, 59, 1, 8921, 112, 102, 59, 3, 55349, 56638, 101, 97, 116, 101, 114, 4, 6, 69, 70, 71, 76, 83, 84, 1915, 1933, 1944, 1953, 1959, 1971, 113, 117, 97, 108, 4, 2, 59, 76, 1925, 1927, 1, 8805, 101, 115, 115, 59, 1, 8923, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8807, 114, 101, 97, 116, 101, 114, 59, 1, 10914, 101, 115, 115, 59, 1, 8823, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10878, 105, 108, 100, 101, 59, 1, 8819, 99, 114, 59, 3, 55349, 56482, 59, 1, 8811, 4, 8, 65, 97, 99, 102, 105, 111, 115, 117, 2005, 2012, 2026, 2032, 2036, 2049, 2073, 2089, 82, 68, 99, 121, 59, 1, 1066, 4, 2, 99, 116, 2018, 2023, 101, 107, 59, 1, 711, 59, 1, 94, 105, 114, 99, 59, 1, 292, 114, 59, 1, 8460, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 1, 8459, 4, 2, 112, 114, 2055, 2059, 102, 59, 1, 8461, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 1, 9472, 4, 2, 99, 116, 2079, 2083, 114, 59, 1, 8459, 114, 111, 107, 59, 1, 294, 109, 112, 4, 2, 68, 69, 2097, 2107, 111, 119, 110, 72, 117, 109, 112, 59, 1, 8782, 113, 117, 97, 108, 59, 1, 8783, 4, 14, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 2144, 2149, 2155, 2160, 2171, 2189, 2194, 2198, 2209, 2245, 2307, 2329, 2334, 2341, 99, 121, 59, 1, 1045, 108, 105, 103, 59, 1, 306, 99, 121, 59, 1, 1025, 99, 117, 116, 101, 5, 205, 1, 59, 2169, 1, 205, 4, 2, 105, 121, 2177, 2186, 114, 99, 5, 206, 1, 59, 2184, 1, 206, 59, 1, 1048, 111, 116, 59, 1, 304, 114, 59, 1, 8465, 114, 97, 118, 101, 5, 204, 1, 59, 2207, 1, 204, 4, 3, 59, 97, 112, 2217, 2219, 2238, 1, 8465, 4, 2, 99, 103, 2225, 2229, 114, 59, 1, 298, 105, 110, 97, 114, 121, 73, 59, 1, 8520, 108, 105, 101, 115, 59, 1, 8658, 4, 2, 116, 118, 2251, 2281, 4, 2, 59, 101, 2257, 2259, 1, 8748, 4, 2, 103, 114, 2265, 2271, 114, 97, 108, 59, 1, 8747, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8898, 105, 115, 105, 98, 108, 101, 4, 2, 67, 84, 2293, 2300, 111, 109, 109, 97, 59, 1, 8291, 105, 109, 101, 115, 59, 1, 8290, 4, 3, 103, 112, 116, 2315, 2320, 2325, 111, 110, 59, 1, 302, 102, 59, 3, 55349, 56640, 97, 59, 1, 921, 99, 114, 59, 1, 8464, 105, 108, 100, 101, 59, 1, 296, 4, 2, 107, 109, 2347, 2352, 99, 121, 59, 1, 1030, 108, 5, 207, 1, 59, 2358, 1, 207, 4, 5, 99, 102, 111, 115, 117, 2372, 2386, 2391, 2397, 2414, 4, 2, 105, 121, 2378, 2383, 114, 99, 59, 1, 308, 59, 1, 1049, 114, 59, 3, 55349, 56589, 112, 102, 59, 3, 55349, 56641, 4, 2, 99, 101, 2403, 2408, 114, 59, 3, 55349, 56485, 114, 99, 121, 59, 1, 1032, 107, 99, 121, 59, 1, 1028, 4, 7, 72, 74, 97, 99, 102, 111, 115, 2436, 2441, 2446, 2452, 2467, 2472, 2478, 99, 121, 59, 1, 1061, 99, 121, 59, 1, 1036, 112, 112, 97, 59, 1, 922, 4, 2, 101, 121, 2458, 2464, 100, 105, 108, 59, 1, 310, 59, 1, 1050, 114, 59, 3, 55349, 56590, 112, 102, 59, 3, 55349, 56642, 99, 114, 59, 3, 55349, 56486, 4, 11, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2508, 2513, 2520, 2562, 2585, 2981, 2986, 3004, 3011, 3146, 3167, 99, 121, 59, 1, 1033, 5, 60, 1, 59, 2518, 1, 60, 4, 5, 99, 109, 110, 112, 114, 2532, 2538, 2544, 2548, 2558, 117, 116, 101, 59, 1, 313, 98, 100, 97, 59, 1, 923, 103, 59, 1, 10218, 108, 97, 99, 101, 116, 114, 102, 59, 1, 8466, 114, 59, 1, 8606, 4, 3, 97, 101, 121, 2570, 2576, 2582, 114, 111, 110, 59, 1, 317, 100, 105, 108, 59, 1, 315, 59, 1, 1051, 4, 2, 102, 115, 2591, 2907, 116, 4, 10, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2614, 2663, 2672, 2728, 2735, 2760, 2820, 2870, 2888, 2895, 4, 2, 110, 114, 2620, 2633, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10216, 114, 111, 119, 4, 3, 59, 66, 82, 2644, 2646, 2651, 1, 8592, 97, 114, 59, 1, 8676, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8646, 101, 105, 108, 105, 110, 103, 59, 1, 8968, 111, 4, 2, 117, 119, 2679, 2692, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10214, 110, 4, 2, 84, 86, 2699, 2710, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10593, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2721, 2723, 1, 8643, 97, 114, 59, 1, 10585, 108, 111, 111, 114, 59, 1, 8970, 105, 103, 104, 116, 4, 2, 65, 86, 2745, 2752, 114, 114, 111, 119, 59, 1, 8596, 101, 99, 116, 111, 114, 59, 1, 10574, 4, 2, 101, 114, 2766, 2792, 101, 4, 3, 59, 65, 86, 2775, 2777, 2784, 1, 8867, 114, 114, 111, 119, 59, 1, 8612, 101, 99, 116, 111, 114, 59, 1, 10586, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 2806, 2808, 2813, 1, 8882, 97, 114, 59, 1, 10703, 113, 117, 97, 108, 59, 1, 8884, 112, 4, 3, 68, 84, 86, 2829, 2841, 2852, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10577, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10592, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2863, 2865, 1, 8639, 97, 114, 59, 1, 10584, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2881, 2883, 1, 8636, 97, 114, 59, 1, 10578, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8660, 115, 4, 6, 69, 70, 71, 76, 83, 84, 2922, 2936, 2947, 2956, 2962, 2974, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8922, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8806, 114, 101, 97, 116, 101, 114, 59, 1, 8822, 101, 115, 115, 59, 1, 10913, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10877, 105, 108, 100, 101, 59, 1, 8818, 114, 59, 3, 55349, 56591, 4, 2, 59, 101, 2992, 2994, 1, 8920, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8666, 105, 100, 111, 116, 59, 1, 319, 4, 3, 110, 112, 119, 3019, 3110, 3115, 103, 4, 4, 76, 82, 108, 114, 3030, 3058, 3070, 3098, 101, 102, 116, 4, 2, 65, 82, 3039, 3046, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10231, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10230, 101, 102, 116, 4, 2, 97, 114, 3079, 3086, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10233, 102, 59, 3, 55349, 56643, 101, 114, 4, 2, 76, 82, 3123, 3134, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8601, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8600, 4, 3, 99, 104, 116, 3154, 3158, 3161, 114, 59, 1, 8466, 59, 1, 8624, 114, 111, 107, 59, 1, 321, 59, 1, 8810, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 3188, 3192, 3196, 3222, 3227, 3237, 3243, 3248, 112, 59, 1, 10501, 121, 59, 1, 1052, 4, 2, 100, 108, 3202, 3213, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8287, 108, 105, 110, 116, 114, 102, 59, 1, 8499, 114, 59, 3, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 1, 8723, 112, 102, 59, 3, 55349, 56644, 99, 114, 59, 1, 8499, 59, 1, 924, 4, 9, 74, 97, 99, 101, 102, 111, 115, 116, 117, 3271, 3276, 3283, 3306, 3422, 3427, 4120, 4126, 4137, 99, 121, 59, 1, 1034, 99, 117, 116, 101, 59, 1, 323, 4, 3, 97, 101, 121, 3291, 3297, 3303, 114, 111, 110, 59, 1, 327, 100, 105, 108, 59, 1, 325, 59, 1, 1053, 4, 3, 103, 115, 119, 3314, 3380, 3415, 97, 116, 105, 118, 101, 4, 3, 77, 84, 86, 3327, 3340, 3365, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8203, 104, 105, 4, 2, 99, 110, 3348, 3357, 107, 83, 112, 97, 99, 101, 59, 1, 8203, 83, 112, 97, 99, 101, 59, 1, 8203, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8203, 116, 101, 100, 4, 2, 71, 76, 3389, 3405, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8811, 101, 115, 115, 76, 101, 115, 115, 59, 1, 8810, 76, 105, 110, 101, 59, 1, 10, 114, 59, 3, 55349, 56593, 4, 4, 66, 110, 112, 116, 3437, 3444, 3460, 3464, 114, 101, 97, 107, 59, 1, 8288, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 1, 160, 102, 59, 1, 8469, 4, 13, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 3492, 3494, 3517, 3536, 3578, 3657, 3685, 3784, 3823, 3860, 3915, 4066, 4107, 1, 10988, 4, 2, 111, 117, 3500, 3510, 110, 103, 114, 117, 101, 110, 116, 59, 1, 8802, 112, 67, 97, 112, 59, 1, 8813, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8742, 4, 3, 108, 113, 120, 3544, 3552, 3571, 101, 109, 101, 110, 116, 59, 1, 8713, 117, 97, 108, 4, 2, 59, 84, 3561, 3563, 1, 8800, 105, 108, 100, 101, 59, 3, 8770, 824, 105, 115, 116, 115, 59, 1, 8708, 114, 101, 97, 116, 101, 114, 4, 7, 59, 69, 70, 71, 76, 83, 84, 3600, 3602, 3609, 3621, 3631, 3637, 3650, 1, 8815, 113, 117, 97, 108, 59, 1, 8817, 117, 108, 108, 69, 113, 117, 97, 108, 59, 3, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 3, 8811, 824, 101, 115, 115, 59, 1, 8825, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10878, 824, 105, 108, 100, 101, 59, 1, 8821, 117, 109, 112, 4, 2, 68, 69, 3666, 3677, 111, 119, 110, 72, 117, 109, 112, 59, 3, 8782, 824, 113, 117, 97, 108, 59, 3, 8783, 824, 101, 4, 2, 102, 115, 3692, 3724, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3709, 3711, 3717, 1, 8938, 97, 114, 59, 3, 10703, 824, 113, 117, 97, 108, 59, 1, 8940, 115, 4, 6, 59, 69, 71, 76, 83, 84, 3739, 3741, 3748, 3757, 3764, 3777, 1, 8814, 113, 117, 97, 108, 59, 1, 8816, 114, 101, 97, 116, 101, 114, 59, 1, 8824, 101, 115, 115, 59, 3, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10877, 824, 105, 108, 100, 101, 59, 1, 8820, 101, 115, 116, 101, 100, 4, 2, 71, 76, 3795, 3812, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 3, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 3, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 4, 3, 59, 69, 83, 3838, 3840, 3848, 1, 8832, 113, 117, 97, 108, 59, 3, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8928, 4, 2, 101, 105, 3866, 3881, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 1, 8716, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3900, 3902, 3908, 1, 8939, 97, 114, 59, 3, 10704, 824, 113, 117, 97, 108, 59, 1, 8941, 4, 2, 113, 117, 3921, 3973, 117, 97, 114, 101, 83, 117, 4, 2, 98, 112, 3933, 3952, 115, 101, 116, 4, 2, 59, 69, 3942, 3945, 3, 8847, 824, 113, 117, 97, 108, 59, 1, 8930, 101, 114, 115, 101, 116, 4, 2, 59, 69, 3963, 3966, 3, 8848, 824, 113, 117, 97, 108, 59, 1, 8931, 4, 3, 98, 99, 112, 3981, 4e3, 4045, 115, 101, 116, 4, 2, 59, 69, 3990, 3993, 3, 8834, 8402, 113, 117, 97, 108, 59, 1, 8840, 99, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 4015, 4017, 4025, 4037, 1, 8833, 113, 117, 97, 108, 59, 3, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8929, 105, 108, 100, 101, 59, 3, 8831, 824, 101, 114, 115, 101, 116, 4, 2, 59, 69, 4056, 4059, 3, 8835, 8402, 113, 117, 97, 108, 59, 1, 8841, 105, 108, 100, 101, 4, 4, 59, 69, 70, 84, 4080, 4082, 4089, 4100, 1, 8769, 113, 117, 97, 108, 59, 1, 8772, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8775, 105, 108, 100, 101, 59, 1, 8777, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8740, 99, 114, 59, 3, 55349, 56489, 105, 108, 100, 101, 5, 209, 1, 59, 4135, 1, 209, 59, 1, 925, 4, 14, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 4170, 4176, 4187, 4205, 4212, 4217, 4228, 4253, 4259, 4292, 4295, 4316, 4337, 4346, 108, 105, 103, 59, 1, 338, 99, 117, 116, 101, 5, 211, 1, 59, 4185, 1, 211, 4, 2, 105, 121, 4193, 4202, 114, 99, 5, 212, 1, 59, 4200, 1, 212, 59, 1, 1054, 98, 108, 97, 99, 59, 1, 336, 114, 59, 3, 55349, 56594, 114, 97, 118, 101, 5, 210, 1, 59, 4226, 1, 210, 4, 3, 97, 101, 105, 4236, 4241, 4246, 99, 114, 59, 1, 332, 103, 97, 59, 1, 937, 99, 114, 111, 110, 59, 1, 927, 112, 102, 59, 3, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 4, 2, 68, 81, 4272, 4285, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8220, 117, 111, 116, 101, 59, 1, 8216, 59, 1, 10836, 4, 2, 99, 108, 4301, 4306, 114, 59, 3, 55349, 56490, 97, 115, 104, 5, 216, 1, 59, 4314, 1, 216, 105, 4, 2, 108, 109, 4323, 4332, 100, 101, 5, 213, 1, 59, 4330, 1, 213, 101, 115, 59, 1, 10807, 109, 108, 5, 214, 1, 59, 4344, 1, 214, 101, 114, 4, 2, 66, 80, 4354, 4380, 4, 2, 97, 114, 4360, 4364, 114, 59, 1, 8254, 97, 99, 4, 2, 101, 107, 4372, 4375, 59, 1, 9182, 101, 116, 59, 1, 9140, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9180, 4, 9, 97, 99, 102, 104, 105, 108, 111, 114, 115, 4413, 4422, 4426, 4431, 4435, 4438, 4448, 4471, 4561, 114, 116, 105, 97, 108, 68, 59, 1, 8706, 121, 59, 1, 1055, 114, 59, 3, 55349, 56595, 105, 59, 1, 934, 59, 1, 928, 117, 115, 77, 105, 110, 117, 115, 59, 1, 177, 4, 2, 105, 112, 4454, 4467, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59, 1, 8460, 102, 59, 1, 8473, 4, 4, 59, 101, 105, 111, 4481, 4483, 4526, 4531, 1, 10939, 99, 101, 100, 101, 115, 4, 4, 59, 69, 83, 84, 4498, 4500, 4507, 4519, 1, 8826, 113, 117, 97, 108, 59, 1, 10927, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8828, 105, 108, 100, 101, 59, 1, 8830, 109, 101, 59, 1, 8243, 4, 2, 100, 112, 4537, 4543, 117, 99, 116, 59, 1, 8719, 111, 114, 116, 105, 111, 110, 4, 2, 59, 97, 4555, 4557, 1, 8759, 108, 59, 1, 8733, 4, 2, 99, 105, 4567, 4572, 114, 59, 3, 55349, 56491, 59, 1, 936, 4, 4, 85, 102, 111, 115, 4585, 4594, 4599, 4604, 79, 84, 5, 34, 1, 59, 4592, 1, 34, 114, 59, 3, 55349, 56596, 112, 102, 59, 1, 8474, 99, 114, 59, 3, 55349, 56492, 4, 12, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 4636, 4642, 4650, 4681, 4704, 4763, 4767, 4771, 5047, 5069, 5081, 5094, 97, 114, 114, 59, 1, 10512, 71, 5, 174, 1, 59, 4648, 1, 174, 4, 3, 99, 110, 114, 4658, 4664, 4668, 117, 116, 101, 59, 1, 340, 103, 59, 1, 10219, 114, 4, 2, 59, 116, 4675, 4677, 1, 8608, 108, 59, 1, 10518, 4, 3, 97, 101, 121, 4689, 4695, 4701, 114, 111, 110, 59, 1, 344, 100, 105, 108, 59, 1, 342, 59, 1, 1056, 4, 2, 59, 118, 4710, 4712, 1, 8476, 101, 114, 115, 101, 4, 2, 69, 85, 4722, 4748, 4, 2, 108, 113, 4728, 4736, 101, 109, 101, 110, 116, 59, 1, 8715, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8651, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10607, 114, 59, 1, 8476, 111, 59, 1, 929, 103, 104, 116, 4, 8, 65, 67, 68, 70, 84, 85, 86, 97, 4792, 4840, 4849, 4905, 4912, 4972, 5022, 5040, 4, 2, 110, 114, 4798, 4811, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10217, 114, 111, 119, 4, 3, 59, 66, 76, 4822, 4824, 4829, 1, 8594, 97, 114, 59, 1, 8677, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8644, 101, 105, 108, 105, 110, 103, 59, 1, 8969, 111, 4, 2, 117, 119, 4856, 4869, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10215, 110, 4, 2, 84, 86, 4876, 4887, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10589, 101, 99, 116, 111, 114, 4, 2, 59, 66, 4898, 4900, 1, 8642, 97, 114, 59, 1, 10581, 108, 111, 111, 114, 59, 1, 8971, 4, 2, 101, 114, 4918, 4944, 101, 4, 3, 59, 65, 86, 4927, 4929, 4936, 1, 8866, 114, 114, 111, 119, 59, 1, 8614, 101, 99, 116, 111, 114, 59, 1, 10587, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 4958, 4960, 4965, 1, 8883, 97, 114, 59, 1, 10704, 113, 117, 97, 108, 59, 1, 8885, 112, 4, 3, 68, 84, 86, 4981, 4993, 5004, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10575, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10588, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5015, 5017, 1, 8638, 97, 114, 59, 1, 10580, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5033, 5035, 1, 8640, 97, 114, 59, 1, 10579, 114, 114, 111, 119, 59, 1, 8658, 4, 2, 112, 117, 5053, 5057, 102, 59, 1, 8477, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 1, 10608, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8667, 4, 2, 99, 104, 5087, 5091, 114, 59, 1, 8475, 59, 1, 8625, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 1, 10740, 4, 13, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 5134, 5150, 5157, 5164, 5198, 5203, 5259, 5265, 5277, 5283, 5374, 5380, 5385, 4, 2, 67, 99, 5140, 5146, 72, 99, 121, 59, 1, 1065, 121, 59, 1, 1064, 70, 84, 99, 121, 59, 1, 1068, 99, 117, 116, 101, 59, 1, 346, 4, 5, 59, 97, 101, 105, 121, 5176, 5178, 5184, 5190, 5195, 1, 10940, 114, 111, 110, 59, 1, 352, 100, 105, 108, 59, 1, 350, 114, 99, 59, 1, 348, 59, 1, 1057, 114, 59, 3, 55349, 56598, 111, 114, 116, 4, 4, 68, 76, 82, 85, 5216, 5227, 5238, 5250, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8595, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8592, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8594, 112, 65, 114, 114, 111, 119, 59, 1, 8593, 103, 109, 97, 59, 1, 931, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 1, 8728, 112, 102, 59, 3, 55349, 56650, 4, 2, 114, 117, 5289, 5293, 116, 59, 1, 8730, 97, 114, 101, 4, 4, 59, 73, 83, 85, 5306, 5308, 5322, 5367, 1, 9633, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8851, 117, 4, 2, 98, 112, 5329, 5347, 115, 101, 116, 4, 2, 59, 69, 5338, 5340, 1, 8847, 113, 117, 97, 108, 59, 1, 8849, 101, 114, 115, 101, 116, 4, 2, 59, 69, 5358, 5360, 1, 8848, 113, 117, 97, 108, 59, 1, 8850, 110, 105, 111, 110, 59, 1, 8852, 99, 114, 59, 3, 55349, 56494, 97, 114, 59, 1, 8902, 4, 4, 98, 99, 109, 112, 5395, 5420, 5475, 5478, 4, 2, 59, 115, 5401, 5403, 1, 8912, 101, 116, 4, 2, 59, 69, 5411, 5413, 1, 8912, 113, 117, 97, 108, 59, 1, 8838, 4, 2, 99, 104, 5426, 5468, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 5440, 5442, 5449, 5461, 1, 8827, 113, 117, 97, 108, 59, 1, 10928, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8829, 105, 108, 100, 101, 59, 1, 8831, 84, 104, 97, 116, 59, 1, 8715, 59, 1, 8721, 4, 3, 59, 101, 115, 5486, 5488, 5507, 1, 8913, 114, 115, 101, 116, 4, 2, 59, 69, 5498, 5500, 1, 8835, 113, 117, 97, 108, 59, 1, 8839, 101, 116, 59, 1, 8913, 4, 11, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 5536, 5546, 5552, 5567, 5579, 5602, 5607, 5655, 5695, 5701, 5711, 79, 82, 78, 5, 222, 1, 59, 5544, 1, 222, 65, 68, 69, 59, 1, 8482, 4, 2, 72, 99, 5558, 5563, 99, 121, 59, 1, 1035, 121, 59, 1, 1062, 4, 2, 98, 117, 5573, 5576, 59, 1, 9, 59, 1, 932, 4, 3, 97, 101, 121, 5587, 5593, 5599, 114, 111, 110, 59, 1, 356, 100, 105, 108, 59, 1, 354, 59, 1, 1058, 114, 59, 3, 55349, 56599, 4, 2, 101, 105, 5613, 5631, 4, 2, 114, 116, 5619, 5627, 101, 102, 111, 114, 101, 59, 1, 8756, 97, 59, 1, 920, 4, 2, 99, 110, 5637, 5647, 107, 83, 112, 97, 99, 101, 59, 3, 8287, 8202, 83, 112, 97, 99, 101, 59, 1, 8201, 108, 100, 101, 4, 4, 59, 69, 70, 84, 5668, 5670, 5677, 5688, 1, 8764, 113, 117, 97, 108, 59, 1, 8771, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8773, 105, 108, 100, 101, 59, 1, 8776, 112, 102, 59, 3, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 1, 8411, 4, 2, 99, 116, 5717, 5722, 114, 59, 3, 55349, 56495, 114, 111, 107, 59, 1, 358, 4, 14, 97, 98, 99, 100, 102, 103, 109, 110, 111, 112, 114, 115, 116, 117, 5758, 5789, 5805, 5823, 5830, 5835, 5846, 5852, 5921, 5937, 6089, 6095, 6101, 6108, 4, 2, 99, 114, 5764, 5774, 117, 116, 101, 5, 218, 1, 59, 5772, 1, 218, 114, 4, 2, 59, 111, 5781, 5783, 1, 8607, 99, 105, 114, 59, 1, 10569, 114, 4, 2, 99, 101, 5796, 5800, 121, 59, 1, 1038, 118, 101, 59, 1, 364, 4, 2, 105, 121, 5811, 5820, 114, 99, 5, 219, 1, 59, 5818, 1, 219, 59, 1, 1059, 98, 108, 97, 99, 59, 1, 368, 114, 59, 3, 55349, 56600, 114, 97, 118, 101, 5, 217, 1, 59, 5844, 1, 217, 97, 99, 114, 59, 1, 362, 4, 2, 100, 105, 5858, 5905, 101, 114, 4, 2, 66, 80, 5866, 5892, 4, 2, 97, 114, 5872, 5876, 114, 59, 1, 95, 97, 99, 4, 2, 101, 107, 5884, 5887, 59, 1, 9183, 101, 116, 59, 1, 9141, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9181, 111, 110, 4, 2, 59, 80, 5913, 5915, 1, 8899, 108, 117, 115, 59, 1, 8846, 4, 2, 103, 112, 5927, 5932, 111, 110, 59, 1, 370, 102, 59, 3, 55349, 56652, 4, 8, 65, 68, 69, 84, 97, 100, 112, 115, 5955, 5985, 5996, 6009, 6026, 6033, 6044, 6075, 114, 114, 111, 119, 4, 3, 59, 66, 68, 5967, 5969, 5974, 1, 8593, 97, 114, 59, 1, 10514, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8645, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8597, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10606, 101, 101, 4, 2, 59, 65, 6017, 6019, 1, 8869, 114, 114, 111, 119, 59, 1, 8613, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 4, 2, 76, 82, 6052, 6063, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8598, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8599, 105, 4, 2, 59, 108, 6082, 6084, 1, 978, 111, 110, 59, 1, 933, 105, 110, 103, 59, 1, 366, 99, 114, 59, 3, 55349, 56496, 105, 108, 100, 101, 59, 1, 360, 109, 108, 5, 220, 1, 59, 6115, 1, 220, 4, 9, 68, 98, 99, 100, 101, 102, 111, 115, 118, 6137, 6143, 6148, 6152, 6166, 6250, 6255, 6261, 6267, 97, 115, 104, 59, 1, 8875, 97, 114, 59, 1, 10987, 121, 59, 1, 1042, 97, 115, 104, 4, 2, 59, 108, 6161, 6163, 1, 8873, 59, 1, 10982, 4, 2, 101, 114, 6172, 6175, 59, 1, 8897, 4, 3, 98, 116, 121, 6183, 6188, 6238, 97, 114, 59, 1, 8214, 4, 2, 59, 105, 6194, 6196, 1, 8214, 99, 97, 108, 4, 4, 66, 76, 83, 84, 6209, 6214, 6220, 6231, 97, 114, 59, 1, 8739, 105, 110, 101, 59, 1, 124, 101, 112, 97, 114, 97, 116, 111, 114, 59, 1, 10072, 105, 108, 100, 101, 59, 1, 8768, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8202, 114, 59, 3, 55349, 56601, 112, 102, 59, 3, 55349, 56653, 99, 114, 59, 3, 55349, 56497, 100, 97, 115, 104, 59, 1, 8874, 4, 5, 99, 101, 102, 111, 115, 6286, 6292, 6298, 6303, 6309, 105, 114, 99, 59, 1, 372, 100, 103, 101, 59, 1, 8896, 114, 59, 3, 55349, 56602, 112, 102, 59, 3, 55349, 56654, 99, 114, 59, 3, 55349, 56498, 4, 4, 102, 105, 111, 115, 6325, 6330, 6333, 6339, 114, 59, 3, 55349, 56603, 59, 1, 926, 112, 102, 59, 3, 55349, 56655, 99, 114, 59, 3, 55349, 56499, 4, 9, 65, 73, 85, 97, 99, 102, 111, 115, 117, 6365, 6370, 6375, 6380, 6391, 6405, 6410, 6416, 6422, 99, 121, 59, 1, 1071, 99, 121, 59, 1, 1031, 99, 121, 59, 1, 1070, 99, 117, 116, 101, 5, 221, 1, 59, 6389, 1, 221, 4, 2, 105, 121, 6397, 6402, 114, 99, 59, 1, 374, 59, 1, 1067, 114, 59, 3, 55349, 56604, 112, 102, 59, 3, 55349, 56656, 99, 114, 59, 3, 55349, 56500, 109, 108, 59, 1, 376, 4, 8, 72, 97, 99, 100, 101, 102, 111, 115, 6445, 6450, 6457, 6472, 6477, 6501, 6505, 6510, 99, 121, 59, 1, 1046, 99, 117, 116, 101, 59, 1, 377, 4, 2, 97, 121, 6463, 6469, 114, 111, 110, 59, 1, 381, 59, 1, 1047, 111, 116, 59, 1, 379, 4, 2, 114, 116, 6483, 6497, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59, 1, 8203, 97, 59, 1, 918, 114, 59, 1, 8488, 112, 102, 59, 1, 8484, 99, 114, 59, 3, 55349, 56501, 4, 16, 97, 98, 99, 101, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 119, 6550, 6561, 6568, 6612, 6622, 6634, 6645, 6672, 6699, 6854, 6870, 6923, 6933, 6963, 6974, 6983, 99, 117, 116, 101, 5, 225, 1, 59, 6559, 1, 225, 114, 101, 118, 101, 59, 1, 259, 4, 6, 59, 69, 100, 105, 117, 121, 6582, 6584, 6588, 6591, 6600, 6609, 1, 8766, 59, 3, 8766, 819, 59, 1, 8767, 114, 99, 5, 226, 1, 59, 6598, 1, 226, 116, 101, 5, 180, 1, 59, 6607, 1, 180, 59, 1, 1072, 108, 105, 103, 5, 230, 1, 59, 6620, 1, 230, 4, 2, 59, 114, 6628, 6630, 1, 8289, 59, 3, 55349, 56606, 114, 97, 118, 101, 5, 224, 1, 59, 6643, 1, 224, 4, 2, 101, 112, 6651, 6667, 4, 2, 102, 112, 6657, 6663, 115, 121, 109, 59, 1, 8501, 104, 59, 1, 8501, 104, 97, 59, 1, 945, 4, 2, 97, 112, 6678, 6692, 4, 2, 99, 108, 6684, 6688, 114, 59, 1, 257, 103, 59, 1, 10815, 5, 38, 1, 59, 6697, 1, 38, 4, 2, 100, 103, 6705, 6737, 4, 5, 59, 97, 100, 115, 118, 6717, 6719, 6724, 6727, 6734, 1, 8743, 110, 100, 59, 1, 10837, 59, 1, 10844, 108, 111, 112, 101, 59, 1, 10840, 59, 1, 10842, 4, 7, 59, 101, 108, 109, 114, 115, 122, 6753, 6755, 6758, 6762, 6814, 6835, 6848, 1, 8736, 59, 1, 10660, 101, 59, 1, 8736, 115, 100, 4, 2, 59, 97, 6770, 6772, 1, 8737, 4, 8, 97, 98, 99, 100, 101, 102, 103, 104, 6790, 6793, 6796, 6799, 6802, 6805, 6808, 6811, 59, 1, 10664, 59, 1, 10665, 59, 1, 10666, 59, 1, 10667, 59, 1, 10668, 59, 1, 10669, 59, 1, 10670, 59, 1, 10671, 116, 4, 2, 59, 118, 6821, 6823, 1, 8735, 98, 4, 2, 59, 100, 6830, 6832, 1, 8894, 59, 1, 10653, 4, 2, 112, 116, 6841, 6845, 104, 59, 1, 8738, 59, 1, 197, 97, 114, 114, 59, 1, 9084, 4, 2, 103, 112, 6860, 6865, 111, 110, 59, 1, 261, 102, 59, 3, 55349, 56658, 4, 7, 59, 69, 97, 101, 105, 111, 112, 6886, 6888, 6891, 6897, 6900, 6904, 6908, 1, 8776, 59, 1, 10864, 99, 105, 114, 59, 1, 10863, 59, 1, 8778, 100, 59, 1, 8779, 115, 59, 1, 39, 114, 111, 120, 4, 2, 59, 101, 6917, 6919, 1, 8776, 113, 59, 1, 8778, 105, 110, 103, 5, 229, 1, 59, 6931, 1, 229, 4, 3, 99, 116, 121, 6941, 6946, 6949, 114, 59, 3, 55349, 56502, 59, 1, 42, 109, 112, 4, 2, 59, 101, 6957, 6959, 1, 8776, 113, 59, 1, 8781, 105, 108, 100, 101, 5, 227, 1, 59, 6972, 1, 227, 109, 108, 5, 228, 1, 59, 6981, 1, 228, 4, 2, 99, 105, 6989, 6997, 111, 110, 105, 110, 116, 59, 1, 8755, 110, 116, 59, 1, 10769, 4, 16, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 7036, 7041, 7119, 7135, 7149, 7155, 7219, 7224, 7347, 7354, 7463, 7489, 7786, 7793, 7814, 7866, 111, 116, 59, 1, 10989, 4, 2, 99, 114, 7047, 7094, 107, 4, 4, 99, 101, 112, 115, 7058, 7064, 7073, 7080, 111, 110, 103, 59, 1, 8780, 112, 115, 105, 108, 111, 110, 59, 1, 1014, 114, 105, 109, 101, 59, 1, 8245, 105, 109, 4, 2, 59, 101, 7088, 7090, 1, 8765, 113, 59, 1, 8909, 4, 2, 118, 119, 7100, 7105, 101, 101, 59, 1, 8893, 101, 100, 4, 2, 59, 103, 7113, 7115, 1, 8965, 101, 59, 1, 8965, 114, 107, 4, 2, 59, 116, 7127, 7129, 1, 9141, 98, 114, 107, 59, 1, 9142, 4, 2, 111, 121, 7141, 7146, 110, 103, 59, 1, 8780, 59, 1, 1073, 113, 117, 111, 59, 1, 8222, 4, 5, 99, 109, 112, 114, 116, 7167, 7181, 7188, 7193, 7199, 97, 117, 115, 4, 2, 59, 101, 7176, 7178, 1, 8757, 59, 1, 8757, 112, 116, 121, 118, 59, 1, 10672, 115, 105, 59, 1, 1014, 110, 111, 117, 59, 1, 8492, 4, 3, 97, 104, 119, 7207, 7210, 7213, 59, 1, 946, 59, 1, 8502, 101, 101, 110, 59, 1, 8812, 114, 59, 3, 55349, 56607, 103, 4, 7, 99, 111, 115, 116, 117, 118, 119, 7241, 7262, 7288, 7305, 7328, 7335, 7340, 4, 3, 97, 105, 117, 7249, 7253, 7258, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 4, 3, 100, 112, 116, 7270, 7275, 7281, 111, 116, 59, 1, 10752, 108, 117, 115, 59, 1, 10753, 105, 109, 101, 115, 59, 1, 10754, 4, 2, 113, 116, 7294, 7300, 99, 117, 112, 59, 1, 10758, 97, 114, 59, 1, 9733, 114, 105, 97, 110, 103, 108, 101, 4, 2, 100, 117, 7318, 7324, 111, 119, 110, 59, 1, 9661, 112, 59, 1, 9651, 112, 108, 117, 115, 59, 1, 10756, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 97, 114, 111, 119, 59, 1, 10509, 4, 3, 97, 107, 111, 7362, 7436, 7458, 4, 2, 99, 110, 7368, 7432, 107, 4, 3, 108, 115, 116, 7377, 7386, 7394, 111, 122, 101, 110, 103, 101, 59, 1, 10731, 113, 117, 97, 114, 101, 59, 1, 9642, 114, 105, 97, 110, 103, 108, 101, 4, 4, 59, 100, 108, 114, 7411, 7413, 7419, 7425, 1, 9652, 111, 119, 110, 59, 1, 9662, 101, 102, 116, 59, 1, 9666, 105, 103, 104, 116, 59, 1, 9656, 107, 59, 1, 9251, 4, 2, 49, 51, 7442, 7454, 4, 2, 50, 52, 7448, 7451, 59, 1, 9618, 59, 1, 9617, 52, 59, 1, 9619, 99, 107, 59, 1, 9608, 4, 2, 101, 111, 7469, 7485, 4, 2, 59, 113, 7475, 7478, 3, 61, 8421, 117, 105, 118, 59, 3, 8801, 8421, 116, 59, 1, 8976, 4, 4, 112, 116, 119, 120, 7499, 7504, 7517, 7523, 102, 59, 3, 55349, 56659, 4, 2, 59, 116, 7510, 7512, 1, 8869, 111, 109, 59, 1, 8869, 116, 105, 101, 59, 1, 8904, 4, 12, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 7549, 7571, 7597, 7619, 7655, 7660, 7682, 7708, 7715, 7721, 7728, 7750, 4, 4, 76, 82, 108, 114, 7559, 7562, 7565, 7568, 59, 1, 9559, 59, 1, 9556, 59, 1, 9558, 59, 1, 9555, 4, 5, 59, 68, 85, 100, 117, 7583, 7585, 7588, 7591, 7594, 1, 9552, 59, 1, 9574, 59, 1, 9577, 59, 1, 9572, 59, 1, 9575, 4, 4, 76, 82, 108, 114, 7607, 7610, 7613, 7616, 59, 1, 9565, 59, 1, 9562, 59, 1, 9564, 59, 1, 9561, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7635, 7637, 7640, 7643, 7646, 7649, 7652, 1, 9553, 59, 1, 9580, 59, 1, 9571, 59, 1, 9568, 59, 1, 9579, 59, 1, 9570, 59, 1, 9567, 111, 120, 59, 1, 10697, 4, 4, 76, 82, 108, 114, 7670, 7673, 7676, 7679, 59, 1, 9557, 59, 1, 9554, 59, 1, 9488, 59, 1, 9484, 4, 5, 59, 68, 85, 100, 117, 7694, 7696, 7699, 7702, 7705, 1, 9472, 59, 1, 9573, 59, 1, 9576, 59, 1, 9516, 59, 1, 9524, 105, 110, 117, 115, 59, 1, 8863, 108, 117, 115, 59, 1, 8862, 105, 109, 101, 115, 59, 1, 8864, 4, 4, 76, 82, 108, 114, 7738, 7741, 7744, 7747, 59, 1, 9563, 59, 1, 9560, 59, 1, 9496, 59, 1, 9492, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7766, 7768, 7771, 7774, 7777, 7780, 7783, 1, 9474, 59, 1, 9578, 59, 1, 9569, 59, 1, 9566, 59, 1, 9532, 59, 1, 9508, 59, 1, 9500, 114, 105, 109, 101, 59, 1, 8245, 4, 2, 101, 118, 7799, 7804, 118, 101, 59, 1, 728, 98, 97, 114, 5, 166, 1, 59, 7812, 1, 166, 4, 4, 99, 101, 105, 111, 7824, 7829, 7834, 7846, 114, 59, 3, 55349, 56503, 109, 105, 59, 1, 8271, 109, 4, 2, 59, 101, 7841, 7843, 1, 8765, 59, 1, 8909, 108, 4, 3, 59, 98, 104, 7855, 7857, 7860, 1, 92, 59, 1, 10693, 115, 117, 98, 59, 1, 10184, 4, 2, 108, 109, 7872, 7885, 108, 4, 2, 59, 101, 7879, 7881, 1, 8226, 116, 59, 1, 8226, 112, 4, 3, 59, 69, 101, 7894, 7896, 7899, 1, 8782, 59, 1, 10926, 4, 2, 59, 113, 7905, 7907, 1, 8783, 59, 1, 8783, 4, 15, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 116, 117, 119, 121, 7942, 8021, 8075, 8080, 8121, 8126, 8157, 8279, 8295, 8430, 8446, 8485, 8491, 8707, 8726, 4, 3, 99, 112, 114, 7950, 7956, 8007, 117, 116, 101, 59, 1, 263, 4, 6, 59, 97, 98, 99, 100, 115, 7970, 7972, 7977, 7984, 7998, 8003, 1, 8745, 110, 100, 59, 1, 10820, 114, 99, 117, 112, 59, 1, 10825, 4, 2, 97, 117, 7990, 7994, 112, 59, 1, 10827, 112, 59, 1, 10823, 111, 116, 59, 1, 10816, 59, 3, 8745, 65024, 4, 2, 101, 111, 8013, 8017, 116, 59, 1, 8257, 110, 59, 1, 711, 4, 4, 97, 101, 105, 117, 8031, 8046, 8056, 8061, 4, 2, 112, 114, 8037, 8041, 115, 59, 1, 10829, 111, 110, 59, 1, 269, 100, 105, 108, 5, 231, 1, 59, 8054, 1, 231, 114, 99, 59, 1, 265, 112, 115, 4, 2, 59, 115, 8069, 8071, 1, 10828, 109, 59, 1, 10832, 111, 116, 59, 1, 267, 4, 3, 100, 109, 110, 8088, 8097, 8104, 105, 108, 5, 184, 1, 59, 8095, 1, 184, 112, 116, 121, 118, 59, 1, 10674, 116, 5, 162, 2, 59, 101, 8112, 8114, 1, 162, 114, 100, 111, 116, 59, 1, 183, 114, 59, 3, 55349, 56608, 4, 3, 99, 101, 105, 8134, 8138, 8154, 121, 59, 1, 1095, 99, 107, 4, 2, 59, 109, 8146, 8148, 1, 10003, 97, 114, 107, 59, 1, 10003, 59, 1, 967, 114, 4, 7, 59, 69, 99, 101, 102, 109, 115, 8174, 8176, 8179, 8258, 8261, 8268, 8273, 1, 9675, 59, 1, 10691, 4, 3, 59, 101, 108, 8187, 8189, 8193, 1, 710, 113, 59, 1, 8791, 101, 4, 2, 97, 100, 8200, 8223, 114, 114, 111, 119, 4, 2, 108, 114, 8210, 8216, 101, 102, 116, 59, 1, 8634, 105, 103, 104, 116, 59, 1, 8635, 4, 5, 82, 83, 97, 99, 100, 8235, 8238, 8241, 8246, 8252, 59, 1, 174, 59, 1, 9416, 115, 116, 59, 1, 8859, 105, 114, 99, 59, 1, 8858, 97, 115, 104, 59, 1, 8861, 59, 1, 8791, 110, 105, 110, 116, 59, 1, 10768, 105, 100, 59, 1, 10991, 99, 105, 114, 59, 1, 10690, 117, 98, 115, 4, 2, 59, 117, 8288, 8290, 1, 9827, 105, 116, 59, 1, 9827, 4, 4, 108, 109, 110, 112, 8305, 8326, 8376, 8400, 111, 110, 4, 2, 59, 101, 8313, 8315, 1, 58, 4, 2, 59, 113, 8321, 8323, 1, 8788, 59, 1, 8788, 4, 2, 109, 112, 8332, 8344, 97, 4, 2, 59, 116, 8339, 8341, 1, 44, 59, 1, 64, 4, 3, 59, 102, 108, 8352, 8354, 8358, 1, 8705, 110, 59, 1, 8728, 101, 4, 2, 109, 120, 8365, 8371, 101, 110, 116, 59, 1, 8705, 101, 115, 59, 1, 8450, 4, 2, 103, 105, 8382, 8395, 4, 2, 59, 100, 8388, 8390, 1, 8773, 111, 116, 59, 1, 10861, 110, 116, 59, 1, 8750, 4, 3, 102, 114, 121, 8408, 8412, 8417, 59, 3, 55349, 56660, 111, 100, 59, 1, 8720, 5, 169, 2, 59, 115, 8424, 8426, 1, 169, 114, 59, 1, 8471, 4, 2, 97, 111, 8436, 8441, 114, 114, 59, 1, 8629, 115, 115, 59, 1, 10007, 4, 2, 99, 117, 8452, 8457, 114, 59, 3, 55349, 56504, 4, 2, 98, 112, 8463, 8474, 4, 2, 59, 101, 8469, 8471, 1, 10959, 59, 1, 10961, 4, 2, 59, 101, 8480, 8482, 1, 10960, 59, 1, 10962, 100, 111, 116, 59, 1, 8943, 4, 7, 100, 101, 108, 112, 114, 118, 119, 8507, 8522, 8536, 8550, 8600, 8697, 8702, 97, 114, 114, 4, 2, 108, 114, 8516, 8519, 59, 1, 10552, 59, 1, 10549, 4, 2, 112, 115, 8528, 8532, 114, 59, 1, 8926, 99, 59, 1, 8927, 97, 114, 114, 4, 2, 59, 112, 8545, 8547, 1, 8630, 59, 1, 10557, 4, 6, 59, 98, 99, 100, 111, 115, 8564, 8566, 8573, 8587, 8592, 8596, 1, 8746, 114, 99, 97, 112, 59, 1, 10824, 4, 2, 97, 117, 8579, 8583, 112, 59, 1, 10822, 112, 59, 1, 10826, 111, 116, 59, 1, 8845, 114, 59, 1, 10821, 59, 3, 8746, 65024, 4, 4, 97, 108, 114, 118, 8610, 8623, 8663, 8672, 114, 114, 4, 2, 59, 109, 8618, 8620, 1, 8631, 59, 1, 10556, 121, 4, 3, 101, 118, 119, 8632, 8651, 8656, 113, 4, 2, 112, 115, 8639, 8645, 114, 101, 99, 59, 1, 8926, 117, 99, 99, 59, 1, 8927, 101, 101, 59, 1, 8910, 101, 100, 103, 101, 59, 1, 8911, 101, 110, 5, 164, 1, 59, 8670, 1, 164, 101, 97, 114, 114, 111, 119, 4, 2, 108, 114, 8684, 8690, 101, 102, 116, 59, 1, 8630, 105, 103, 104, 116, 59, 1, 8631, 101, 101, 59, 1, 8910, 101, 100, 59, 1, 8911, 4, 2, 99, 105, 8713, 8721, 111, 110, 105, 110, 116, 59, 1, 8754, 110, 116, 59, 1, 8753, 108, 99, 116, 121, 59, 1, 9005, 4, 19, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 8773, 8778, 8783, 8821, 8839, 8854, 8887, 8914, 8930, 8944, 9036, 9041, 9058, 9197, 9227, 9258, 9281, 9297, 9305, 114, 114, 59, 1, 8659, 97, 114, 59, 1, 10597, 4, 4, 103, 108, 114, 115, 8793, 8799, 8805, 8809, 103, 101, 114, 59, 1, 8224, 101, 116, 104, 59, 1, 8504, 114, 59, 1, 8595, 104, 4, 2, 59, 118, 8816, 8818, 1, 8208, 59, 1, 8867, 4, 2, 107, 108, 8827, 8834, 97, 114, 111, 119, 59, 1, 10511, 97, 99, 59, 1, 733, 4, 2, 97, 121, 8845, 8851, 114, 111, 110, 59, 1, 271, 59, 1, 1076, 4, 3, 59, 97, 111, 8862, 8864, 8880, 1, 8518, 4, 2, 103, 114, 8870, 8876, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8650, 116, 115, 101, 113, 59, 1, 10871, 4, 3, 103, 108, 109, 8895, 8902, 8907, 5, 176, 1, 59, 8900, 1, 176, 116, 97, 59, 1, 948, 112, 116, 121, 118, 59, 1, 10673, 4, 2, 105, 114, 8920, 8926, 115, 104, 116, 59, 1, 10623, 59, 3, 55349, 56609, 97, 114, 4, 2, 108, 114, 8938, 8941, 59, 1, 8643, 59, 1, 8642, 4, 5, 97, 101, 103, 115, 118, 8956, 8986, 8989, 8996, 9001, 109, 4, 3, 59, 111, 115, 8965, 8967, 8983, 1, 8900, 110, 100, 4, 2, 59, 115, 8975, 8977, 1, 8900, 117, 105, 116, 59, 1, 9830, 59, 1, 9830, 59, 1, 168, 97, 109, 109, 97, 59, 1, 989, 105, 110, 59, 1, 8946, 4, 3, 59, 105, 111, 9009, 9011, 9031, 1, 247, 100, 101, 5, 247, 2, 59, 111, 9020, 9022, 1, 247, 110, 116, 105, 109, 101, 115, 59, 1, 8903, 110, 120, 59, 1, 8903, 99, 121, 59, 1, 1106, 99, 4, 2, 111, 114, 9048, 9053, 114, 110, 59, 1, 8990, 111, 112, 59, 1, 8973, 4, 5, 108, 112, 116, 117, 119, 9070, 9076, 9081, 9130, 9144, 108, 97, 114, 59, 1, 36, 102, 59, 3, 55349, 56661, 4, 5, 59, 101, 109, 112, 115, 9093, 9095, 9109, 9116, 9122, 1, 729, 113, 4, 2, 59, 100, 9102, 9104, 1, 8784, 111, 116, 59, 1, 8785, 105, 110, 117, 115, 59, 1, 8760, 108, 117, 115, 59, 1, 8724, 113, 117, 97, 114, 101, 59, 1, 8865, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101, 59, 1, 8966, 110, 4, 3, 97, 100, 104, 9153, 9160, 9172, 114, 114, 111, 119, 59, 1, 8595, 111, 119, 110, 97, 114, 114, 111, 119, 115, 59, 1, 8650, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 9184, 9190, 101, 102, 116, 59, 1, 8643, 105, 103, 104, 116, 59, 1, 8642, 4, 2, 98, 99, 9203, 9211, 107, 97, 114, 111, 119, 59, 1, 10512, 4, 2, 111, 114, 9217, 9222, 114, 110, 59, 1, 8991, 111, 112, 59, 1, 8972, 4, 3, 99, 111, 116, 9235, 9248, 9252, 4, 2, 114, 121, 9241, 9245, 59, 3, 55349, 56505, 59, 1, 1109, 108, 59, 1, 10742, 114, 111, 107, 59, 1, 273, 4, 2, 100, 114, 9264, 9269, 111, 116, 59, 1, 8945, 105, 4, 2, 59, 102, 9276, 9278, 1, 9663, 59, 1, 9662, 4, 2, 97, 104, 9287, 9292, 114, 114, 59, 1, 8693, 97, 114, 59, 1, 10607, 97, 110, 103, 108, 101, 59, 1, 10662, 4, 2, 99, 105, 9311, 9315, 121, 59, 1, 1119, 103, 114, 97, 114, 114, 59, 1, 10239, 4, 18, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 9361, 9376, 9398, 9439, 9444, 9447, 9462, 9495, 9531, 9585, 9598, 9614, 9659, 9755, 9771, 9792, 9808, 9826, 4, 2, 68, 111, 9367, 9372, 111, 116, 59, 1, 10871, 116, 59, 1, 8785, 4, 2, 99, 115, 9382, 9392, 117, 116, 101, 5, 233, 1, 59, 9390, 1, 233, 116, 101, 114, 59, 1, 10862, 4, 4, 97, 105, 111, 121, 9408, 9414, 9430, 9436, 114, 111, 110, 59, 1, 283, 114, 4, 2, 59, 99, 9421, 9423, 1, 8790, 5, 234, 1, 59, 9428, 1, 234, 108, 111, 110, 59, 1, 8789, 59, 1, 1101, 111, 116, 59, 1, 279, 59, 1, 8519, 4, 2, 68, 114, 9453, 9458, 111, 116, 59, 1, 8786, 59, 3, 55349, 56610, 4, 3, 59, 114, 115, 9470, 9472, 9482, 1, 10906, 97, 118, 101, 5, 232, 1, 59, 9480, 1, 232, 4, 2, 59, 100, 9488, 9490, 1, 10902, 111, 116, 59, 1, 10904, 4, 4, 59, 105, 108, 115, 9505, 9507, 9515, 9518, 1, 10905, 110, 116, 101, 114, 115, 59, 1, 9191, 59, 1, 8467, 4, 2, 59, 100, 9524, 9526, 1, 10901, 111, 116, 59, 1, 10903, 4, 3, 97, 112, 115, 9539, 9544, 9564, 99, 114, 59, 1, 275, 116, 121, 4, 3, 59, 115, 118, 9554, 9556, 9561, 1, 8709, 101, 116, 59, 1, 8709, 59, 1, 8709, 112, 4, 2, 49, 59, 9571, 9583, 4, 2, 51, 52, 9577, 9580, 59, 1, 8196, 59, 1, 8197, 1, 8195, 4, 2, 103, 115, 9591, 9594, 59, 1, 331, 112, 59, 1, 8194, 4, 2, 103, 112, 9604, 9609, 111, 110, 59, 1, 281, 102, 59, 3, 55349, 56662, 4, 3, 97, 108, 115, 9622, 9635, 9640, 114, 4, 2, 59, 115, 9629, 9631, 1, 8917, 108, 59, 1, 10723, 117, 115, 59, 1, 10865, 105, 4, 3, 59, 108, 118, 9649, 9651, 9656, 1, 949, 111, 110, 59, 1, 949, 59, 1, 1013, 4, 4, 99, 115, 117, 118, 9669, 9686, 9716, 9747, 4, 2, 105, 111, 9675, 9680, 114, 99, 59, 1, 8790, 108, 111, 110, 59, 1, 8789, 4, 2, 105, 108, 9692, 9696, 109, 59, 1, 8770, 97, 110, 116, 4, 2, 103, 108, 9705, 9710, 116, 114, 59, 1, 10902, 101, 115, 115, 59, 1, 10901, 4, 3, 97, 101, 105, 9724, 9729, 9734, 108, 115, 59, 1, 61, 115, 116, 59, 1, 8799, 118, 4, 2, 59, 68, 9741, 9743, 1, 8801, 68, 59, 1, 10872, 112, 97, 114, 115, 108, 59, 1, 10725, 4, 2, 68, 97, 9761, 9766, 111, 116, 59, 1, 8787, 114, 114, 59, 1, 10609, 4, 3, 99, 100, 105, 9779, 9783, 9788, 114, 59, 1, 8495, 111, 116, 59, 1, 8784, 109, 59, 1, 8770, 4, 2, 97, 104, 9798, 9801, 59, 1, 951, 5, 240, 1, 59, 9806, 1, 240, 4, 2, 109, 114, 9814, 9822, 108, 5, 235, 1, 59, 9820, 1, 235, 111, 59, 1, 8364, 4, 3, 99, 105, 112, 9834, 9838, 9843, 108, 59, 1, 33, 115, 116, 59, 1, 8707, 4, 2, 101, 111, 9849, 9859, 99, 116, 97, 116, 105, 111, 110, 59, 1, 8496, 110, 101, 110, 116, 105, 97, 108, 101, 59, 1, 8519, 4, 12, 97, 99, 101, 102, 105, 106, 108, 110, 111, 112, 114, 115, 9896, 9910, 9914, 9921, 9954, 9960, 9967, 9989, 9994, 10027, 10036, 10164, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8786, 121, 59, 1, 1092, 109, 97, 108, 101, 59, 1, 9792, 4, 3, 105, 108, 114, 9929, 9935, 9950, 108, 105, 103, 59, 1, 64259, 4, 2, 105, 108, 9941, 9945, 103, 59, 1, 64256, 105, 103, 59, 1, 64260, 59, 3, 55349, 56611, 108, 105, 103, 59, 1, 64257, 108, 105, 103, 59, 3, 102, 106, 4, 3, 97, 108, 116, 9975, 9979, 9984, 116, 59, 1, 9837, 105, 103, 59, 1, 64258, 110, 115, 59, 1, 9649, 111, 102, 59, 1, 402, 4, 2, 112, 114, 1e4, 10005, 102, 59, 3, 55349, 56663, 4, 2, 97, 107, 10011, 10016, 108, 108, 59, 1, 8704, 4, 2, 59, 118, 10022, 10024, 1, 8916, 59, 1, 10969, 97, 114, 116, 105, 110, 116, 59, 1, 10765, 4, 2, 97, 111, 10042, 10159, 4, 2, 99, 115, 10048, 10155, 4, 6, 49, 50, 51, 52, 53, 55, 10062, 10102, 10114, 10135, 10139, 10151, 4, 6, 50, 51, 52, 53, 54, 56, 10076, 10083, 10086, 10093, 10096, 10099, 5, 189, 1, 59, 10081, 1, 189, 59, 1, 8531, 5, 188, 1, 59, 10091, 1, 188, 59, 1, 8533, 59, 1, 8537, 59, 1, 8539, 4, 2, 51, 53, 10108, 10111, 59, 1, 8532, 59, 1, 8534, 4, 3, 52, 53, 56, 10122, 10129, 10132, 5, 190, 1, 59, 10127, 1, 190, 59, 1, 8535, 59, 1, 8540, 53, 59, 1, 8536, 4, 2, 54, 56, 10145, 10148, 59, 1, 8538, 59, 1, 8541, 56, 59, 1, 8542, 108, 59, 1, 8260, 119, 110, 59, 1, 8994, 99, 114, 59, 3, 55349, 56507, 4, 17, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 10206, 10217, 10247, 10254, 10268, 10273, 10358, 10363, 10374, 10380, 10385, 10406, 10458, 10464, 10470, 10497, 10610, 4, 2, 59, 108, 10212, 10214, 1, 8807, 59, 1, 10892, 4, 3, 99, 109, 112, 10225, 10231, 10244, 117, 116, 101, 59, 1, 501, 109, 97, 4, 2, 59, 100, 10239, 10241, 1, 947, 59, 1, 989, 59, 1, 10886, 114, 101, 118, 101, 59, 1, 287, 4, 2, 105, 121, 10260, 10265, 114, 99, 59, 1, 285, 59, 1, 1075, 111, 116, 59, 1, 289, 4, 4, 59, 108, 113, 115, 10283, 10285, 10288, 10308, 1, 8805, 59, 1, 8923, 4, 3, 59, 113, 115, 10296, 10298, 10301, 1, 8805, 59, 1, 8807, 108, 97, 110, 116, 59, 1, 10878, 4, 4, 59, 99, 100, 108, 10318, 10320, 10324, 10345, 1, 10878, 99, 59, 1, 10921, 111, 116, 4, 2, 59, 111, 10332, 10334, 1, 10880, 4, 2, 59, 108, 10340, 10342, 1, 10882, 59, 1, 10884, 4, 2, 59, 101, 10351, 10354, 3, 8923, 65024, 115, 59, 1, 10900, 114, 59, 3, 55349, 56612, 4, 2, 59, 103, 10369, 10371, 1, 8811, 59, 1, 8921, 109, 101, 108, 59, 1, 8503, 99, 121, 59, 1, 1107, 4, 4, 59, 69, 97, 106, 10395, 10397, 10400, 10403, 1, 8823, 59, 1, 10898, 59, 1, 10917, 59, 1, 10916, 4, 4, 69, 97, 101, 115, 10416, 10419, 10434, 10453, 59, 1, 8809, 112, 4, 2, 59, 112, 10426, 10428, 1, 10890, 114, 111, 120, 59, 1, 10890, 4, 2, 59, 113, 10440, 10442, 1, 10888, 4, 2, 59, 113, 10448, 10450, 1, 10888, 59, 1, 8809, 105, 109, 59, 1, 8935, 112, 102, 59, 3, 55349, 56664, 97, 118, 101, 59, 1, 96, 4, 2, 99, 105, 10476, 10480, 114, 59, 1, 8458, 109, 4, 3, 59, 101, 108, 10489, 10491, 10494, 1, 8819, 59, 1, 10894, 59, 1, 10896, 5, 62, 6, 59, 99, 100, 108, 113, 114, 10512, 10514, 10527, 10532, 10538, 10545, 1, 62, 4, 2, 99, 105, 10520, 10523, 59, 1, 10919, 114, 59, 1, 10874, 111, 116, 59, 1, 8919, 80, 97, 114, 59, 1, 10645, 117, 101, 115, 116, 59, 1, 10876, 4, 5, 97, 100, 101, 108, 115, 10557, 10574, 10579, 10599, 10605, 4, 2, 112, 114, 10563, 10570, 112, 114, 111, 120, 59, 1, 10886, 114, 59, 1, 10616, 111, 116, 59, 1, 8919, 113, 4, 2, 108, 113, 10586, 10592, 101, 115, 115, 59, 1, 8923, 108, 101, 115, 115, 59, 1, 10892, 101, 115, 115, 59, 1, 8823, 105, 109, 59, 1, 8819, 4, 2, 101, 110, 10616, 10626, 114, 116, 110, 101, 113, 113, 59, 3, 8809, 65024, 69, 59, 3, 8809, 65024, 4, 10, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 10653, 10658, 10713, 10718, 10724, 10760, 10765, 10786, 10850, 10875, 114, 114, 59, 1, 8660, 4, 4, 105, 108, 109, 114, 10668, 10674, 10678, 10684, 114, 115, 112, 59, 1, 8202, 102, 59, 1, 189, 105, 108, 116, 59, 1, 8459, 4, 2, 100, 114, 10690, 10695, 99, 121, 59, 1, 1098, 4, 3, 59, 99, 119, 10703, 10705, 10710, 1, 8596, 105, 114, 59, 1, 10568, 59, 1, 8621, 97, 114, 59, 1, 8463, 105, 114, 99, 59, 1, 293, 4, 3, 97, 108, 114, 10732, 10748, 10754, 114, 116, 115, 4, 2, 59, 117, 10741, 10743, 1, 9829, 105, 116, 59, 1, 9829, 108, 105, 112, 59, 1, 8230, 99, 111, 110, 59, 1, 8889, 114, 59, 3, 55349, 56613, 115, 4, 2, 101, 119, 10772, 10779, 97, 114, 111, 119, 59, 1, 10533, 97, 114, 111, 119, 59, 1, 10534, 4, 5, 97, 109, 111, 112, 114, 10798, 10803, 10809, 10839, 10844, 114, 114, 59, 1, 8703, 116, 104, 116, 59, 1, 8763, 107, 4, 2, 108, 114, 10816, 10827, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8617, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8618, 102, 59, 3, 55349, 56665, 98, 97, 114, 59, 1, 8213, 4, 3, 99, 108, 116, 10858, 10863, 10869, 114, 59, 3, 55349, 56509, 97, 115, 104, 59, 1, 8463, 114, 111, 107, 59, 1, 295, 4, 2, 98, 112, 10881, 10887, 117, 108, 108, 59, 1, 8259, 104, 101, 110, 59, 1, 8208, 4, 15, 97, 99, 101, 102, 103, 105, 106, 109, 110, 111, 112, 113, 115, 116, 117, 10925, 10936, 10958, 10977, 10990, 11001, 11039, 11045, 11101, 11192, 11220, 11226, 11237, 11285, 11299, 99, 117, 116, 101, 5, 237, 1, 59, 10934, 1, 237, 4, 3, 59, 105, 121, 10944, 10946, 10955, 1, 8291, 114, 99, 5, 238, 1, 59, 10953, 1, 238, 59, 1, 1080, 4, 2, 99, 120, 10964, 10968, 121, 59, 1, 1077, 99, 108, 5, 161, 1, 59, 10975, 1, 161, 4, 2, 102, 114, 10983, 10986, 59, 1, 8660, 59, 3, 55349, 56614, 114, 97, 118, 101, 5, 236, 1, 59, 10999, 1, 236, 4, 4, 59, 105, 110, 111, 11011, 11013, 11028, 11034, 1, 8520, 4, 2, 105, 110, 11019, 11024, 110, 116, 59, 1, 10764, 116, 59, 1, 8749, 102, 105, 110, 59, 1, 10716, 116, 97, 59, 1, 8489, 108, 105, 103, 59, 1, 307, 4, 3, 97, 111, 112, 11053, 11092, 11096, 4, 3, 99, 103, 116, 11061, 11065, 11088, 114, 59, 1, 299, 4, 3, 101, 108, 112, 11073, 11076, 11082, 59, 1, 8465, 105, 110, 101, 59, 1, 8464, 97, 114, 116, 59, 1, 8465, 104, 59, 1, 305, 102, 59, 1, 8887, 101, 100, 59, 1, 437, 4, 5, 59, 99, 102, 111, 116, 11113, 11115, 11121, 11136, 11142, 1, 8712, 97, 114, 101, 59, 1, 8453, 105, 110, 4, 2, 59, 116, 11129, 11131, 1, 8734, 105, 101, 59, 1, 10717, 100, 111, 116, 59, 1, 305, 4, 5, 59, 99, 101, 108, 112, 11154, 11156, 11161, 11179, 11186, 1, 8747, 97, 108, 59, 1, 8890, 4, 2, 103, 114, 11167, 11173, 101, 114, 115, 59, 1, 8484, 99, 97, 108, 59, 1, 8890, 97, 114, 104, 107, 59, 1, 10775, 114, 111, 100, 59, 1, 10812, 4, 4, 99, 103, 112, 116, 11202, 11206, 11211, 11216, 121, 59, 1, 1105, 111, 110, 59, 1, 303, 102, 59, 3, 55349, 56666, 97, 59, 1, 953, 114, 111, 100, 59, 1, 10812, 117, 101, 115, 116, 5, 191, 1, 59, 11235, 1, 191, 4, 2, 99, 105, 11243, 11248, 114, 59, 3, 55349, 56510, 110, 4, 5, 59, 69, 100, 115, 118, 11261, 11263, 11266, 11271, 11282, 1, 8712, 59, 1, 8953, 111, 116, 59, 1, 8949, 4, 2, 59, 118, 11277, 11279, 1, 8948, 59, 1, 8947, 59, 1, 8712, 4, 2, 59, 105, 11291, 11293, 1, 8290, 108, 100, 101, 59, 1, 297, 4, 2, 107, 109, 11305, 11310, 99, 121, 59, 1, 1110, 108, 5, 239, 1, 59, 11316, 1, 239, 4, 6, 99, 102, 109, 111, 115, 117, 11332, 11346, 11351, 11357, 11363, 11380, 4, 2, 105, 121, 11338, 11343, 114, 99, 59, 1, 309, 59, 1, 1081, 114, 59, 3, 55349, 56615, 97, 116, 104, 59, 1, 567, 112, 102, 59, 3, 55349, 56667, 4, 2, 99, 101, 11369, 11374, 114, 59, 3, 55349, 56511, 114, 99, 121, 59, 1, 1112, 107, 99, 121, 59, 1, 1108, 4, 8, 97, 99, 102, 103, 104, 106, 111, 115, 11404, 11418, 11433, 11438, 11445, 11450, 11455, 11461, 112, 112, 97, 4, 2, 59, 118, 11413, 11415, 1, 954, 59, 1, 1008, 4, 2, 101, 121, 11424, 11430, 100, 105, 108, 59, 1, 311, 59, 1, 1082, 114, 59, 3, 55349, 56616, 114, 101, 101, 110, 59, 1, 312, 99, 121, 59, 1, 1093, 99, 121, 59, 1, 1116, 112, 102, 59, 3, 55349, 56668, 99, 114, 59, 3, 55349, 56512, 4, 23, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 11515, 11538, 11544, 11555, 11560, 11721, 11780, 11818, 11868, 12136, 12160, 12171, 12203, 12208, 12246, 12275, 12327, 12509, 12523, 12569, 12641, 12732, 12752, 4, 3, 97, 114, 116, 11523, 11528, 11532, 114, 114, 59, 1, 8666, 114, 59, 1, 8656, 97, 105, 108, 59, 1, 10523, 97, 114, 114, 59, 1, 10510, 4, 2, 59, 103, 11550, 11552, 1, 8806, 59, 1, 10891, 97, 114, 59, 1, 10594, 4, 9, 99, 101, 103, 109, 110, 112, 113, 114, 116, 11580, 11586, 11594, 11600, 11606, 11624, 11627, 11636, 11694, 117, 116, 101, 59, 1, 314, 109, 112, 116, 121, 118, 59, 1, 10676, 114, 97, 110, 59, 1, 8466, 98, 100, 97, 59, 1, 955, 103, 4, 3, 59, 100, 108, 11615, 11617, 11620, 1, 10216, 59, 1, 10641, 101, 59, 1, 10216, 59, 1, 10885, 117, 111, 5, 171, 1, 59, 11634, 1, 171, 114, 4, 8, 59, 98, 102, 104, 108, 112, 115, 116, 11655, 11657, 11669, 11673, 11677, 11681, 11685, 11690, 1, 8592, 4, 2, 59, 102, 11663, 11665, 1, 8676, 115, 59, 1, 10527, 115, 59, 1, 10525, 107, 59, 1, 8617, 112, 59, 1, 8619, 108, 59, 1, 10553, 105, 109, 59, 1, 10611, 108, 59, 1, 8610, 4, 3, 59, 97, 101, 11702, 11704, 11709, 1, 10923, 105, 108, 59, 1, 10521, 4, 2, 59, 115, 11715, 11717, 1, 10925, 59, 3, 10925, 65024, 4, 3, 97, 98, 114, 11729, 11734, 11739, 114, 114, 59, 1, 10508, 114, 107, 59, 1, 10098, 4, 2, 97, 107, 11745, 11758, 99, 4, 2, 101, 107, 11752, 11755, 59, 1, 123, 59, 1, 91, 4, 2, 101, 115, 11764, 11767, 59, 1, 10635, 108, 4, 2, 100, 117, 11774, 11777, 59, 1, 10639, 59, 1, 10637, 4, 4, 97, 101, 117, 121, 11790, 11796, 11811, 11815, 114, 111, 110, 59, 1, 318, 4, 2, 100, 105, 11802, 11807, 105, 108, 59, 1, 316, 108, 59, 1, 8968, 98, 59, 1, 123, 59, 1, 1083, 4, 4, 99, 113, 114, 115, 11828, 11832, 11845, 11864, 97, 59, 1, 10550, 117, 111, 4, 2, 59, 114, 11840, 11842, 1, 8220, 59, 1, 8222, 4, 2, 100, 117, 11851, 11857, 104, 97, 114, 59, 1, 10599, 115, 104, 97, 114, 59, 1, 10571, 104, 59, 1, 8626, 4, 5, 59, 102, 103, 113, 115, 11880, 11882, 12008, 12011, 12031, 1, 8804, 116, 4, 5, 97, 104, 108, 114, 116, 11895, 11913, 11935, 11947, 11996, 114, 114, 111, 119, 4, 2, 59, 116, 11905, 11907, 1, 8592, 97, 105, 108, 59, 1, 8610, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 11925, 11931, 111, 119, 110, 59, 1, 8637, 112, 59, 1, 8636, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8647, 105, 103, 104, 116, 4, 3, 97, 104, 115, 11959, 11974, 11984, 114, 114, 111, 119, 4, 2, 59, 115, 11969, 11971, 1, 8596, 59, 1, 8646, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8651, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8621, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8907, 59, 1, 8922, 4, 3, 59, 113, 115, 12019, 12021, 12024, 1, 8804, 59, 1, 8806, 108, 97, 110, 116, 59, 1, 10877, 4, 5, 59, 99, 100, 103, 115, 12043, 12045, 12049, 12070, 12083, 1, 10877, 99, 59, 1, 10920, 111, 116, 4, 2, 59, 111, 12057, 12059, 1, 10879, 4, 2, 59, 114, 12065, 12067, 1, 10881, 59, 1, 10883, 4, 2, 59, 101, 12076, 12079, 3, 8922, 65024, 115, 59, 1, 10899, 4, 5, 97, 100, 101, 103, 115, 12095, 12103, 12108, 12126, 12131, 112, 112, 114, 111, 120, 59, 1, 10885, 111, 116, 59, 1, 8918, 113, 4, 2, 103, 113, 12115, 12120, 116, 114, 59, 1, 8922, 103, 116, 114, 59, 1, 10891, 116, 114, 59, 1, 8822, 105, 109, 59, 1, 8818, 4, 3, 105, 108, 114, 12144, 12150, 12156, 115, 104, 116, 59, 1, 10620, 111, 111, 114, 59, 1, 8970, 59, 3, 55349, 56617, 4, 2, 59, 69, 12166, 12168, 1, 8822, 59, 1, 10897, 4, 2, 97, 98, 12177, 12198, 114, 4, 2, 100, 117, 12184, 12187, 59, 1, 8637, 4, 2, 59, 108, 12193, 12195, 1, 8636, 59, 1, 10602, 108, 107, 59, 1, 9604, 99, 121, 59, 1, 1113, 4, 5, 59, 97, 99, 104, 116, 12220, 12222, 12227, 12235, 12241, 1, 8810, 114, 114, 59, 1, 8647, 111, 114, 110, 101, 114, 59, 1, 8990, 97, 114, 100, 59, 1, 10603, 114, 105, 59, 1, 9722, 4, 2, 105, 111, 12252, 12258, 100, 111, 116, 59, 1, 320, 117, 115, 116, 4, 2, 59, 97, 12267, 12269, 1, 9136, 99, 104, 101, 59, 1, 9136, 4, 4, 69, 97, 101, 115, 12285, 12288, 12303, 12322, 59, 1, 8808, 112, 4, 2, 59, 112, 12295, 12297, 1, 10889, 114, 111, 120, 59, 1, 10889, 4, 2, 59, 113, 12309, 12311, 1, 10887, 4, 2, 59, 113, 12317, 12319, 1, 10887, 59, 1, 8808, 105, 109, 59, 1, 8934, 4, 8, 97, 98, 110, 111, 112, 116, 119, 122, 12345, 12359, 12364, 12421, 12446, 12467, 12474, 12490, 4, 2, 110, 114, 12351, 12355, 103, 59, 1, 10220, 114, 59, 1, 8701, 114, 107, 59, 1, 10214, 103, 4, 3, 108, 109, 114, 12373, 12401, 12409, 101, 102, 116, 4, 2, 97, 114, 12382, 12389, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10231, 97, 112, 115, 116, 111, 59, 1, 10236, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10230, 112, 97, 114, 114, 111, 119, 4, 2, 108, 114, 12433, 12439, 101, 102, 116, 59, 1, 8619, 105, 103, 104, 116, 59, 1, 8620, 4, 3, 97, 102, 108, 12454, 12458, 12462, 114, 59, 1, 10629, 59, 3, 55349, 56669, 117, 115, 59, 1, 10797, 105, 109, 101, 115, 59, 1, 10804, 4, 2, 97, 98, 12480, 12485, 115, 116, 59, 1, 8727, 97, 114, 59, 1, 95, 4, 3, 59, 101, 102, 12498, 12500, 12506, 1, 9674, 110, 103, 101, 59, 1, 9674, 59, 1, 10731, 97, 114, 4, 2, 59, 108, 12517, 12519, 1, 40, 116, 59, 1, 10643, 4, 5, 97, 99, 104, 109, 116, 12535, 12540, 12548, 12561, 12564, 114, 114, 59, 1, 8646, 111, 114, 110, 101, 114, 59, 1, 8991, 97, 114, 4, 2, 59, 100, 12556, 12558, 1, 8651, 59, 1, 10605, 59, 1, 8206, 114, 105, 59, 1, 8895, 4, 6, 97, 99, 104, 105, 113, 116, 12583, 12589, 12594, 12597, 12614, 12635, 113, 117, 111, 59, 1, 8249, 114, 59, 3, 55349, 56513, 59, 1, 8624, 109, 4, 3, 59, 101, 103, 12606, 12608, 12611, 1, 8818, 59, 1, 10893, 59, 1, 10895, 4, 2, 98, 117, 12620, 12623, 59, 1, 91, 111, 4, 2, 59, 114, 12630, 12632, 1, 8216, 59, 1, 8218, 114, 111, 107, 59, 1, 322, 5, 60, 8, 59, 99, 100, 104, 105, 108, 113, 114, 12660, 12662, 12675, 12680, 12686, 12692, 12698, 12705, 1, 60, 4, 2, 99, 105, 12668, 12671, 59, 1, 10918, 114, 59, 1, 10873, 111, 116, 59, 1, 8918, 114, 101, 101, 59, 1, 8907, 109, 101, 115, 59, 1, 8905, 97, 114, 114, 59, 1, 10614, 117, 101, 115, 116, 59, 1, 10875, 4, 2, 80, 105, 12711, 12716, 97, 114, 59, 1, 10646, 4, 3, 59, 101, 102, 12724, 12726, 12729, 1, 9667, 59, 1, 8884, 59, 1, 9666, 114, 4, 2, 100, 117, 12739, 12746, 115, 104, 97, 114, 59, 1, 10570, 104, 97, 114, 59, 1, 10598, 4, 2, 101, 110, 12758, 12768, 114, 116, 110, 101, 113, 113, 59, 3, 8808, 65024, 69, 59, 3, 8808, 65024, 4, 14, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 12803, 12809, 12893, 12908, 12914, 12928, 12933, 12937, 13011, 13025, 13032, 13049, 13052, 13069, 68, 111, 116, 59, 1, 8762, 4, 4, 99, 108, 112, 114, 12819, 12827, 12849, 12887, 114, 5, 175, 1, 59, 12825, 1, 175, 4, 2, 101, 116, 12833, 12836, 59, 1, 9794, 4, 2, 59, 101, 12842, 12844, 1, 10016, 115, 101, 59, 1, 10016, 4, 2, 59, 115, 12855, 12857, 1, 8614, 116, 111, 4, 4, 59, 100, 108, 117, 12869, 12871, 12877, 12883, 1, 8614, 111, 119, 110, 59, 1, 8615, 101, 102, 116, 59, 1, 8612, 112, 59, 1, 8613, 107, 101, 114, 59, 1, 9646, 4, 2, 111, 121, 12899, 12905, 109, 109, 97, 59, 1, 10793, 59, 1, 1084, 97, 115, 104, 59, 1, 8212, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59, 1, 8737, 114, 59, 3, 55349, 56618, 111, 59, 1, 8487, 4, 3, 99, 100, 110, 12945, 12954, 12985, 114, 111, 5, 181, 1, 59, 12952, 1, 181, 4, 4, 59, 97, 99, 100, 12964, 12966, 12971, 12976, 1, 8739, 115, 116, 59, 1, 42, 105, 114, 59, 1, 10992, 111, 116, 5, 183, 1, 59, 12983, 1, 183, 117, 115, 4, 3, 59, 98, 100, 12995, 12997, 13e3, 1, 8722, 59, 1, 8863, 4, 2, 59, 117, 13006, 13008, 1, 8760, 59, 1, 10794, 4, 2, 99, 100, 13017, 13021, 112, 59, 1, 10971, 114, 59, 1, 8230, 112, 108, 117, 115, 59, 1, 8723, 4, 2, 100, 112, 13038, 13044, 101, 108, 115, 59, 1, 8871, 102, 59, 3, 55349, 56670, 59, 1, 8723, 4, 2, 99, 116, 13058, 13063, 114, 59, 3, 55349, 56514, 112, 111, 115, 59, 1, 8766, 4, 3, 59, 108, 109, 13077, 13079, 13087, 1, 956, 116, 105, 109, 97, 112, 59, 1, 8888, 97, 112, 59, 1, 8888, 4, 24, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 13142, 13165, 13217, 13229, 13247, 13330, 13359, 13414, 13420, 13508, 13513, 13579, 13602, 13626, 13631, 13762, 13767, 13855, 13936, 13995, 14214, 14285, 14312, 14432, 4, 2, 103, 116, 13148, 13152, 59, 3, 8921, 824, 4, 2, 59, 118, 13158, 13161, 3, 8811, 8402, 59, 3, 8811, 824, 4, 3, 101, 108, 116, 13173, 13200, 13204, 102, 116, 4, 2, 97, 114, 13181, 13188, 114, 114, 111, 119, 59, 1, 8653, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8654, 59, 3, 8920, 824, 4, 2, 59, 118, 13210, 13213, 3, 8810, 8402, 59, 3, 8810, 824, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8655, 4, 2, 68, 100, 13235, 13241, 97, 115, 104, 59, 1, 8879, 97, 115, 104, 59, 1, 8878, 4, 5, 98, 99, 110, 112, 116, 13259, 13264, 13270, 13275, 13308, 108, 97, 59, 1, 8711, 117, 116, 101, 59, 1, 324, 103, 59, 3, 8736, 8402, 4, 5, 59, 69, 105, 111, 112, 13287, 13289, 13293, 13298, 13302, 1, 8777, 59, 3, 10864, 824, 100, 59, 3, 8779, 824, 115, 59, 1, 329, 114, 111, 120, 59, 1, 8777, 117, 114, 4, 2, 59, 97, 13316, 13318, 1, 9838, 108, 4, 2, 59, 115, 13325, 13327, 1, 9838, 59, 1, 8469, 4, 2, 115, 117, 13336, 13344, 112, 5, 160, 1, 59, 13342, 1, 160, 109, 112, 4, 2, 59, 101, 13352, 13355, 3, 8782, 824, 59, 3, 8783, 824, 4, 5, 97, 101, 111, 117, 121, 13371, 13385, 13391, 13407, 13411, 4, 2, 112, 114, 13377, 13380, 59, 1, 10819, 111, 110, 59, 1, 328, 100, 105, 108, 59, 1, 326, 110, 103, 4, 2, 59, 100, 13399, 13401, 1, 8775, 111, 116, 59, 3, 10861, 824, 112, 59, 1, 10818, 59, 1, 1085, 97, 115, 104, 59, 1, 8211, 4, 7, 59, 65, 97, 100, 113, 115, 120, 13436, 13438, 13443, 13466, 13472, 13478, 13494, 1, 8800, 114, 114, 59, 1, 8663, 114, 4, 2, 104, 114, 13450, 13454, 107, 59, 1, 10532, 4, 2, 59, 111, 13460, 13462, 1, 8599, 119, 59, 1, 8599, 111, 116, 59, 3, 8784, 824, 117, 105, 118, 59, 1, 8802, 4, 2, 101, 105, 13484, 13489, 97, 114, 59, 1, 10536, 109, 59, 3, 8770, 824, 105, 115, 116, 4, 2, 59, 115, 13503, 13505, 1, 8708, 59, 1, 8708, 114, 59, 3, 55349, 56619, 4, 4, 69, 101, 115, 116, 13523, 13527, 13563, 13568, 59, 3, 8807, 824, 4, 3, 59, 113, 115, 13535, 13537, 13559, 1, 8817, 4, 3, 59, 113, 115, 13545, 13547, 13551, 1, 8817, 59, 3, 8807, 824, 108, 97, 110, 116, 59, 3, 10878, 824, 59, 3, 10878, 824, 105, 109, 59, 1, 8821, 4, 2, 59, 114, 13574, 13576, 1, 8815, 59, 1, 8815, 4, 3, 65, 97, 112, 13587, 13592, 13597, 114, 114, 59, 1, 8654, 114, 114, 59, 1, 8622, 97, 114, 59, 1, 10994, 4, 3, 59, 115, 118, 13610, 13612, 13623, 1, 8715, 4, 2, 59, 100, 13618, 13620, 1, 8956, 59, 1, 8954, 59, 1, 8715, 99, 121, 59, 1, 1114, 4, 7, 65, 69, 97, 100, 101, 115, 116, 13647, 13652, 13656, 13661, 13665, 13737, 13742, 114, 114, 59, 1, 8653, 59, 3, 8806, 824, 114, 114, 59, 1, 8602, 114, 59, 1, 8229, 4, 4, 59, 102, 113, 115, 13675, 13677, 13703, 13725, 1, 8816, 116, 4, 2, 97, 114, 13684, 13691, 114, 114, 111, 119, 59, 1, 8602, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8622, 4, 3, 59, 113, 115, 13711, 13713, 13717, 1, 8816, 59, 3, 8806, 824, 108, 97, 110, 116, 59, 3, 10877, 824, 4, 2, 59, 115, 13731, 13734, 3, 10877, 824, 59, 1, 8814, 105, 109, 59, 1, 8820, 4, 2, 59, 114, 13748, 13750, 1, 8814, 105, 4, 2, 59, 101, 13757, 13759, 1, 8938, 59, 1, 8940, 105, 100, 59, 1, 8740, 4, 2, 112, 116, 13773, 13778, 102, 59, 3, 55349, 56671, 5, 172, 3, 59, 105, 110, 13787, 13789, 13829, 1, 172, 110, 4, 4, 59, 69, 100, 118, 13800, 13802, 13806, 13812, 1, 8713, 59, 3, 8953, 824, 111, 116, 59, 3, 8949, 824, 4, 3, 97, 98, 99, 13820, 13823, 13826, 59, 1, 8713, 59, 1, 8951, 59, 1, 8950, 105, 4, 2, 59, 118, 13836, 13838, 1, 8716, 4, 3, 97, 98, 99, 13846, 13849, 13852, 59, 1, 8716, 59, 1, 8958, 59, 1, 8957, 4, 3, 97, 111, 114, 13863, 13892, 13899, 114, 4, 4, 59, 97, 115, 116, 13874, 13876, 13883, 13888, 1, 8742, 108, 108, 101, 108, 59, 1, 8742, 108, 59, 3, 11005, 8421, 59, 3, 8706, 824, 108, 105, 110, 116, 59, 1, 10772, 4, 3, 59, 99, 101, 13907, 13909, 13914, 1, 8832, 117, 101, 59, 1, 8928, 4, 2, 59, 99, 13920, 13923, 3, 10927, 824, 4, 2, 59, 101, 13929, 13931, 1, 8832, 113, 59, 3, 10927, 824, 4, 4, 65, 97, 105, 116, 13946, 13951, 13971, 13982, 114, 114, 59, 1, 8655, 114, 114, 4, 3, 59, 99, 119, 13961, 13963, 13967, 1, 8603, 59, 3, 10547, 824, 59, 3, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8603, 114, 105, 4, 2, 59, 101, 13990, 13992, 1, 8939, 59, 1, 8941, 4, 7, 99, 104, 105, 109, 112, 113, 117, 14011, 14036, 14060, 14080, 14085, 14090, 14106, 4, 4, 59, 99, 101, 114, 14021, 14023, 14028, 14032, 1, 8833, 117, 101, 59, 1, 8929, 59, 3, 10928, 824, 59, 3, 55349, 56515, 111, 114, 116, 4, 2, 109, 112, 14045, 14050, 105, 100, 59, 1, 8740, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8742, 109, 4, 2, 59, 101, 14067, 14069, 1, 8769, 4, 2, 59, 113, 14075, 14077, 1, 8772, 59, 1, 8772, 105, 100, 59, 1, 8740, 97, 114, 59, 1, 8742, 115, 117, 4, 2, 98, 112, 14098, 14102, 101, 59, 1, 8930, 101, 59, 1, 8931, 4, 3, 98, 99, 112, 14114, 14157, 14171, 4, 4, 59, 69, 101, 115, 14124, 14126, 14130, 14133, 1, 8836, 59, 3, 10949, 824, 59, 1, 8840, 101, 116, 4, 2, 59, 101, 14141, 14144, 3, 8834, 8402, 113, 4, 2, 59, 113, 14151, 14153, 1, 8840, 59, 3, 10949, 824, 99, 4, 2, 59, 101, 14164, 14166, 1, 8833, 113, 59, 3, 10928, 824, 4, 4, 59, 69, 101, 115, 14181, 14183, 14187, 14190, 1, 8837, 59, 3, 10950, 824, 59, 1, 8841, 101, 116, 4, 2, 59, 101, 14198, 14201, 3, 8835, 8402, 113, 4, 2, 59, 113, 14208, 14210, 1, 8841, 59, 3, 10950, 824, 4, 4, 103, 105, 108, 114, 14224, 14228, 14238, 14242, 108, 59, 1, 8825, 108, 100, 101, 5, 241, 1, 59, 14236, 1, 241, 103, 59, 1, 8824, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 14254, 14269, 101, 102, 116, 4, 2, 59, 101, 14263, 14265, 1, 8938, 113, 59, 1, 8940, 105, 103, 104, 116, 4, 2, 59, 101, 14279, 14281, 1, 8939, 113, 59, 1, 8941, 4, 2, 59, 109, 14291, 14293, 1, 957, 4, 3, 59, 101, 115, 14301, 14303, 14308, 1, 35, 114, 111, 59, 1, 8470, 112, 59, 1, 8199, 4, 9, 68, 72, 97, 100, 103, 105, 108, 114, 115, 14332, 14338, 14344, 14349, 14355, 14369, 14376, 14408, 14426, 97, 115, 104, 59, 1, 8877, 97, 114, 114, 59, 1, 10500, 112, 59, 3, 8781, 8402, 97, 115, 104, 59, 1, 8876, 4, 2, 101, 116, 14361, 14365, 59, 3, 8805, 8402, 59, 3, 62, 8402, 110, 102, 105, 110, 59, 1, 10718, 4, 3, 65, 101, 116, 14384, 14389, 14393, 114, 114, 59, 1, 10498, 59, 3, 8804, 8402, 4, 2, 59, 114, 14399, 14402, 3, 60, 8402, 105, 101, 59, 3, 8884, 8402, 4, 2, 65, 116, 14414, 14419, 114, 114, 59, 1, 10499, 114, 105, 101, 59, 3, 8885, 8402, 105, 109, 59, 3, 8764, 8402, 4, 3, 65, 97, 110, 14440, 14445, 14468, 114, 114, 59, 1, 8662, 114, 4, 2, 104, 114, 14452, 14456, 107, 59, 1, 10531, 4, 2, 59, 111, 14462, 14464, 1, 8598, 119, 59, 1, 8598, 101, 97, 114, 59, 1, 10535, 4, 18, 83, 97, 99, 100, 101, 102, 103, 104, 105, 108, 109, 111, 112, 114, 115, 116, 117, 118, 14512, 14515, 14535, 14560, 14597, 14603, 14618, 14643, 14657, 14662, 14701, 14741, 14747, 14769, 14851, 14877, 14907, 14916, 59, 1, 9416, 4, 2, 99, 115, 14521, 14531, 117, 116, 101, 5, 243, 1, 59, 14529, 1, 243, 116, 59, 1, 8859, 4, 2, 105, 121, 14541, 14557, 114, 4, 2, 59, 99, 14548, 14550, 1, 8858, 5, 244, 1, 59, 14555, 1, 244, 59, 1, 1086, 4, 5, 97, 98, 105, 111, 115, 14572, 14577, 14583, 14587, 14591, 115, 104, 59, 1, 8861, 108, 97, 99, 59, 1, 337, 118, 59, 1, 10808, 116, 59, 1, 8857, 111, 108, 100, 59, 1, 10684, 108, 105, 103, 59, 1, 339, 4, 2, 99, 114, 14609, 14614, 105, 114, 59, 1, 10687, 59, 3, 55349, 56620, 4, 3, 111, 114, 116, 14626, 14630, 14640, 110, 59, 1, 731, 97, 118, 101, 5, 242, 1, 59, 14638, 1, 242, 59, 1, 10689, 4, 2, 98, 109, 14649, 14654, 97, 114, 59, 1, 10677, 59, 1, 937, 110, 116, 59, 1, 8750, 4, 4, 97, 99, 105, 116, 14672, 14677, 14693, 14698, 114, 114, 59, 1, 8634, 4, 2, 105, 114, 14683, 14687, 114, 59, 1, 10686, 111, 115, 115, 59, 1, 10683, 110, 101, 59, 1, 8254, 59, 1, 10688, 4, 3, 97, 101, 105, 14709, 14714, 14719, 99, 114, 59, 1, 333, 103, 97, 59, 1, 969, 4, 3, 99, 100, 110, 14727, 14733, 14736, 114, 111, 110, 59, 1, 959, 59, 1, 10678, 117, 115, 59, 1, 8854, 112, 102, 59, 3, 55349, 56672, 4, 3, 97, 101, 108, 14755, 14759, 14764, 114, 59, 1, 10679, 114, 112, 59, 1, 10681, 117, 115, 59, 1, 8853, 4, 7, 59, 97, 100, 105, 111, 115, 118, 14785, 14787, 14792, 14831, 14837, 14841, 14848, 1, 8744, 114, 114, 59, 1, 8635, 4, 4, 59, 101, 102, 109, 14802, 14804, 14817, 14824, 1, 10845, 114, 4, 2, 59, 111, 14811, 14813, 1, 8500, 102, 59, 1, 8500, 5, 170, 1, 59, 14822, 1, 170, 5, 186, 1, 59, 14829, 1, 186, 103, 111, 102, 59, 1, 8886, 114, 59, 1, 10838, 108, 111, 112, 101, 59, 1, 10839, 59, 1, 10843, 4, 3, 99, 108, 111, 14859, 14863, 14873, 114, 59, 1, 8500, 97, 115, 104, 5, 248, 1, 59, 14871, 1, 248, 108, 59, 1, 8856, 105, 4, 2, 108, 109, 14884, 14893, 100, 101, 5, 245, 1, 59, 14891, 1, 245, 101, 115, 4, 2, 59, 97, 14901, 14903, 1, 8855, 115, 59, 1, 10806, 109, 108, 5, 246, 1, 59, 14914, 1, 246, 98, 97, 114, 59, 1, 9021, 4, 12, 97, 99, 101, 102, 104, 105, 108, 109, 111, 114, 115, 117, 14948, 14992, 14996, 15033, 15038, 15068, 15090, 15189, 15192, 15222, 15427, 15441, 114, 4, 4, 59, 97, 115, 116, 14959, 14961, 14976, 14989, 1, 8741, 5, 182, 2, 59, 108, 14968, 14970, 1, 182, 108, 101, 108, 59, 1, 8741, 4, 2, 105, 108, 14982, 14986, 109, 59, 1, 10995, 59, 1, 11005, 59, 1, 8706, 121, 59, 1, 1087, 114, 4, 5, 99, 105, 109, 112, 116, 15009, 15014, 15019, 15024, 15027, 110, 116, 59, 1, 37, 111, 100, 59, 1, 46, 105, 108, 59, 1, 8240, 59, 1, 8869, 101, 110, 107, 59, 1, 8241, 114, 59, 3, 55349, 56621, 4, 3, 105, 109, 111, 15046, 15057, 15063, 4, 2, 59, 118, 15052, 15054, 1, 966, 59, 1, 981, 109, 97, 116, 59, 1, 8499, 110, 101, 59, 1, 9742, 4, 3, 59, 116, 118, 15076, 15078, 15087, 1, 960, 99, 104, 102, 111, 114, 107, 59, 1, 8916, 59, 1, 982, 4, 2, 97, 117, 15096, 15119, 110, 4, 2, 99, 107, 15103, 15115, 107, 4, 2, 59, 104, 15110, 15112, 1, 8463, 59, 1, 8462, 118, 59, 1, 8463, 115, 4, 9, 59, 97, 98, 99, 100, 101, 109, 115, 116, 15140, 15142, 15148, 15151, 15156, 15168, 15171, 15179, 15184, 1, 43, 99, 105, 114, 59, 1, 10787, 59, 1, 8862, 105, 114, 59, 1, 10786, 4, 2, 111, 117, 15162, 15165, 59, 1, 8724, 59, 1, 10789, 59, 1, 10866, 110, 5, 177, 1, 59, 15177, 1, 177, 105, 109, 59, 1, 10790, 119, 111, 59, 1, 10791, 59, 1, 177, 4, 3, 105, 112, 117, 15200, 15208, 15213, 110, 116, 105, 110, 116, 59, 1, 10773, 102, 59, 3, 55349, 56673, 110, 100, 5, 163, 1, 59, 15220, 1, 163, 4, 10, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 15244, 15246, 15249, 15253, 15258, 15334, 15347, 15367, 15416, 15421, 1, 8826, 59, 1, 10931, 112, 59, 1, 10935, 117, 101, 59, 1, 8828, 4, 2, 59, 99, 15264, 15266, 1, 10927, 4, 6, 59, 97, 99, 101, 110, 115, 15280, 15282, 15290, 15299, 15303, 15329, 1, 8826, 112, 112, 114, 111, 120, 59, 1, 10935, 117, 114, 108, 121, 101, 113, 59, 1, 8828, 113, 59, 1, 10927, 4, 3, 97, 101, 115, 15311, 15319, 15324, 112, 112, 114, 111, 120, 59, 1, 10937, 113, 113, 59, 1, 10933, 105, 109, 59, 1, 8936, 105, 109, 59, 1, 8830, 109, 101, 4, 2, 59, 115, 15342, 15344, 1, 8242, 59, 1, 8473, 4, 3, 69, 97, 115, 15355, 15358, 15362, 59, 1, 10933, 112, 59, 1, 10937, 105, 109, 59, 1, 8936, 4, 3, 100, 102, 112, 15375, 15378, 15404, 59, 1, 8719, 4, 3, 97, 108, 115, 15386, 15392, 15398, 108, 97, 114, 59, 1, 9006, 105, 110, 101, 59, 1, 8978, 117, 114, 102, 59, 1, 8979, 4, 2, 59, 116, 15410, 15412, 1, 8733, 111, 59, 1, 8733, 105, 109, 59, 1, 8830, 114, 101, 108, 59, 1, 8880, 4, 2, 99, 105, 15433, 15438, 114, 59, 3, 55349, 56517, 59, 1, 968, 110, 99, 115, 112, 59, 1, 8200, 4, 6, 102, 105, 111, 112, 115, 117, 15462, 15467, 15472, 15478, 15485, 15491, 114, 59, 3, 55349, 56622, 110, 116, 59, 1, 10764, 112, 102, 59, 3, 55349, 56674, 114, 105, 109, 101, 59, 1, 8279, 99, 114, 59, 3, 55349, 56518, 4, 3, 97, 101, 111, 15499, 15520, 15534, 116, 4, 2, 101, 105, 15506, 15515, 114, 110, 105, 111, 110, 115, 59, 1, 8461, 110, 116, 59, 1, 10774, 115, 116, 4, 2, 59, 101, 15528, 15530, 1, 63, 113, 59, 1, 8799, 116, 5, 34, 1, 59, 15540, 1, 34, 4, 21, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 15586, 15609, 15615, 15620, 15796, 15855, 15893, 15931, 15977, 16001, 16039, 16183, 16204, 16222, 16228, 16285, 16312, 16318, 16363, 16408, 16416, 4, 3, 97, 114, 116, 15594, 15599, 15603, 114, 114, 59, 1, 8667, 114, 59, 1, 8658, 97, 105, 108, 59, 1, 10524, 97, 114, 114, 59, 1, 10511, 97, 114, 59, 1, 10596, 4, 7, 99, 100, 101, 110, 113, 114, 116, 15636, 15651, 15656, 15664, 15687, 15696, 15770, 4, 2, 101, 117, 15642, 15646, 59, 3, 8765, 817, 116, 101, 59, 1, 341, 105, 99, 59, 1, 8730, 109, 112, 116, 121, 118, 59, 1, 10675, 103, 4, 4, 59, 100, 101, 108, 15675, 15677, 15680, 15683, 1, 10217, 59, 1, 10642, 59, 1, 10661, 101, 59, 1, 10217, 117, 111, 5, 187, 1, 59, 15694, 1, 187, 114, 4, 11, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 15721, 15723, 15727, 15739, 15742, 15746, 15750, 15754, 15758, 15763, 15767, 1, 8594, 112, 59, 1, 10613, 4, 2, 59, 102, 15733, 15735, 1, 8677, 115, 59, 1, 10528, 59, 1, 10547, 115, 59, 1, 10526, 107, 59, 1, 8618, 112, 59, 1, 8620, 108, 59, 1, 10565, 105, 109, 59, 1, 10612, 108, 59, 1, 8611, 59, 1, 8605, 4, 2, 97, 105, 15776, 15781, 105, 108, 59, 1, 10522, 111, 4, 2, 59, 110, 15788, 15790, 1, 8758, 97, 108, 115, 59, 1, 8474, 4, 3, 97, 98, 114, 15804, 15809, 15814, 114, 114, 59, 1, 10509, 114, 107, 59, 1, 10099, 4, 2, 97, 107, 15820, 15833, 99, 4, 2, 101, 107, 15827, 15830, 59, 1, 125, 59, 1, 93, 4, 2, 101, 115, 15839, 15842, 59, 1, 10636, 108, 4, 2, 100, 117, 15849, 15852, 59, 1, 10638, 59, 1, 10640, 4, 4, 97, 101, 117, 121, 15865, 15871, 15886, 15890, 114, 111, 110, 59, 1, 345, 4, 2, 100, 105, 15877, 15882, 105, 108, 59, 1, 343, 108, 59, 1, 8969, 98, 59, 1, 125, 59, 1, 1088, 4, 4, 99, 108, 113, 115, 15903, 15907, 15914, 15927, 97, 59, 1, 10551, 100, 104, 97, 114, 59, 1, 10601, 117, 111, 4, 2, 59, 114, 15922, 15924, 1, 8221, 59, 1, 8221, 104, 59, 1, 8627, 4, 3, 97, 99, 103, 15939, 15966, 15970, 108, 4, 4, 59, 105, 112, 115, 15950, 15952, 15957, 15963, 1, 8476, 110, 101, 59, 1, 8475, 97, 114, 116, 59, 1, 8476, 59, 1, 8477, 116, 59, 1, 9645, 5, 174, 1, 59, 15975, 1, 174, 4, 3, 105, 108, 114, 15985, 15991, 15997, 115, 104, 116, 59, 1, 10621, 111, 111, 114, 59, 1, 8971, 59, 3, 55349, 56623, 4, 2, 97, 111, 16007, 16028, 114, 4, 2, 100, 117, 16014, 16017, 59, 1, 8641, 4, 2, 59, 108, 16023, 16025, 1, 8640, 59, 1, 10604, 4, 2, 59, 118, 16034, 16036, 1, 961, 59, 1, 1009, 4, 3, 103, 110, 115, 16047, 16167, 16171, 104, 116, 4, 6, 97, 104, 108, 114, 115, 116, 16063, 16081, 16103, 16130, 16143, 16155, 114, 114, 111, 119, 4, 2, 59, 116, 16073, 16075, 1, 8594, 97, 105, 108, 59, 1, 8611, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 16093, 16099, 111, 119, 110, 59, 1, 8641, 112, 59, 1, 8640, 101, 102, 116, 4, 2, 97, 104, 16112, 16120, 114, 114, 111, 119, 115, 59, 1, 8644, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8652, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8649, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8605, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8908, 103, 59, 1, 730, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8787, 4, 3, 97, 104, 109, 16191, 16196, 16201, 114, 114, 59, 1, 8644, 97, 114, 59, 1, 8652, 59, 1, 8207, 111, 117, 115, 116, 4, 2, 59, 97, 16214, 16216, 1, 9137, 99, 104, 101, 59, 1, 9137, 109, 105, 100, 59, 1, 10990, 4, 4, 97, 98, 112, 116, 16238, 16252, 16257, 16278, 4, 2, 110, 114, 16244, 16248, 103, 59, 1, 10221, 114, 59, 1, 8702, 114, 107, 59, 1, 10215, 4, 3, 97, 102, 108, 16265, 16269, 16273, 114, 59, 1, 10630, 59, 3, 55349, 56675, 117, 115, 59, 1, 10798, 105, 109, 101, 115, 59, 1, 10805, 4, 2, 97, 112, 16291, 16304, 114, 4, 2, 59, 103, 16298, 16300, 1, 41, 116, 59, 1, 10644, 111, 108, 105, 110, 116, 59, 1, 10770, 97, 114, 114, 59, 1, 8649, 4, 4, 97, 99, 104, 113, 16328, 16334, 16339, 16342, 113, 117, 111, 59, 1, 8250, 114, 59, 3, 55349, 56519, 59, 1, 8625, 4, 2, 98, 117, 16348, 16351, 59, 1, 93, 111, 4, 2, 59, 114, 16358, 16360, 1, 8217, 59, 1, 8217, 4, 3, 104, 105, 114, 16371, 16377, 16383, 114, 101, 101, 59, 1, 8908, 109, 101, 115, 59, 1, 8906, 105, 4, 4, 59, 101, 102, 108, 16394, 16396, 16399, 16402, 1, 9657, 59, 1, 8885, 59, 1, 9656, 116, 114, 105, 59, 1, 10702, 108, 117, 104, 97, 114, 59, 1, 10600, 59, 1, 8478, 4, 19, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 111, 112, 113, 114, 115, 116, 117, 119, 122, 16459, 16466, 16472, 16572, 16590, 16672, 16687, 16746, 16844, 16850, 16924, 16963, 16988, 17115, 17121, 17154, 17206, 17614, 17656, 99, 117, 116, 101, 59, 1, 347, 113, 117, 111, 59, 1, 8218, 4, 10, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 16494, 16496, 16499, 16513, 16518, 16531, 16536, 16556, 16564, 16569, 1, 8827, 59, 1, 10932, 4, 2, 112, 114, 16505, 16508, 59, 1, 10936, 111, 110, 59, 1, 353, 117, 101, 59, 1, 8829, 4, 2, 59, 100, 16524, 16526, 1, 10928, 105, 108, 59, 1, 351, 114, 99, 59, 1, 349, 4, 3, 69, 97, 115, 16544, 16547, 16551, 59, 1, 10934, 112, 59, 1, 10938, 105, 109, 59, 1, 8937, 111, 108, 105, 110, 116, 59, 1, 10771, 105, 109, 59, 1, 8831, 59, 1, 1089, 111, 116, 4, 3, 59, 98, 101, 16582, 16584, 16587, 1, 8901, 59, 1, 8865, 59, 1, 10854, 4, 7, 65, 97, 99, 109, 115, 116, 120, 16606, 16611, 16634, 16642, 16646, 16652, 16668, 114, 114, 59, 1, 8664, 114, 4, 2, 104, 114, 16618, 16622, 107, 59, 1, 10533, 4, 2, 59, 111, 16628, 16630, 1, 8600, 119, 59, 1, 8600, 116, 5, 167, 1, 59, 16640, 1, 167, 105, 59, 1, 59, 119, 97, 114, 59, 1, 10537, 109, 4, 2, 105, 110, 16659, 16665, 110, 117, 115, 59, 1, 8726, 59, 1, 8726, 116, 59, 1, 10038, 114, 4, 2, 59, 111, 16679, 16682, 3, 55349, 56624, 119, 110, 59, 1, 8994, 4, 4, 97, 99, 111, 121, 16697, 16702, 16716, 16739, 114, 112, 59, 1, 9839, 4, 2, 104, 121, 16708, 16713, 99, 121, 59, 1, 1097, 59, 1, 1096, 114, 116, 4, 2, 109, 112, 16724, 16729, 105, 100, 59, 1, 8739, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8741, 5, 173, 1, 59, 16744, 1, 173, 4, 2, 103, 109, 16752, 16770, 109, 97, 4, 3, 59, 102, 118, 16762, 16764, 16767, 1, 963, 59, 1, 962, 59, 1, 962, 4, 8, 59, 100, 101, 103, 108, 110, 112, 114, 16788, 16790, 16795, 16806, 16817, 16828, 16832, 16838, 1, 8764, 111, 116, 59, 1, 10858, 4, 2, 59, 113, 16801, 16803, 1, 8771, 59, 1, 8771, 4, 2, 59, 69, 16812, 16814, 1, 10910, 59, 1, 10912, 4, 2, 59, 69, 16823, 16825, 1, 10909, 59, 1, 10911, 101, 59, 1, 8774, 108, 117, 115, 59, 1, 10788, 97, 114, 114, 59, 1, 10610, 97, 114, 114, 59, 1, 8592, 4, 4, 97, 101, 105, 116, 16860, 16883, 16891, 16904, 4, 2, 108, 115, 16866, 16878, 108, 115, 101, 116, 109, 105, 110, 117, 115, 59, 1, 8726, 104, 112, 59, 1, 10803, 112, 97, 114, 115, 108, 59, 1, 10724, 4, 2, 100, 108, 16897, 16900, 59, 1, 8739, 101, 59, 1, 8995, 4, 2, 59, 101, 16910, 16912, 1, 10922, 4, 2, 59, 115, 16918, 16920, 1, 10924, 59, 3, 10924, 65024, 4, 3, 102, 108, 112, 16932, 16938, 16958, 116, 99, 121, 59, 1, 1100, 4, 2, 59, 98, 16944, 16946, 1, 47, 4, 2, 59, 97, 16952, 16954, 1, 10692, 114, 59, 1, 9023, 102, 59, 3, 55349, 56676, 97, 4, 2, 100, 114, 16970, 16985, 101, 115, 4, 2, 59, 117, 16978, 16980, 1, 9824, 105, 116, 59, 1, 9824, 59, 1, 8741, 4, 3, 99, 115, 117, 16996, 17028, 17089, 4, 2, 97, 117, 17002, 17015, 112, 4, 2, 59, 115, 17009, 17011, 1, 8851, 59, 3, 8851, 65024, 112, 4, 2, 59, 115, 17022, 17024, 1, 8852, 59, 3, 8852, 65024, 117, 4, 2, 98, 112, 17035, 17062, 4, 3, 59, 101, 115, 17043, 17045, 17048, 1, 8847, 59, 1, 8849, 101, 116, 4, 2, 59, 101, 17056, 17058, 1, 8847, 113, 59, 1, 8849, 4, 3, 59, 101, 115, 17070, 17072, 17075, 1, 8848, 59, 1, 8850, 101, 116, 4, 2, 59, 101, 17083, 17085, 1, 8848, 113, 59, 1, 8850, 4, 3, 59, 97, 102, 17097, 17099, 17112, 1, 9633, 114, 4, 2, 101, 102, 17106, 17109, 59, 1, 9633, 59, 1, 9642, 59, 1, 9642, 97, 114, 114, 59, 1, 8594, 4, 4, 99, 101, 109, 116, 17131, 17136, 17142, 17148, 114, 59, 3, 55349, 56520, 116, 109, 110, 59, 1, 8726, 105, 108, 101, 59, 1, 8995, 97, 114, 102, 59, 1, 8902, 4, 2, 97, 114, 17160, 17172, 114, 4, 2, 59, 102, 17167, 17169, 1, 9734, 59, 1, 9733, 4, 2, 97, 110, 17178, 17202, 105, 103, 104, 116, 4, 2, 101, 112, 17188, 17197, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 104, 105, 59, 1, 981, 115, 59, 1, 175, 4, 5, 98, 99, 109, 110, 112, 17218, 17351, 17420, 17423, 17427, 4, 9, 59, 69, 100, 101, 109, 110, 112, 114, 115, 17238, 17240, 17243, 17248, 17261, 17267, 17279, 17285, 17291, 1, 8834, 59, 1, 10949, 111, 116, 59, 1, 10941, 4, 2, 59, 100, 17254, 17256, 1, 8838, 111, 116, 59, 1, 10947, 117, 108, 116, 59, 1, 10945, 4, 2, 69, 101, 17273, 17276, 59, 1, 10955, 59, 1, 8842, 108, 117, 115, 59, 1, 10943, 97, 114, 114, 59, 1, 10617, 4, 3, 101, 105, 117, 17299, 17335, 17339, 116, 4, 3, 59, 101, 110, 17308, 17310, 17322, 1, 8834, 113, 4, 2, 59, 113, 17317, 17319, 1, 8838, 59, 1, 10949, 101, 113, 4, 2, 59, 113, 17330, 17332, 1, 8842, 59, 1, 10955, 109, 59, 1, 10951, 4, 2, 98, 112, 17345, 17348, 59, 1, 10965, 59, 1, 10963, 99, 4, 6, 59, 97, 99, 101, 110, 115, 17366, 17368, 17376, 17385, 17389, 17415, 1, 8827, 112, 112, 114, 111, 120, 59, 1, 10936, 117, 114, 108, 121, 101, 113, 59, 1, 8829, 113, 59, 1, 10928, 4, 3, 97, 101, 115, 17397, 17405, 17410, 112, 112, 114, 111, 120, 59, 1, 10938, 113, 113, 59, 1, 10934, 105, 109, 59, 1, 8937, 105, 109, 59, 1, 8831, 59, 1, 8721, 103, 59, 1, 9834, 4, 13, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 17455, 17462, 17469, 17476, 17478, 17481, 17496, 17509, 17524, 17530, 17536, 17548, 17554, 5, 185, 1, 59, 17460, 1, 185, 5, 178, 1, 59, 17467, 1, 178, 5, 179, 1, 59, 17474, 1, 179, 1, 8835, 59, 1, 10950, 4, 2, 111, 115, 17487, 17491, 116, 59, 1, 10942, 117, 98, 59, 1, 10968, 4, 2, 59, 100, 17502, 17504, 1, 8839, 111, 116, 59, 1, 10948, 115, 4, 2, 111, 117, 17516, 17520, 108, 59, 1, 10185, 98, 59, 1, 10967, 97, 114, 114, 59, 1, 10619, 117, 108, 116, 59, 1, 10946, 4, 2, 69, 101, 17542, 17545, 59, 1, 10956, 59, 1, 8843, 108, 117, 115, 59, 1, 10944, 4, 3, 101, 105, 117, 17562, 17598, 17602, 116, 4, 3, 59, 101, 110, 17571, 17573, 17585, 1, 8835, 113, 4, 2, 59, 113, 17580, 17582, 1, 8839, 59, 1, 10950, 101, 113, 4, 2, 59, 113, 17593, 17595, 1, 8843, 59, 1, 10956, 109, 59, 1, 10952, 4, 2, 98, 112, 17608, 17611, 59, 1, 10964, 59, 1, 10966, 4, 3, 65, 97, 110, 17622, 17627, 17650, 114, 114, 59, 1, 8665, 114, 4, 2, 104, 114, 17634, 17638, 107, 59, 1, 10534, 4, 2, 59, 111, 17644, 17646, 1, 8601, 119, 59, 1, 8601, 119, 97, 114, 59, 1, 10538, 108, 105, 103, 5, 223, 1, 59, 17664, 1, 223, 4, 13, 97, 98, 99, 100, 101, 102, 104, 105, 111, 112, 114, 115, 119, 17694, 17709, 17714, 17737, 17742, 17749, 17754, 17860, 17905, 17957, 17964, 18090, 18122, 4, 2, 114, 117, 17700, 17706, 103, 101, 116, 59, 1, 8982, 59, 1, 964, 114, 107, 59, 1, 9140, 4, 3, 97, 101, 121, 17722, 17728, 17734, 114, 111, 110, 59, 1, 357, 100, 105, 108, 59, 1, 355, 59, 1, 1090, 111, 116, 59, 1, 8411, 108, 114, 101, 99, 59, 1, 8981, 114, 59, 3, 55349, 56625, 4, 4, 101, 105, 107, 111, 17764, 17805, 17836, 17851, 4, 2, 114, 116, 17770, 17786, 101, 4, 2, 52, 102, 17777, 17780, 59, 1, 8756, 111, 114, 101, 59, 1, 8756, 97, 4, 3, 59, 115, 118, 17795, 17797, 17802, 1, 952, 121, 109, 59, 1, 977, 59, 1, 977, 4, 2, 99, 110, 17811, 17831, 107, 4, 2, 97, 115, 17818, 17826, 112, 112, 114, 111, 120, 59, 1, 8776, 105, 109, 59, 1, 8764, 115, 112, 59, 1, 8201, 4, 2, 97, 115, 17842, 17846, 112, 59, 1, 8776, 105, 109, 59, 1, 8764, 114, 110, 5, 254, 1, 59, 17858, 1, 254, 4, 3, 108, 109, 110, 17868, 17873, 17901, 100, 101, 59, 1, 732, 101, 115, 5, 215, 3, 59, 98, 100, 17884, 17886, 17898, 1, 215, 4, 2, 59, 97, 17892, 17894, 1, 8864, 114, 59, 1, 10801, 59, 1, 10800, 116, 59, 1, 8749, 4, 3, 101, 112, 115, 17913, 17917, 17953, 97, 59, 1, 10536, 4, 4, 59, 98, 99, 102, 17927, 17929, 17934, 17939, 1, 8868, 111, 116, 59, 1, 9014, 105, 114, 59, 1, 10993, 4, 2, 59, 111, 17945, 17948, 3, 55349, 56677, 114, 107, 59, 1, 10970, 97, 59, 1, 10537, 114, 105, 109, 101, 59, 1, 8244, 4, 3, 97, 105, 112, 17972, 17977, 18082, 100, 101, 59, 1, 8482, 4, 7, 97, 100, 101, 109, 112, 115, 116, 17993, 18051, 18056, 18059, 18066, 18072, 18076, 110, 103, 108, 101, 4, 5, 59, 100, 108, 113, 114, 18009, 18011, 18017, 18032, 18035, 1, 9653, 111, 119, 110, 59, 1, 9663, 101, 102, 116, 4, 2, 59, 101, 18026, 18028, 1, 9667, 113, 59, 1, 8884, 59, 1, 8796, 105, 103, 104, 116, 4, 2, 59, 101, 18045, 18047, 1, 9657, 113, 59, 1, 8885, 111, 116, 59, 1, 9708, 59, 1, 8796, 105, 110, 117, 115, 59, 1, 10810, 108, 117, 115, 59, 1, 10809, 98, 59, 1, 10701, 105, 109, 101, 59, 1, 10811, 101, 122, 105, 117, 109, 59, 1, 9186, 4, 3, 99, 104, 116, 18098, 18111, 18116, 4, 2, 114, 121, 18104, 18108, 59, 3, 55349, 56521, 59, 1, 1094, 99, 121, 59, 1, 1115, 114, 111, 107, 59, 1, 359, 4, 2, 105, 111, 18128, 18133, 120, 116, 59, 1, 8812, 104, 101, 97, 100, 4, 2, 108, 114, 18143, 18154, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8606, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8608, 4, 18, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 18204, 18209, 18214, 18234, 18250, 18268, 18292, 18308, 18319, 18343, 18379, 18397, 18413, 18504, 18547, 18553, 18584, 18603, 114, 114, 59, 1, 8657, 97, 114, 59, 1, 10595, 4, 2, 99, 114, 18220, 18230, 117, 116, 101, 5, 250, 1, 59, 18228, 1, 250, 114, 59, 1, 8593, 114, 4, 2, 99, 101, 18241, 18245, 121, 59, 1, 1118, 118, 101, 59, 1, 365, 4, 2, 105, 121, 18256, 18265, 114, 99, 5, 251, 1, 59, 18263, 1, 251, 59, 1, 1091, 4, 3, 97, 98, 104, 18276, 18281, 18287, 114, 114, 59, 1, 8645, 108, 97, 99, 59, 1, 369, 97, 114, 59, 1, 10606, 4, 2, 105, 114, 18298, 18304, 115, 104, 116, 59, 1, 10622, 59, 3, 55349, 56626, 114, 97, 118, 101, 5, 249, 1, 59, 18317, 1, 249, 4, 2, 97, 98, 18325, 18338, 114, 4, 2, 108, 114, 18332, 18335, 59, 1, 8639, 59, 1, 8638, 108, 107, 59, 1, 9600, 4, 2, 99, 116, 18349, 18374, 4, 2, 111, 114, 18355, 18369, 114, 110, 4, 2, 59, 101, 18363, 18365, 1, 8988, 114, 59, 1, 8988, 111, 112, 59, 1, 8975, 114, 105, 59, 1, 9720, 4, 2, 97, 108, 18385, 18390, 99, 114, 59, 1, 363, 5, 168, 1, 59, 18395, 1, 168, 4, 2, 103, 112, 18403, 18408, 111, 110, 59, 1, 371, 102, 59, 3, 55349, 56678, 4, 6, 97, 100, 104, 108, 115, 117, 18427, 18434, 18445, 18470, 18475, 18494, 114, 114, 111, 119, 59, 1, 8593, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8597, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 18457, 18463, 101, 102, 116, 59, 1, 8639, 105, 103, 104, 116, 59, 1, 8638, 117, 115, 59, 1, 8846, 105, 4, 3, 59, 104, 108, 18484, 18486, 18489, 1, 965, 59, 1, 978, 111, 110, 59, 1, 965, 112, 97, 114, 114, 111, 119, 115, 59, 1, 8648, 4, 3, 99, 105, 116, 18512, 18537, 18542, 4, 2, 111, 114, 18518, 18532, 114, 110, 4, 2, 59, 101, 18526, 18528, 1, 8989, 114, 59, 1, 8989, 111, 112, 59, 1, 8974, 110, 103, 59, 1, 367, 114, 105, 59, 1, 9721, 99, 114, 59, 3, 55349, 56522, 4, 3, 100, 105, 114, 18561, 18566, 18572, 111, 116, 59, 1, 8944, 108, 100, 101, 59, 1, 361, 105, 4, 2, 59, 102, 18579, 18581, 1, 9653, 59, 1, 9652, 4, 2, 97, 109, 18590, 18595, 114, 114, 59, 1, 8648, 108, 5, 252, 1, 59, 18601, 1, 252, 97, 110, 103, 108, 101, 59, 1, 10663, 4, 15, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 18643, 18648, 18661, 18667, 18847, 18851, 18857, 18904, 18909, 18915, 18931, 18937, 18943, 18949, 18996, 114, 114, 59, 1, 8661, 97, 114, 4, 2, 59, 118, 18656, 18658, 1, 10984, 59, 1, 10985, 97, 115, 104, 59, 1, 8872, 4, 2, 110, 114, 18673, 18679, 103, 114, 116, 59, 1, 10652, 4, 7, 101, 107, 110, 112, 114, 115, 116, 18695, 18704, 18711, 18720, 18742, 18754, 18810, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 97, 112, 112, 97, 59, 1, 1008, 111, 116, 104, 105, 110, 103, 59, 1, 8709, 4, 3, 104, 105, 114, 18728, 18732, 18735, 105, 59, 1, 981, 59, 1, 982, 111, 112, 116, 111, 59, 1, 8733, 4, 2, 59, 104, 18748, 18750, 1, 8597, 111, 59, 1, 1009, 4, 2, 105, 117, 18760, 18766, 103, 109, 97, 59, 1, 962, 4, 2, 98, 112, 18772, 18791, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18784, 18787, 3, 8842, 65024, 59, 3, 10955, 65024, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18803, 18806, 3, 8843, 65024, 59, 3, 10956, 65024, 4, 2, 104, 114, 18816, 18822, 101, 116, 97, 59, 1, 977, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 18834, 18840, 101, 102, 116, 59, 1, 8882, 105, 103, 104, 116, 59, 1, 8883, 121, 59, 1, 1074, 97, 115, 104, 59, 1, 8866, 4, 3, 101, 108, 114, 18865, 18884, 18890, 4, 3, 59, 98, 101, 18873, 18875, 18880, 1, 8744, 97, 114, 59, 1, 8891, 113, 59, 1, 8794, 108, 105, 112, 59, 1, 8942, 4, 2, 98, 116, 18896, 18901, 97, 114, 59, 1, 124, 59, 1, 124, 114, 59, 3, 55349, 56627, 116, 114, 105, 59, 1, 8882, 115, 117, 4, 2, 98, 112, 18923, 18927, 59, 3, 8834, 8402, 59, 3, 8835, 8402, 112, 102, 59, 3, 55349, 56679, 114, 111, 112, 59, 1, 8733, 116, 114, 105, 59, 1, 8883, 4, 2, 99, 117, 18955, 18960, 114, 59, 3, 55349, 56523, 4, 2, 98, 112, 18966, 18981, 110, 4, 2, 69, 101, 18973, 18977, 59, 3, 10955, 65024, 59, 3, 8842, 65024, 110, 4, 2, 69, 101, 18988, 18992, 59, 3, 10956, 65024, 59, 3, 8843, 65024, 105, 103, 122, 97, 103, 59, 1, 10650, 4, 7, 99, 101, 102, 111, 112, 114, 115, 19020, 19026, 19061, 19066, 19072, 19075, 19089, 105, 114, 99, 59, 1, 373, 4, 2, 100, 105, 19032, 19055, 4, 2, 98, 103, 19038, 19043, 97, 114, 59, 1, 10847, 101, 4, 2, 59, 113, 19050, 19052, 1, 8743, 59, 1, 8793, 101, 114, 112, 59, 1, 8472, 114, 59, 3, 55349, 56628, 112, 102, 59, 3, 55349, 56680, 59, 1, 8472, 4, 2, 59, 101, 19081, 19083, 1, 8768, 97, 116, 104, 59, 1, 8768, 99, 114, 59, 3, 55349, 56524, 4, 14, 99, 100, 102, 104, 105, 108, 109, 110, 111, 114, 115, 117, 118, 119, 19125, 19146, 19152, 19157, 19173, 19176, 19192, 19197, 19202, 19236, 19252, 19269, 19286, 19291, 4, 3, 97, 105, 117, 19133, 19137, 19142, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 116, 114, 105, 59, 1, 9661, 114, 59, 3, 55349, 56629, 4, 2, 65, 97, 19163, 19168, 114, 114, 59, 1, 10234, 114, 114, 59, 1, 10231, 59, 1, 958, 4, 2, 65, 97, 19182, 19187, 114, 114, 59, 1, 10232, 114, 114, 59, 1, 10229, 97, 112, 59, 1, 10236, 105, 115, 59, 1, 8955, 4, 3, 100, 112, 116, 19210, 19215, 19230, 111, 116, 59, 1, 10752, 4, 2, 102, 108, 19221, 19225, 59, 3, 55349, 56681, 117, 115, 59, 1, 10753, 105, 109, 101, 59, 1, 10754, 4, 2, 65, 97, 19242, 19247, 114, 114, 59, 1, 10233, 114, 114, 59, 1, 10230, 4, 2, 99, 113, 19258, 19263, 114, 59, 3, 55349, 56525, 99, 117, 112, 59, 1, 10758, 4, 2, 112, 116, 19275, 19281, 108, 117, 115, 59, 1, 10756, 114, 105, 59, 1, 9651, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 19316, 19335, 19349, 19357, 19362, 19367, 19373, 19379, 99, 4, 2, 117, 121, 19323, 19332, 116, 101, 5, 253, 1, 59, 19330, 1, 253, 59, 1, 1103, 4, 2, 105, 121, 19341, 19346, 114, 99, 59, 1, 375, 59, 1, 1099, 110, 5, 165, 1, 59, 19355, 1, 165, 114, 59, 3, 55349, 56630, 99, 121, 59, 1, 1111, 112, 102, 59, 3, 55349, 56682, 99, 114, 59, 3, 55349, 56526, 4, 2, 99, 109, 19385, 19389, 121, 59, 1, 1102, 108, 5, 255, 1, 59, 19395, 1, 255, 4, 10, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 19419, 19426, 19441, 19446, 19462, 19467, 19472, 19480, 19486, 19492, 99, 117, 116, 101, 59, 1, 378, 4, 2, 97, 121, 19432, 19438, 114, 111, 110, 59, 1, 382, 59, 1, 1079, 111, 116, 59, 1, 380, 4, 2, 101, 116, 19452, 19458, 116, 114, 102, 59, 1, 8488, 97, 59, 1, 950, 114, 59, 3, 55349, 56631, 99, 121, 59, 1, 1078, 103, 114, 97, 114, 114, 59, 1, 8669, 112, 102, 59, 3, 55349, 56683, 99, 114, 59, 3, 55349, 56527, 4, 2, 106, 110, 19498, 19501, 59, 1, 8205, 106, 59, 1, 8204]);
var Preprocessor = preprocessorExports, UNICODE$3 = unicode, neTree = named_entity_data;
var $$9 = UNICODE$3.CODE_POINTS, $$ = UNICODE$3.CODE_POINT_SEQUENCES;
var NUMERIC_ENTITY_REPLACEMENTS = {
  0: 65533,
  13: 13,
  128: 8364,
  129: 129,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  141: 141,
  142: 381,
  143: 143,
  144: 144,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  157: 157,
  158: 382,
  159: 376
};
var HAS_DATA_FLAG = 1 << 0;
var DATA_DUPLET_FLAG = 1 << 1;
var HAS_BRANCHES_FLAG = 1 << 2;
var MAX_BRANCH_MARKER_VALUE = HAS_DATA_FLAG | DATA_DUPLET_FLAG | HAS_BRANCHES_FLAG;
var DATA_STATE = "DATA_STATE", CHARACTER_REFERENCE_IN_DATA_STATE = "CHARACTER_REFERENCE_IN_DATA_STATE", RCDATA_STATE = "RCDATA_STATE", CHARACTER_REFERENCE_IN_RCDATA_STATE = "CHARACTER_REFERENCE_IN_RCDATA_STATE", RAWTEXT_STATE = "RAWTEXT_STATE", SCRIPT_DATA_STATE = "SCRIPT_DATA_STATE", PLAINTEXT_STATE = "PLAINTEXT_STATE", TAG_OPEN_STATE = "TAG_OPEN_STATE", END_TAG_OPEN_STATE = "END_TAG_OPEN_STATE", TAG_NAME_STATE = "TAG_NAME_STATE", RCDATA_LESS_THAN_SIGN_STATE = "RCDATA_LESS_THAN_SIGN_STATE", RCDATA_END_TAG_OPEN_STATE = "RCDATA_END_TAG_OPEN_STATE", RCDATA_END_TAG_NAME_STATE = "RCDATA_END_TAG_NAME_STATE", RAWTEXT_LESS_THAN_SIGN_STATE = "RAWTEXT_LESS_THAN_SIGN_STATE", RAWTEXT_END_TAG_OPEN_STATE = "RAWTEXT_END_TAG_OPEN_STATE", RAWTEXT_END_TAG_NAME_STATE = "RAWTEXT_END_TAG_NAME_STATE", SCRIPT_DATA_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_LESS_THAN_SIGN_STATE", SCRIPT_DATA_END_TAG_OPEN_STATE = "SCRIPT_DATA_END_TAG_OPEN_STATE", SCRIPT_DATA_END_TAG_NAME_STATE = "SCRIPT_DATA_END_TAG_NAME_STATE", SCRIPT_DATA_ESCAPE_START_STATE = "SCRIPT_DATA_ESCAPE_START_STATE", SCRIPT_DATA_ESCAPE_START_DASH_STATE = "SCRIPT_DATA_ESCAPE_START_DASH_STATE", SCRIPT_DATA_ESCAPED_STATE = "SCRIPT_DATA_ESCAPED_STATE", SCRIPT_DATA_ESCAPED_DASH_STATE = "SCRIPT_DATA_ESCAPED_DASH_STATE", SCRIPT_DATA_ESCAPED_DASH_DASH_STATE = "SCRIPT_DATA_ESCAPED_DASH_DASH_STATE", SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE", SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE", SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE = "SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE", SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE = "SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE", SCRIPT_DATA_DOUBLE_ESCAPED_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE", SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE", SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE", SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE = "SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE", BEFORE_ATTRIBUTE_NAME_STATE = "BEFORE_ATTRIBUTE_NAME_STATE", ATTRIBUTE_NAME_STATE = "ATTRIBUTE_NAME_STATE", AFTER_ATTRIBUTE_NAME_STATE = "AFTER_ATTRIBUTE_NAME_STATE", BEFORE_ATTRIBUTE_VALUE_STATE = "BEFORE_ATTRIBUTE_VALUE_STATE", ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE = "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE", ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE = "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE", ATTRIBUTE_VALUE_UNQUOTED_STATE = "ATTRIBUTE_VALUE_UNQUOTED_STATE", CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE = "CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE", AFTER_ATTRIBUTE_VALUE_QUOTED_STATE = "AFTER_ATTRIBUTE_VALUE_QUOTED_STATE", SELF_CLOSING_START_TAG_STATE = "SELF_CLOSING_START_TAG_STATE", BOGUS_COMMENT_STATE = "BOGUS_COMMENT_STATE", BOGUS_COMMENT_STATE_CONTINUATION = "BOGUS_COMMENT_STATE_CONTINUATION", MARKUP_DECLARATION_OPEN_STATE = "MARKUP_DECLARATION_OPEN_STATE", COMMENT_START_STATE = "COMMENT_START_STATE", COMMENT_START_DASH_STATE = "COMMENT_START_DASH_STATE", COMMENT_STATE = "COMMENT_STATE", COMMENT_END_DASH_STATE = "COMMENT_END_DASH_STATE", COMMENT_END_STATE = "COMMENT_END_STATE", COMMENT_END_BANG_STATE = "COMMENT_END_BANG_STATE", DOCTYPE_STATE = "DOCTYPE_STATE", DOCTYPE_NAME_STATE = "DOCTYPE_NAME_STATE", AFTER_DOCTYPE_NAME_STATE = "AFTER_DOCTYPE_NAME_STATE", BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE", DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE", DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE", BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE", BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE", DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE", DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE", AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE", BOGUS_DOCTYPE_STATE = "BOGUS_DOCTYPE_STATE", CDATA_SECTION_STATE = "CDATA_SECTION_STATE";
function isWhitespace$1(cp) {
  return cp === $$9.SPACE || cp === $$9.LINE_FEED || cp === $$9.TABULATION || cp === $$9.FORM_FEED;
}
function isAsciiDigit(cp) {
  return cp >= $$9.DIGIT_0 && cp <= $$9.DIGIT_9;
}
function isAsciiUpper(cp) {
  return cp >= $$9.LATIN_CAPITAL_A && cp <= $$9.LATIN_CAPITAL_Z;
}
function isAsciiLower(cp) {
  return cp >= $$9.LATIN_SMALL_A && cp <= $$9.LATIN_SMALL_Z;
}
function isAsciiLetter(cp) {
  return isAsciiLower(cp) || isAsciiUpper(cp);
}
function isAsciiAlphaNumeric(cp) {
  return isAsciiLetter(cp) || isAsciiDigit(cp);
}
function isDigit(cp, isHex) {
  return isAsciiDigit(cp) || isHex && (cp >= $$9.LATIN_CAPITAL_A && cp <= $$9.LATIN_CAPITAL_F || cp >= $$9.LATIN_SMALL_A && cp <= $$9.LATIN_SMALL_F);
}
function isReservedCodePoint(cp) {
  return cp >= 55296 && cp <= 57343 || cp > 1114111;
}
function toAsciiLowerCodePoint(cp) {
  return cp + 32;
}
function toChar(cp) {
  if (cp <= 65535)
    return String.fromCharCode(cp);
  cp -= 65536;
  return String.fromCharCode(cp >>> 10 & 1023 | 55296) + String.fromCharCode(56320 | cp & 1023);
}
function toAsciiLowerChar(cp) {
  return String.fromCharCode(toAsciiLowerCodePoint(cp));
}
function findNamedEntityTreeBranch(nodeIx, cp) {
  var branchCount = neTree[++nodeIx], lo = ++nodeIx, hi = lo + branchCount - 1;
  while (lo <= hi) {
    var mid2 = lo + hi >>> 1, midCp = neTree[mid2];
    if (midCp < cp)
      lo = mid2 + 1;
    else if (midCp > cp)
      hi = mid2 - 1;
    else
      return neTree[mid2 + branchCount];
  }
  return -1;
}
var Tokenizer$6 = tokenizer.exports = function() {
  this.preprocessor = new Preprocessor();
  this.tokenQueue = [];
  this.allowCDATA = false;
  this.state = DATA_STATE;
  this.returnState = "";
  this.tempBuff = [];
  this.additionalAllowedCp = void 0;
  this.lastStartTagName = "";
  this.consumedAfterSnapshot = -1;
  this.active = false;
  this.currentCharacterToken = null;
  this.currentToken = null;
  this.currentAttr = null;
};
Tokenizer$6.CHARACTER_TOKEN = "CHARACTER_TOKEN";
Tokenizer$6.NULL_CHARACTER_TOKEN = "NULL_CHARACTER_TOKEN";
Tokenizer$6.WHITESPACE_CHARACTER_TOKEN = "WHITESPACE_CHARACTER_TOKEN";
Tokenizer$6.START_TAG_TOKEN = "START_TAG_TOKEN";
Tokenizer$6.END_TAG_TOKEN = "END_TAG_TOKEN";
Tokenizer$6.COMMENT_TOKEN = "COMMENT_TOKEN";
Tokenizer$6.DOCTYPE_TOKEN = "DOCTYPE_TOKEN";
Tokenizer$6.EOF_TOKEN = "EOF_TOKEN";
Tokenizer$6.HIBERNATION_TOKEN = "HIBERNATION_TOKEN";
Tokenizer$6.MODE = {
  DATA: DATA_STATE,
  RCDATA: RCDATA_STATE,
  RAWTEXT: RAWTEXT_STATE,
  SCRIPT_DATA: SCRIPT_DATA_STATE,
  PLAINTEXT: PLAINTEXT_STATE
};
Tokenizer$6.getTokenAttr = function(token, attrName) {
  for (var i2 = token.attrs.length - 1; i2 >= 0; i2--) {
    if (token.attrs[i2].name === attrName)
      return token.attrs[i2].value;
  }
  return null;
};
Tokenizer$6.prototype.getNextToken = function() {
  while (!this.tokenQueue.length && this.active) {
    this._hibernationSnapshot();
    var cp = this._consume();
    if (!this._ensureHibernation())
      this[this.state](cp);
  }
  return this.tokenQueue.shift();
};
Tokenizer$6.prototype.write = function(chunk, isLastChunk) {
  this.active = true;
  this.preprocessor.write(chunk, isLastChunk);
};
Tokenizer$6.prototype.insertHtmlAtCurrentPos = function(chunk) {
  this.active = true;
  this.preprocessor.insertHtmlAtCurrentPos(chunk);
};
Tokenizer$6.prototype._hibernationSnapshot = function() {
  this.consumedAfterSnapshot = 0;
};
Tokenizer$6.prototype._ensureHibernation = function() {
  if (this.preprocessor.endOfChunkHit) {
    for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--)
      this.preprocessor.retreat();
    this.active = false;
    this.tokenQueue.push({ type: Tokenizer$6.HIBERNATION_TOKEN });
    return true;
  }
  return false;
};
Tokenizer$6.prototype._consume = function() {
  this.consumedAfterSnapshot++;
  return this.preprocessor.advance();
};
Tokenizer$6.prototype._unconsume = function() {
  this.consumedAfterSnapshot--;
  this.preprocessor.retreat();
};
Tokenizer$6.prototype._unconsumeSeveral = function(count) {
  while (count--)
    this._unconsume();
};
Tokenizer$6.prototype._reconsumeInState = function(state) {
  this.state = state;
  this._unconsume();
};
Tokenizer$6.prototype._consumeSubsequentIfMatch = function(pattern, startCp, caseSensitive) {
  var consumedCount = 0, isMatch = true, patternLength = pattern.length, patternPos = 0, cp = startCp, patternCp = void 0;
  for (; patternPos < patternLength; patternPos++) {
    if (patternPos > 0) {
      cp = this._consume();
      consumedCount++;
    }
    if (cp === $$9.EOF) {
      isMatch = false;
      break;
    }
    patternCp = pattern[patternPos];
    if (cp !== patternCp && (caseSensitive || cp !== toAsciiLowerCodePoint(patternCp))) {
      isMatch = false;
      break;
    }
  }
  if (!isMatch)
    this._unconsumeSeveral(consumedCount);
  return isMatch;
};
Tokenizer$6.prototype._lookahead = function() {
  var cp = this._consume();
  this._unconsume();
  return cp;
};
Tokenizer$6.prototype.isTempBufferEqualToScriptString = function() {
  if (this.tempBuff.length !== $$.SCRIPT_STRING.length)
    return false;
  for (var i2 = 0; i2 < this.tempBuff.length; i2++) {
    if (this.tempBuff[i2] !== $$.SCRIPT_STRING[i2])
      return false;
  }
  return true;
};
Tokenizer$6.prototype._createStartTagToken = function() {
  this.currentToken = {
    type: Tokenizer$6.START_TAG_TOKEN,
    tagName: "",
    selfClosing: false,
    attrs: []
  };
};
Tokenizer$6.prototype._createEndTagToken = function() {
  this.currentToken = {
    type: Tokenizer$6.END_TAG_TOKEN,
    tagName: "",
    attrs: []
  };
};
Tokenizer$6.prototype._createCommentToken = function() {
  this.currentToken = {
    type: Tokenizer$6.COMMENT_TOKEN,
    data: ""
  };
};
Tokenizer$6.prototype._createDoctypeToken = function(initialName) {
  this.currentToken = {
    type: Tokenizer$6.DOCTYPE_TOKEN,
    name: initialName,
    forceQuirks: false,
    publicId: null,
    systemId: null
  };
};
Tokenizer$6.prototype._createCharacterToken = function(type, ch) {
  this.currentCharacterToken = {
    type,
    chars: ch
  };
};
Tokenizer$6.prototype._createAttr = function(attrNameFirstCh) {
  this.currentAttr = {
    name: attrNameFirstCh,
    value: ""
  };
};
Tokenizer$6.prototype._isDuplicateAttr = function() {
  return Tokenizer$6.getTokenAttr(this.currentToken, this.currentAttr.name) !== null;
};
Tokenizer$6.prototype._leaveAttrName = function(toState) {
  this.state = toState;
  if (!this._isDuplicateAttr())
    this.currentToken.attrs.push(this.currentAttr);
};
Tokenizer$6.prototype._leaveAttrValue = function(toState) {
  this.state = toState;
};
Tokenizer$6.prototype._isAppropriateEndTagToken = function() {
  return this.lastStartTagName === this.currentToken.tagName;
};
Tokenizer$6.prototype._emitCurrentToken = function() {
  this._emitCurrentCharacterToken();
  if (this.currentToken.type === Tokenizer$6.START_TAG_TOKEN)
    this.lastStartTagName = this.currentToken.tagName;
  this.tokenQueue.push(this.currentToken);
  this.currentToken = null;
};
Tokenizer$6.prototype._emitCurrentCharacterToken = function() {
  if (this.currentCharacterToken) {
    this.tokenQueue.push(this.currentCharacterToken);
    this.currentCharacterToken = null;
  }
};
Tokenizer$6.prototype._emitEOFToken = function() {
  this._emitCurrentCharacterToken();
  this.tokenQueue.push({ type: Tokenizer$6.EOF_TOKEN });
};
Tokenizer$6.prototype._appendCharToCurrentCharacterToken = function(type, ch) {
  if (this.currentCharacterToken && this.currentCharacterToken.type !== type)
    this._emitCurrentCharacterToken();
  if (this.currentCharacterToken)
    this.currentCharacterToken.chars += ch;
  else
    this._createCharacterToken(type, ch);
};
Tokenizer$6.prototype._emitCodePoint = function(cp) {
  var type = Tokenizer$6.CHARACTER_TOKEN;
  if (isWhitespace$1(cp))
    type = Tokenizer$6.WHITESPACE_CHARACTER_TOKEN;
  else if (cp === $$9.NULL)
    type = Tokenizer$6.NULL_CHARACTER_TOKEN;
  this._appendCharToCurrentCharacterToken(type, toChar(cp));
};
Tokenizer$6.prototype._emitSeveralCodePoints = function(codePoints) {
  for (var i2 = 0; i2 < codePoints.length; i2++)
    this._emitCodePoint(codePoints[i2]);
};
Tokenizer$6.prototype._emitChar = function(ch) {
  this._appendCharToCurrentCharacterToken(Tokenizer$6.CHARACTER_TOKEN, ch);
};
Tokenizer$6.prototype._consumeNumericEntity = function(isHex) {
  var digits = "", nextCp = void 0;
  do {
    digits += toChar(this._consume());
    nextCp = this._lookahead();
  } while (nextCp !== $$9.EOF && isDigit(nextCp, isHex));
  if (this._lookahead() === $$9.SEMICOLON)
    this._consume();
  var referencedCp = parseInt(digits, isHex ? 16 : 10), replacement = NUMERIC_ENTITY_REPLACEMENTS[referencedCp];
  if (replacement)
    return replacement;
  if (isReservedCodePoint(referencedCp))
    return $$9.REPLACEMENT_CHARACTER;
  return referencedCp;
};
Tokenizer$6.prototype._consumeNamedEntity = function(inAttr) {
  var referencedCodePoints = null, referenceSize = 0, cp = null, consumedCount = 0, semicolonTerminated = false;
  for (var i2 = 0; i2 > -1; ) {
    var current = neTree[i2], inNode = current < MAX_BRANCH_MARKER_VALUE, nodeWithData = inNode && current & HAS_DATA_FLAG;
    if (nodeWithData) {
      referencedCodePoints = current & DATA_DUPLET_FLAG ? [neTree[++i2], neTree[++i2]] : [neTree[++i2]];
      referenceSize = consumedCount;
      if (cp === $$9.SEMICOLON) {
        semicolonTerminated = true;
        break;
      }
    }
    cp = this._consume();
    consumedCount++;
    if (cp === $$9.EOF)
      break;
    if (inNode)
      i2 = current & HAS_BRANCHES_FLAG ? findNamedEntityTreeBranch(i2, cp) : -1;
    else
      i2 = cp === current ? ++i2 : -1;
  }
  if (referencedCodePoints) {
    if (!semicolonTerminated) {
      this._unconsumeSeveral(consumedCount - referenceSize);
      if (inAttr) {
        var nextCp = this._lookahead();
        if (nextCp === $$9.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp)) {
          this._unconsumeSeveral(referenceSize);
          return null;
        }
      }
    }
    return referencedCodePoints;
  }
  this._unconsumeSeveral(consumedCount);
  return null;
};
Tokenizer$6.prototype._consumeCharacterReference = function(startCp, inAttr) {
  if (isWhitespace$1(startCp) || startCp === $$9.GREATER_THAN_SIGN || startCp === $$9.AMPERSAND || startCp === this.additionalAllowedCp || startCp === $$9.EOF) {
    this._unconsume();
    return null;
  }
  if (startCp === $$9.NUMBER_SIGN) {
    var isHex = false, nextCp = this._lookahead();
    if (nextCp === $$9.LATIN_SMALL_X || nextCp === $$9.LATIN_CAPITAL_X) {
      this._consume();
      isHex = true;
    }
    nextCp = this._lookahead();
    if (nextCp !== $$9.EOF && isDigit(nextCp, isHex))
      return [this._consumeNumericEntity(isHex)];
    this._unconsumeSeveral(isHex ? 2 : 1);
    return null;
  }
  this._unconsume();
  return this._consumeNamedEntity(inAttr);
};
var _$3 = Tokenizer$6.prototype;
_$3[DATA_STATE] = function dataState(cp) {
  this.preprocessor.dropParsedChunk();
  if (cp === $$9.AMPERSAND)
    this.state = CHARACTER_REFERENCE_IN_DATA_STATE;
  else if (cp === $$9.LESS_THAN_SIGN)
    this.state = TAG_OPEN_STATE;
  else if (cp === $$9.NULL)
    this._emitCodePoint(cp);
  else if (cp === $$9.EOF)
    this._emitEOFToken();
  else
    this._emitCodePoint(cp);
};
_$3[CHARACTER_REFERENCE_IN_DATA_STATE] = function characterReferenceInDataState(cp) {
  this.additionalAllowedCp = void 0;
  var referencedCodePoints = this._consumeCharacterReference(cp, false);
  if (!this._ensureHibernation()) {
    if (referencedCodePoints)
      this._emitSeveralCodePoints(referencedCodePoints);
    else
      this._emitChar("&");
    this.state = DATA_STATE;
  }
};
_$3[RCDATA_STATE] = function rcdataState(cp) {
  this.preprocessor.dropParsedChunk();
  if (cp === $$9.AMPERSAND)
    this.state = CHARACTER_REFERENCE_IN_RCDATA_STATE;
  else if (cp === $$9.LESS_THAN_SIGN)
    this.state = RCDATA_LESS_THAN_SIGN_STATE;
  else if (cp === $$9.NULL)
    this._emitChar(UNICODE$3.REPLACEMENT_CHARACTER);
  else if (cp === $$9.EOF)
    this._emitEOFToken();
  else
    this._emitCodePoint(cp);
};
_$3[CHARACTER_REFERENCE_IN_RCDATA_STATE] = function characterReferenceInRcdataState(cp) {
  this.additionalAllowedCp = void 0;
  var referencedCodePoints = this._consumeCharacterReference(cp, false);
  if (!this._ensureHibernation()) {
    if (referencedCodePoints)
      this._emitSeveralCodePoints(referencedCodePoints);
    else
      this._emitChar("&");
    this.state = RCDATA_STATE;
  }
};
_$3[RAWTEXT_STATE] = function rawtextState(cp) {
  this.preprocessor.dropParsedChunk();
  if (cp === $$9.LESS_THAN_SIGN)
    this.state = RAWTEXT_LESS_THAN_SIGN_STATE;
  else if (cp === $$9.NULL)
    this._emitChar(UNICODE$3.REPLACEMENT_CHARACTER);
  else if (cp === $$9.EOF)
    this._emitEOFToken();
  else
    this._emitCodePoint(cp);
};
_$3[SCRIPT_DATA_STATE] = function scriptDataState(cp) {
  this.preprocessor.dropParsedChunk();
  if (cp === $$9.LESS_THAN_SIGN)
    this.state = SCRIPT_DATA_LESS_THAN_SIGN_STATE;
  else if (cp === $$9.NULL)
    this._emitChar(UNICODE$3.REPLACEMENT_CHARACTER);
  else if (cp === $$9.EOF)
    this._emitEOFToken();
  else
    this._emitCodePoint(cp);
};
_$3[PLAINTEXT_STATE] = function plaintextState(cp) {
  this.preprocessor.dropParsedChunk();
  if (cp === $$9.NULL)
    this._emitChar(UNICODE$3.REPLACEMENT_CHARACTER);
  else if (cp === $$9.EOF)
    this._emitEOFToken();
  else
    this._emitCodePoint(cp);
};
_$3[TAG_OPEN_STATE] = function tagOpenState(cp) {
  if (cp === $$9.EXCLAMATION_MARK)
    this.state = MARKUP_DECLARATION_OPEN_STATE;
  else if (cp === $$9.SOLIDUS)
    this.state = END_TAG_OPEN_STATE;
  else if (isAsciiLetter(cp)) {
    this._createStartTagToken();
    this._reconsumeInState(TAG_NAME_STATE);
  } else if (cp === $$9.QUESTION_MARK)
    this._reconsumeInState(BOGUS_COMMENT_STATE);
  else {
    this._emitChar("<");
    this._reconsumeInState(DATA_STATE);
  }
};
_$3[END_TAG_OPEN_STATE] = function endTagOpenState(cp) {
  if (isAsciiLetter(cp)) {
    this._createEndTagToken();
    this._reconsumeInState(TAG_NAME_STATE);
  } else if (cp === $$9.GREATER_THAN_SIGN)
    this.state = DATA_STATE;
  else if (cp === $$9.EOF) {
    this._reconsumeInState(DATA_STATE);
    this._emitChar("<");
    this._emitChar("/");
  } else
    this._reconsumeInState(BOGUS_COMMENT_STATE);
};
_$3[TAG_NAME_STATE] = function tagNameState(cp) {
  if (isWhitespace$1(cp))
    this.state = BEFORE_ATTRIBUTE_NAME_STATE;
  else if (cp === $$9.SOLIDUS)
    this.state = SELF_CLOSING_START_TAG_STATE;
  else if (cp === $$9.GREATER_THAN_SIGN) {
    this.state = DATA_STATE;
    this._emitCurrentToken();
  } else if (isAsciiUpper(cp))
    this.currentToken.tagName += toAsciiLowerChar(cp);
  else if (cp === $$9.NULL)
    this.currentToken.tagName += UNICODE$3.REPLACEMENT_CHARACTER;
  else if (cp === $$9.EOF)
    this._reconsumeInState(DATA_STATE);
  else
    this.currentToken.tagName += toChar(cp);
};
_$3[RCDATA_LESS_THAN_SIGN_STATE] = function rcdataLessThanSignState(cp) {
  if (cp === $$9.SOLIDUS) {
    this.tempBuff = [];
    this.state = RCDATA_END_TAG_OPEN_STATE;
  } else {
    this._emitChar("<");
    this._reconsumeInState(RCDATA_STATE);
  }
};
_$3[RCDATA_END_TAG_OPEN_STATE] = function rcdataEndTagOpenState(cp) {
  if (isAsciiLetter(cp)) {
    this._createEndTagToken();
    this._reconsumeInState(RCDATA_END_TAG_NAME_STATE);
  } else {
    this._emitChar("<");
    this._emitChar("/");
    this._reconsumeInState(RCDATA_STATE);
  }
};
_$3[RCDATA_END_TAG_NAME_STATE] = function rcdataEndTagNameState(cp) {
  if (isAsciiUpper(cp)) {
    this.currentToken.tagName += toAsciiLowerChar(cp);
    this.tempBuff.push(cp);
  } else if (isAsciiLower(cp)) {
    this.currentToken.tagName += toChar(cp);
    this.tempBuff.push(cp);
  } else {
    if (this._isAppropriateEndTagToken()) {
      if (isWhitespace$1(cp)) {
        this.state = BEFORE_ATTRIBUTE_NAME_STATE;
        return;
      }
      if (cp === $$9.SOLIDUS) {
        this.state = SELF_CLOSING_START_TAG_STATE;
        return;
      }
      if (cp === $$9.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
        return;
      }
    }
    this._emitChar("<");
    this._emitChar("/");
    this._emitSeveralCodePoints(this.tempBuff);
    this._reconsumeInState(RCDATA_STATE);
  }
};
_$3[RAWTEXT_LESS_THAN_SIGN_STATE] = function rawtextLessThanSignState(cp) {
  if (cp === $$9.SOLIDUS) {
    this.tempBuff = [];
    this.state = RAWTEXT_END_TAG_OPEN_STATE;
  } else {
    this._emitChar("<");
    this._reconsumeInState(RAWTEXT_STATE);
  }
};
_$3[RAWTEXT_END_TAG_OPEN_STATE] = function rawtextEndTagOpenState(cp) {
  if (isAsciiLetter(cp)) {
    this._createEndTagToken();
    this._reconsumeInState(RAWTEXT_END_TAG_NAME_STATE);
  } else {
    this._emitChar("<");
    this._emitChar("/");
    this._reconsumeInState(RAWTEXT_STATE);
  }
};
_$3[RAWTEXT_END_TAG_NAME_STATE] = function rawtextEndTagNameState(cp) {
  if (isAsciiUpper(cp)) {
    this.currentToken.tagName += toAsciiLowerChar(cp);
    this.tempBuff.push(cp);
  } else if (isAsciiLower(cp)) {
    this.currentToken.tagName += toChar(cp);
    this.tempBuff.push(cp);
  } else {
    if (this._isAppropriateEndTagToken()) {
      if (isWhitespace$1(cp)) {
        this.state = BEFORE_ATTRIBUTE_NAME_STATE;
        return;
      }
      if (cp === $$9.SOLIDUS) {
        this.state = SELF_CLOSING_START_TAG_STATE;
        return;
      }
      if (cp === $$9.GREATER_THAN_SIGN) {
        this._emitCurrentToken();
        this.state = DATA_STATE;
        return;
      }
    }
    this._emitChar("<");
    this._emitChar("/");
    this._emitSeveralCodePoints(this.tempBuff);
    this._reconsumeInState(RAWTEXT_STATE);
  }
};
_$3[SCRIPT_DATA_LESS_THAN_SIGN_STATE] = function scriptDataLessThanSignState(cp) {
  if (cp === $$9.SOLIDUS) {
    this.tempBuff = [];
    this.state = SCRIPT_DATA_END_TAG_OPEN_STATE;
  } else if (cp === $$9.EXCLAMATION_MARK) {
    this.state = SCRIPT_DATA_ESCAPE_START_STATE;
    this._emitChar("<");
    this._emitChar("!");
  } else {
    this._emitChar("<");
    this._reconsumeInState(SCRIPT_DATA_STATE);
  }
};
_$3[SCRIPT_DATA_END_TAG_OPEN_STATE] = function scriptDataEndTagOpenState(cp) {
  if (isAsciiLetter(cp)) {
    this._createEndTagToken();
    this._reconsumeInState(SCRIPT_DATA_END_TAG_NAME_STATE);
  } else {
    this._emitChar("<");
    this._emitChar("/");
    this._reconsumeInState(SCRIPT_DATA_STATE);
  }
};
_$3[SCRIPT_DATA_END_TAG_NAME_STATE] = function scriptDataEndTagNameState(cp) {
  if (isAsciiUpper(cp)) {
    this.currentToken.tagName += toAsciiLowerChar(cp);
    this.tempBuff.push(cp);
  } else if (isAsciiLower(cp)) {
    this.currentToken.tagName += toChar(cp);
    this.tempBuff.push(cp);
  } else {
    if (this._isAppropriateEndTagToken()) {
      if (isWhitespace$1(cp)) {
        this.state = BEFORE_ATTRIBUTE_NAME_STATE;
        return;
      } else if (cp === $$9.SOLIDUS) {
        this.state = SELF_CLOSING_START_TAG_STATE;
        return;
      } else if (cp === $$9.GREATER_THAN_SIGN) {
        this._emitCurrentToken();
        this.state = DATA_STATE;
        return;
      }
    }
    this._emitChar("<");
    this._emitChar("/");
    this._emitSeveralCodePoints(this.tempBuff);
    this._reconsumeInState(SCRIPT_DATA_STATE);
  }
};
_$3[SCRIPT_DATA_ESCAPE_START_STATE] = function scriptDataEscapeStartState(cp) {
  if (cp === $$9.HYPHEN_MINUS) {
    this.state = SCRIPT_DATA_ESCAPE_START_DASH_STATE;
    this._emitChar("-");
  } else
    this._reconsumeInState(SCRIPT_DATA_STATE);
};
_$3[SCRIPT_DATA_ESCAPE_START_DASH_STATE] = function scriptDataEscapeStartDashState(cp) {
  if (cp === $$9.HYPHEN_MINUS) {
    this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
    this._emitChar("-");
  } else
    this._reconsumeInState(SCRIPT_DATA_STATE);
};
_$3[SCRIPT_DATA_ESCAPED_STATE] = function scriptDataEscapedState(cp) {
  if (cp === $$9.HYPHEN_MINUS) {
    this.state = SCRIPT_DATA_ESCAPED_DASH_STATE;
    this._emitChar("-");
  } else if (cp === $$9.LESS_THAN_SIGN)
    this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
  else if (cp === $$9.NULL)
    this._emitChar(UNICODE$3.REPLACEMENT_CHARACTER);
  else if (cp === $$9.EOF)
    this._reconsumeInState(DATA_STATE);
  else
    this._emitCodePoint(cp);
};
_$3[SCRIPT_DATA_ESCAPED_DASH_STATE] = function scriptDataEscapedDashState(cp) {
  if (cp === $$9.HYPHEN_MINUS) {
    this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
    this._emitChar("-");
  } else if (cp === $$9.LESS_THAN_SIGN)
    this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
  else if (cp === $$9.NULL) {
    this.state = SCRIPT_DATA_ESCAPED_STATE;
    this._emitChar(UNICODE$3.REPLACEMENT_CHARACTER);
  } else if (cp === $$9.EOF)
    this._reconsumeInState(DATA_STATE);
  else {
    this.state = SCRIPT_DATA_ESCAPED_STATE;
    this._emitCodePoint(cp);
  }
};
_$3[SCRIPT_DATA_ESCAPED_DASH_DASH_STATE] = function scriptDataEscapedDashDashState(cp) {
  if (cp === $$9.HYPHEN_MINUS)
    this._emitChar("-");
  else if (cp === $$9.LESS_THAN_SIGN)
    this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
  else if (cp === $$9.GREATER_THAN_SIGN) {
    this.state = SCRIPT_DATA_STATE;
    this._emitChar(">");
  } else if (cp === $$9.NULL) {
    this.state = SCRIPT_DATA_ESCAPED_STATE;
    this._emitChar(UNICODE$3.REPLACEMENT_CHARACTER);
  } else if (cp === $$9.EOF)
    this._reconsumeInState(DATA_STATE);
  else {
    this.state = SCRIPT_DATA_ESCAPED_STATE;
    this._emitCodePoint(cp);
  }
};
_$3[SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE] = function scriptDataEscapedLessThanSignState(cp) {
  if (cp === $$9.SOLIDUS) {
    this.tempBuff = [];
    this.state = SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE;
  } else if (isAsciiLetter(cp)) {
    this.tempBuff = [];
    this._emitChar("<");
    this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE);
  } else {
    this._emitChar("<");
    this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
  }
};
_$3[SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE] = function scriptDataEscapedEndTagOpenState(cp) {
  if (isAsciiLetter(cp)) {
    this._createEndTagToken();
    this._reconsumeInState(SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE);
  } else {
    this._emitChar("<");
    this._emitChar("/");
    this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
  }
};
_$3[SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE] = function scriptDataEscapedEndTagNameState(cp) {
  if (isAsciiUpper(cp)) {
    this.currentToken.tagName += toAsciiLowerChar(cp);
    this.tempBuff.push(cp);
  } else if (isAsciiLower(cp)) {
    this.currentToken.tagName += toChar(cp);
    this.tempBuff.push(cp);
  } else {
    if (this._isAppropriateEndTagToken()) {
      if (isWhitespace$1(cp)) {
        this.state = BEFORE_ATTRIBUTE_NAME_STATE;
        return;
      }
      if (cp === $$9.SOLIDUS) {
        this.state = SELF_CLOSING_START_TAG_STATE;
        return;
      }
      if (cp === $$9.GREATER_THAN_SIGN) {
        this._emitCurrentToken();
        this.state = DATA_STATE;
        return;
      }
    }
    this._emitChar("<");
    this._emitChar("/");
    this._emitSeveralCodePoints(this.tempBuff);
    this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
  }
};
_$3[SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE] = function scriptDataDoubleEscapeStartState(cp) {
  if (isWhitespace$1(cp) || cp === $$9.SOLIDUS || cp === $$9.GREATER_THAN_SIGN) {
    this.state = this.isTempBufferEqualToScriptString() ? SCRIPT_DATA_DOUBLE_ESCAPED_STATE : SCRIPT_DATA_ESCAPED_STATE;
    this._emitCodePoint(cp);
  } else if (isAsciiUpper(cp)) {
    this.tempBuff.push(toAsciiLowerCodePoint(cp));
    this._emitCodePoint(cp);
  } else if (isAsciiLower(cp)) {
    this.tempBuff.push(cp);
    this._emitCodePoint(cp);
  } else
    this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
};
_$3[SCRIPT_DATA_DOUBLE_ESCAPED_STATE] = function scriptDataDoubleEscapedState(cp) {
  if (cp === $$9.HYPHEN_MINUS) {
    this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE;
    this._emitChar("-");
  } else if (cp === $$9.LESS_THAN_SIGN) {
    this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
    this._emitChar("<");
  } else if (cp === $$9.NULL)
    this._emitChar(UNICODE$3.REPLACEMENT_CHARACTER);
  else if (cp === $$9.EOF)
    this._reconsumeInState(DATA_STATE);
  else
    this._emitCodePoint(cp);
};
_$3[SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE] = function scriptDataDoubleEscapedDashState(cp) {
  if (cp === $$9.HYPHEN_MINUS) {
    this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE;
    this._emitChar("-");
  } else if (cp === $$9.LESS_THAN_SIGN) {
    this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
    this._emitChar("<");
  } else if (cp === $$9.NULL) {
    this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
    this._emitChar(UNICODE$3.REPLACEMENT_CHARACTER);
  } else if (cp === $$9.EOF)
    this._reconsumeInState(DATA_STATE);
  else {
    this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
    this._emitCodePoint(cp);
  }
};
_$3[SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE] = function scriptDataDoubleEscapedDashDashState(cp) {
  if (cp === $$9.HYPHEN_MINUS)
    this._emitChar("-");
  else if (cp === $$9.LESS_THAN_SIGN) {
    this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
    this._emitChar("<");
  } else if (cp === $$9.GREATER_THAN_SIGN) {
    this.state = SCRIPT_DATA_STATE;
    this._emitChar(">");
  } else if (cp === $$9.NULL) {
    this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
    this._emitChar(UNICODE$3.REPLACEMENT_CHARACTER);
  } else if (cp === $$9.EOF)
    this._reconsumeInState(DATA_STATE);
  else {
    this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
    this._emitCodePoint(cp);
  }
};
_$3[SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE] = function scriptDataDoubleEscapedLessThanSignState(cp) {
  if (cp === $$9.SOLIDUS) {
    this.tempBuff = [];
    this.state = SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE;
    this._emitChar("/");
  } else
    this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
};
_$3[SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE] = function scriptDataDoubleEscapeEndState(cp) {
  if (isWhitespace$1(cp) || cp === $$9.SOLIDUS || cp === $$9.GREATER_THAN_SIGN) {
    this.state = this.isTempBufferEqualToScriptString() ? SCRIPT_DATA_ESCAPED_STATE : SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
    this._emitCodePoint(cp);
  } else if (isAsciiUpper(cp)) {
    this.tempBuff.push(toAsciiLowerCodePoint(cp));
    this._emitCodePoint(cp);
  } else if (isAsciiLower(cp)) {
    this.tempBuff.push(cp);
    this._emitCodePoint(cp);
  } else
    this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
};
_$3[BEFORE_ATTRIBUTE_NAME_STATE] = function beforeAttributeNameState(cp) {
  if (isWhitespace$1(cp))
    return;
  if (cp === $$9.SOLIDUS || cp === $$9.GREATER_THAN_SIGN || cp === $$9.EOF)
    this._reconsumeInState(AFTER_ATTRIBUTE_NAME_STATE);
  else if (cp === $$9.EQUALS_SIGN) {
    this._createAttr("=");
    this.state = ATTRIBUTE_NAME_STATE;
  } else {
    this._createAttr("");
    this._reconsumeInState(ATTRIBUTE_NAME_STATE);
  }
};
_$3[ATTRIBUTE_NAME_STATE] = function attributeNameState(cp) {
  if (isWhitespace$1(cp) || cp === $$9.SOLIDUS || cp === $$9.GREATER_THAN_SIGN || cp === $$9.EOF) {
    this._leaveAttrName(AFTER_ATTRIBUTE_NAME_STATE);
    this._unconsume();
  } else if (cp === $$9.EQUALS_SIGN)
    this._leaveAttrName(BEFORE_ATTRIBUTE_VALUE_STATE);
  else if (isAsciiUpper(cp))
    this.currentAttr.name += toAsciiLowerChar(cp);
  else if (cp === $$9.QUOTATION_MARK || cp === $$9.APOSTROPHE || cp === $$9.LESS_THAN_SIGN)
    this.currentAttr.name += toChar(cp);
  else if (cp === $$9.NULL)
    this.currentAttr.name += UNICODE$3.REPLACEMENT_CHARACTER;
  else
    this.currentAttr.name += toChar(cp);
};
_$3[AFTER_ATTRIBUTE_NAME_STATE] = function afterAttributeNameState(cp) {
  if (isWhitespace$1(cp))
    return;
  if (cp === $$9.SOLIDUS)
    this.state = SELF_CLOSING_START_TAG_STATE;
  else if (cp === $$9.EQUALS_SIGN)
    this.state = BEFORE_ATTRIBUTE_VALUE_STATE;
  else if (cp === $$9.GREATER_THAN_SIGN) {
    this.state = DATA_STATE;
    this._emitCurrentToken();
  } else if (cp === $$9.EOF)
    this._reconsumeInState(DATA_STATE);
  else {
    this._createAttr("");
    this._reconsumeInState(ATTRIBUTE_NAME_STATE);
  }
};
_$3[BEFORE_ATTRIBUTE_VALUE_STATE] = function beforeAttributeValueState(cp) {
  if (isWhitespace$1(cp))
    return;
  if (cp === $$9.QUOTATION_MARK)
    this.state = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;
  else if (cp === $$9.APOSTROPHE)
    this.state = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;
  else
    this._reconsumeInState(ATTRIBUTE_VALUE_UNQUOTED_STATE);
};
_$3[ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE] = function attributeValueDoubleQuotedState(cp) {
  if (cp === $$9.QUOTATION_MARK)
    this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
  else if (cp === $$9.AMPERSAND) {
    this.additionalAllowedCp = $$9.QUOTATION_MARK;
    this.returnState = this.state;
    this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
  } else if (cp === $$9.NULL)
    this.currentAttr.value += UNICODE$3.REPLACEMENT_CHARACTER;
  else if (cp === $$9.EOF)
    this._reconsumeInState(DATA_STATE);
  else
    this.currentAttr.value += toChar(cp);
};
_$3[ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE] = function attributeValueSingleQuotedState(cp) {
  if (cp === $$9.APOSTROPHE)
    this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
  else if (cp === $$9.AMPERSAND) {
    this.additionalAllowedCp = $$9.APOSTROPHE;
    this.returnState = this.state;
    this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
  } else if (cp === $$9.NULL)
    this.currentAttr.value += UNICODE$3.REPLACEMENT_CHARACTER;
  else if (cp === $$9.EOF)
    this._reconsumeInState(DATA_STATE);
  else
    this.currentAttr.value += toChar(cp);
};
_$3[ATTRIBUTE_VALUE_UNQUOTED_STATE] = function attributeValueUnquotedState(cp) {
  if (isWhitespace$1(cp))
    this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
  else if (cp === $$9.AMPERSAND) {
    this.additionalAllowedCp = $$9.GREATER_THAN_SIGN;
    this.returnState = this.state;
    this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
  } else if (cp === $$9.GREATER_THAN_SIGN) {
    this._leaveAttrValue(DATA_STATE);
    this._emitCurrentToken();
  } else if (cp === $$9.NULL)
    this.currentAttr.value += UNICODE$3.REPLACEMENT_CHARACTER;
  else if (cp === $$9.QUOTATION_MARK || cp === $$9.APOSTROPHE || cp === $$9.LESS_THAN_SIGN || cp === $$9.EQUALS_SIGN || cp === $$9.GRAVE_ACCENT)
    this.currentAttr.value += toChar(cp);
  else if (cp === $$9.EOF)
    this._reconsumeInState(DATA_STATE);
  else
    this.currentAttr.value += toChar(cp);
};
_$3[CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE] = function characterReferenceInAttributeValueState(cp) {
  var referencedCodePoints = this._consumeCharacterReference(cp, true);
  if (!this._ensureHibernation()) {
    if (referencedCodePoints) {
      for (var i2 = 0; i2 < referencedCodePoints.length; i2++)
        this.currentAttr.value += toChar(referencedCodePoints[i2]);
    } else
      this.currentAttr.value += "&";
    this.state = this.returnState;
  }
};
_$3[AFTER_ATTRIBUTE_VALUE_QUOTED_STATE] = function afterAttributeValueQuotedState(cp) {
  if (isWhitespace$1(cp))
    this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
  else if (cp === $$9.SOLIDUS)
    this._leaveAttrValue(SELF_CLOSING_START_TAG_STATE);
  else if (cp === $$9.GREATER_THAN_SIGN) {
    this._leaveAttrValue(DATA_STATE);
    this._emitCurrentToken();
  } else if (cp === $$9.EOF)
    this._reconsumeInState(DATA_STATE);
  else
    this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
};
_$3[SELF_CLOSING_START_TAG_STATE] = function selfClosingStartTagState(cp) {
  if (cp === $$9.GREATER_THAN_SIGN) {
    this.currentToken.selfClosing = true;
    this.state = DATA_STATE;
    this._emitCurrentToken();
  } else if (cp === $$9.EOF)
    this._reconsumeInState(DATA_STATE);
  else
    this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
};
_$3[BOGUS_COMMENT_STATE] = function bogusCommentState() {
  this._createCommentToken();
  this._reconsumeInState(BOGUS_COMMENT_STATE_CONTINUATION);
};
_$3[BOGUS_COMMENT_STATE_CONTINUATION] = function bogusCommentStateContinuation(cp) {
  while (true) {
    if (cp === $$9.GREATER_THAN_SIGN) {
      this.state = DATA_STATE;
      break;
    } else if (cp === $$9.EOF) {
      this._reconsumeInState(DATA_STATE);
      break;
    } else {
      this.currentToken.data += cp === $$9.NULL ? UNICODE$3.REPLACEMENT_CHARACTER : toChar(cp);
      this._hibernationSnapshot();
      cp = this._consume();
      if (this._ensureHibernation())
        return;
    }
  }
  this._emitCurrentToken();
};
_$3[MARKUP_DECLARATION_OPEN_STATE] = function markupDeclarationOpenState(cp) {
  var dashDashMatch = this._consumeSubsequentIfMatch($$.DASH_DASH_STRING, cp, true), doctypeMatch = !dashDashMatch && this._consumeSubsequentIfMatch($$.DOCTYPE_STRING, cp, false), cdataMatch = !dashDashMatch && !doctypeMatch && this.allowCDATA && this._consumeSubsequentIfMatch($$.CDATA_START_STRING, cp, true);
  if (!this._ensureHibernation()) {
    if (dashDashMatch) {
      this._createCommentToken();
      this.state = COMMENT_START_STATE;
    } else if (doctypeMatch)
      this.state = DOCTYPE_STATE;
    else if (cdataMatch)
      this.state = CDATA_SECTION_STATE;
    else
      this._reconsumeInState(BOGUS_COMMENT_STATE);
  }
};
_$3[COMMENT_START_STATE] = function commentStartState(cp) {
  if (cp === $$9.HYPHEN_MINUS)
    this.state = COMMENT_START_DASH_STATE;
  else if (cp === $$9.NULL) {
    this.currentToken.data += UNICODE$3.REPLACEMENT_CHARACTER;
    this.state = COMMENT_STATE;
  } else if (cp === $$9.GREATER_THAN_SIGN) {
    this.state = DATA_STATE;
    this._emitCurrentToken();
  } else if (cp === $$9.EOF) {
    this._emitCurrentToken();
    this._reconsumeInState(DATA_STATE);
  } else {
    this.currentToken.data += toChar(cp);
    this.state = COMMENT_STATE;
  }
};
_$3[COMMENT_START_DASH_STATE] = function commentStartDashState(cp) {
  if (cp === $$9.HYPHEN_MINUS)
    this.state = COMMENT_END_STATE;
  else if (cp === $$9.NULL) {
    this.currentToken.data += "-";
    this.currentToken.data += UNICODE$3.REPLACEMENT_CHARACTER;
    this.state = COMMENT_STATE;
  } else if (cp === $$9.GREATER_THAN_SIGN) {
    this.state = DATA_STATE;
    this._emitCurrentToken();
  } else if (cp === $$9.EOF) {
    this._emitCurrentToken();
    this._reconsumeInState(DATA_STATE);
  } else {
    this.currentToken.data += "-";
    this.currentToken.data += toChar(cp);
    this.state = COMMENT_STATE;
  }
};
_$3[COMMENT_STATE] = function commentState(cp) {
  if (cp === $$9.HYPHEN_MINUS)
    this.state = COMMENT_END_DASH_STATE;
  else if (cp === $$9.NULL)
    this.currentToken.data += UNICODE$3.REPLACEMENT_CHARACTER;
  else if (cp === $$9.EOF) {
    this._emitCurrentToken();
    this._reconsumeInState(DATA_STATE);
  } else
    this.currentToken.data += toChar(cp);
};
_$3[COMMENT_END_DASH_STATE] = function commentEndDashState(cp) {
  if (cp === $$9.HYPHEN_MINUS)
    this.state = COMMENT_END_STATE;
  else if (cp === $$9.NULL) {
    this.currentToken.data += "-";
    this.currentToken.data += UNICODE$3.REPLACEMENT_CHARACTER;
    this.state = COMMENT_STATE;
  } else if (cp === $$9.EOF) {
    this._emitCurrentToken();
    this._reconsumeInState(DATA_STATE);
  } else {
    this.currentToken.data += "-";
    this.currentToken.data += toChar(cp);
    this.state = COMMENT_STATE;
  }
};
_$3[COMMENT_END_STATE] = function commentEndState(cp) {
  if (cp === $$9.GREATER_THAN_SIGN) {
    this.state = DATA_STATE;
    this._emitCurrentToken();
  } else if (cp === $$9.EXCLAMATION_MARK)
    this.state = COMMENT_END_BANG_STATE;
  else if (cp === $$9.HYPHEN_MINUS)
    this.currentToken.data += "-";
  else if (cp === $$9.NULL) {
    this.currentToken.data += "--";
    this.currentToken.data += UNICODE$3.REPLACEMENT_CHARACTER;
    this.state = COMMENT_STATE;
  } else if (cp === $$9.EOF) {
    this._reconsumeInState(DATA_STATE);
    this._emitCurrentToken();
  } else {
    this.currentToken.data += "--";
    this.currentToken.data += toChar(cp);
    this.state = COMMENT_STATE;
  }
};
_$3[COMMENT_END_BANG_STATE] = function commentEndBangState(cp) {
  if (cp === $$9.HYPHEN_MINUS) {
    this.currentToken.data += "--!";
    this.state = COMMENT_END_DASH_STATE;
  } else if (cp === $$9.GREATER_THAN_SIGN) {
    this.state = DATA_STATE;
    this._emitCurrentToken();
  } else if (cp === $$9.NULL) {
    this.currentToken.data += "--!";
    this.currentToken.data += UNICODE$3.REPLACEMENT_CHARACTER;
    this.state = COMMENT_STATE;
  } else if (cp === $$9.EOF) {
    this._emitCurrentToken();
    this._reconsumeInState(DATA_STATE);
  } else {
    this.currentToken.data += "--!";
    this.currentToken.data += toChar(cp);
    this.state = COMMENT_STATE;
  }
};
_$3[DOCTYPE_STATE] = function doctypeState(cp) {
  if (isWhitespace$1(cp))
    return;
  else if (cp === $$9.GREATER_THAN_SIGN) {
    this._createDoctypeToken(null);
    this.currentToken.forceQuirks = true;
    this._emitCurrentToken();
    this.state = DATA_STATE;
  } else if (cp === $$9.EOF) {
    this._createDoctypeToken(null);
    this.currentToken.forceQuirks = true;
    this._emitCurrentToken();
    this._reconsumeInState(DATA_STATE);
  } else {
    this._createDoctypeToken("");
    this._reconsumeInState(DOCTYPE_NAME_STATE);
  }
};
_$3[DOCTYPE_NAME_STATE] = function doctypeNameState(cp) {
  if (isWhitespace$1(cp) || cp === $$9.GREATER_THAN_SIGN || cp === $$9.EOF)
    this._reconsumeInState(AFTER_DOCTYPE_NAME_STATE);
  else if (isAsciiUpper(cp))
    this.currentToken.name += toAsciiLowerChar(cp);
  else if (cp === $$9.NULL)
    this.currentToken.name += UNICODE$3.REPLACEMENT_CHARACTER;
  else
    this.currentToken.name += toChar(cp);
};
_$3[AFTER_DOCTYPE_NAME_STATE] = function afterDoctypeNameState(cp) {
  if (isWhitespace$1(cp))
    return;
  if (cp === $$9.GREATER_THAN_SIGN) {
    this.state = DATA_STATE;
    this._emitCurrentToken();
  } else {
    var publicMatch = this._consumeSubsequentIfMatch($$.PUBLIC_STRING, cp, false), systemMatch = !publicMatch && this._consumeSubsequentIfMatch($$.SYSTEM_STRING, cp, false);
    if (!this._ensureHibernation()) {
      if (publicMatch)
        this.state = BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
      else if (systemMatch)
        this.state = BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
      else {
        this.currentToken.forceQuirks = true;
        this.state = BOGUS_DOCTYPE_STATE;
      }
    }
  }
};
_$3[BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE] = function beforeDoctypePublicIdentifierState(cp) {
  if (isWhitespace$1(cp))
    return;
  if (cp === $$9.QUOTATION_MARK) {
    this.currentToken.publicId = "";
    this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
  } else if (cp === $$9.APOSTROPHE) {
    this.currentToken.publicId = "";
    this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
  } else {
    this.currentToken.forceQuirks = true;
    this._reconsumeInState(BOGUS_DOCTYPE_STATE);
  }
};
_$3[DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE] = function doctypePublicIdentifierDoubleQuotedState(cp) {
  if (cp === $$9.QUOTATION_MARK)
    this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;
  else if (cp === $$9.NULL)
    this.currentToken.publicId += UNICODE$3.REPLACEMENT_CHARACTER;
  else if (cp === $$9.GREATER_THAN_SIGN) {
    this.currentToken.forceQuirks = true;
    this._emitCurrentToken();
    this.state = DATA_STATE;
  } else if (cp === $$9.EOF) {
    this.currentToken.forceQuirks = true;
    this._emitCurrentToken();
    this._reconsumeInState(DATA_STATE);
  } else
    this.currentToken.publicId += toChar(cp);
};
_$3[DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE] = function doctypePublicIdentifierSingleQuotedState(cp) {
  if (cp === $$9.APOSTROPHE)
    this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;
  else if (cp === $$9.NULL)
    this.currentToken.publicId += UNICODE$3.REPLACEMENT_CHARACTER;
  else if (cp === $$9.GREATER_THAN_SIGN) {
    this.currentToken.forceQuirks = true;
    this._emitCurrentToken();
    this.state = DATA_STATE;
  } else if (cp === $$9.EOF) {
    this.currentToken.forceQuirks = true;
    this._emitCurrentToken();
    this._reconsumeInState(DATA_STATE);
  } else
    this.currentToken.publicId += toChar(cp);
};
_$3[BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE] = function betweenDoctypePublicAndSystemIdentifiersState(cp) {
  if (isWhitespace$1(cp))
    return;
  if (cp === $$9.GREATER_THAN_SIGN) {
    this._emitCurrentToken();
    this.state = DATA_STATE;
  } else if (cp === $$9.QUOTATION_MARK) {
    this.currentToken.systemId = "";
    this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
  } else if (cp === $$9.APOSTROPHE) {
    this.currentToken.systemId = "";
    this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
  } else {
    this.currentToken.forceQuirks = true;
    this._reconsumeInState(BOGUS_DOCTYPE_STATE);
  }
};
_$3[BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE] = function beforeDoctypeSystemIdentifierState(cp) {
  if (isWhitespace$1(cp))
    return;
  if (cp === $$9.QUOTATION_MARK) {
    this.currentToken.systemId = "";
    this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
  } else if (cp === $$9.APOSTROPHE) {
    this.currentToken.systemId = "";
    this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
  } else {
    this.currentToken.forceQuirks = true;
    this._reconsumeInState(BOGUS_DOCTYPE_STATE);
  }
};
_$3[DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE] = function doctypeSystemIdentifierDoubleQuotedState(cp) {
  if (cp === $$9.QUOTATION_MARK)
    this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
  else if (cp === $$9.GREATER_THAN_SIGN) {
    this.currentToken.forceQuirks = true;
    this._emitCurrentToken();
    this.state = DATA_STATE;
  } else if (cp === $$9.NULL)
    this.currentToken.systemId += UNICODE$3.REPLACEMENT_CHARACTER;
  else if (cp === $$9.EOF) {
    this.currentToken.forceQuirks = true;
    this._emitCurrentToken();
    this._reconsumeInState(DATA_STATE);
  } else
    this.currentToken.systemId += toChar(cp);
};
_$3[DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE] = function doctypeSystemIdentifierSingleQuotedState(cp) {
  if (cp === $$9.APOSTROPHE)
    this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
  else if (cp === $$9.GREATER_THAN_SIGN) {
    this.currentToken.forceQuirks = true;
    this._emitCurrentToken();
    this.state = DATA_STATE;
  } else if (cp === $$9.NULL)
    this.currentToken.systemId += UNICODE$3.REPLACEMENT_CHARACTER;
  else if (cp === $$9.EOF) {
    this.currentToken.forceQuirks = true;
    this._emitCurrentToken();
    this._reconsumeInState(DATA_STATE);
  } else
    this.currentToken.systemId += toChar(cp);
};
_$3[AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE] = function afterDoctypeSystemIdentifierState(cp) {
  if (isWhitespace$1(cp))
    return;
  if (cp === $$9.GREATER_THAN_SIGN) {
    this._emitCurrentToken();
    this.state = DATA_STATE;
  } else if (cp === $$9.EOF) {
    this.currentToken.forceQuirks = true;
    this._emitCurrentToken();
    this._reconsumeInState(DATA_STATE);
  } else
    this.state = BOGUS_DOCTYPE_STATE;
};
_$3[BOGUS_DOCTYPE_STATE] = function bogusDoctypeState(cp) {
  if (cp === $$9.GREATER_THAN_SIGN) {
    this._emitCurrentToken();
    this.state = DATA_STATE;
  } else if (cp === $$9.EOF) {
    this._emitCurrentToken();
    this._reconsumeInState(DATA_STATE);
  }
};
_$3[CDATA_SECTION_STATE] = function cdataSectionState(cp) {
  while (true) {
    if (cp === $$9.EOF) {
      this._reconsumeInState(DATA_STATE);
      break;
    } else {
      var cdataEndMatch = this._consumeSubsequentIfMatch($$.CDATA_END_STRING, cp, true);
      if (this._ensureHibernation())
        break;
      if (cdataEndMatch) {
        this.state = DATA_STATE;
        break;
      }
      this._emitCodePoint(cp);
      this._hibernationSnapshot();
      cp = this._consume();
      if (this._ensureHibernation())
        break;
    }
  }
};
var open_element_stackExports = {};
var open_element_stack = {
  get exports() {
    return open_element_stackExports;
  },
  set exports(v) {
    open_element_stackExports = v;
  }
};
var html = {};
var NS$5 = html.NAMESPACES = {
  HTML: "http://www.w3.org/1999/xhtml",
  MATHML: "http://www.w3.org/1998/Math/MathML",
  SVG: "http://www.w3.org/2000/svg",
  XLINK: "http://www.w3.org/1999/xlink",
  XML: "http://www.w3.org/XML/1998/namespace",
  XMLNS: "http://www.w3.org/2000/xmlns/"
};
html.ATTRS = {
  TYPE: "type",
  ACTION: "action",
  ENCODING: "encoding",
  PROMPT: "prompt",
  NAME: "name",
  COLOR: "color",
  FACE: "face",
  SIZE: "size"
};
html.DOCUMENT_MODE = {
  NO_QUIRKS: "no-quirks",
  QUIRKS: "quirks",
  LIMITED_QUIRKS: "limited-quirks"
};
var $$8 = html.TAG_NAMES = {
  A: "a",
  ADDRESS: "address",
  ANNOTATION_XML: "annotation-xml",
  APPLET: "applet",
  AREA: "area",
  ARTICLE: "article",
  ASIDE: "aside",
  B: "b",
  BASE: "base",
  BASEFONT: "basefont",
  BGSOUND: "bgsound",
  BIG: "big",
  BLOCKQUOTE: "blockquote",
  BODY: "body",
  BR: "br",
  BUTTON: "button",
  CAPTION: "caption",
  CENTER: "center",
  CODE: "code",
  COL: "col",
  COLGROUP: "colgroup",
  DD: "dd",
  DESC: "desc",
  DETAILS: "details",
  DIALOG: "dialog",
  DIR: "dir",
  DIV: "div",
  DL: "dl",
  DT: "dt",
  EM: "em",
  EMBED: "embed",
  FIELDSET: "fieldset",
  FIGCAPTION: "figcaption",
  FIGURE: "figure",
  FONT: "font",
  FOOTER: "footer",
  FOREIGN_OBJECT: "foreignObject",
  FORM: "form",
  FRAME: "frame",
  FRAMESET: "frameset",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  HEAD: "head",
  HEADER: "header",
  HGROUP: "hgroup",
  HR: "hr",
  HTML: "html",
  I: "i",
  IMG: "img",
  IMAGE: "image",
  INPUT: "input",
  IFRAME: "iframe",
  KEYGEN: "keygen",
  LABEL: "label",
  LI: "li",
  LINK: "link",
  LISTING: "listing",
  MAIN: "main",
  MALIGNMARK: "malignmark",
  MARQUEE: "marquee",
  MATH: "math",
  MENU: "menu",
  MENUITEM: "menuitem",
  META: "meta",
  MGLYPH: "mglyph",
  MI: "mi",
  MO: "mo",
  MN: "mn",
  MS: "ms",
  MTEXT: "mtext",
  NAV: "nav",
  NOBR: "nobr",
  NOFRAMES: "noframes",
  NOEMBED: "noembed",
  NOSCRIPT: "noscript",
  OBJECT: "object",
  OL: "ol",
  OPTGROUP: "optgroup",
  OPTION: "option",
  P: "p",
  PARAM: "param",
  PLAINTEXT: "plaintext",
  PRE: "pre",
  RB: "rb",
  RP: "rp",
  RT: "rt",
  RTC: "rtc",
  RUBY: "ruby",
  S: "s",
  SCRIPT: "script",
  SECTION: "section",
  SELECT: "select",
  SOURCE: "source",
  SMALL: "small",
  SPAN: "span",
  STRIKE: "strike",
  STRONG: "strong",
  STYLE: "style",
  SUB: "sub",
  SUMMARY: "summary",
  SUP: "sup",
  TABLE: "table",
  TBODY: "tbody",
  TEMPLATE: "template",
  TEXTAREA: "textarea",
  TFOOT: "tfoot",
  TD: "td",
  TH: "th",
  THEAD: "thead",
  TITLE: "title",
  TR: "tr",
  TRACK: "track",
  TT: "tt",
  U: "u",
  UL: "ul",
  SVG: "svg",
  VAR: "var",
  WBR: "wbr",
  XMP: "xmp"
};
var SPECIAL_ELEMENTS = html.SPECIAL_ELEMENTS = /* @__PURE__ */ Object.create(null);
SPECIAL_ELEMENTS[NS$5.HTML] = /* @__PURE__ */ Object.create(null);
SPECIAL_ELEMENTS[NS$5.HTML][$$8.ADDRESS] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.APPLET] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.AREA] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.ARTICLE] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.ASIDE] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.BASE] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.BASEFONT] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.BGSOUND] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.BLOCKQUOTE] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.BODY] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.BR] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.BUTTON] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.CAPTION] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.CENTER] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.COL] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.COLGROUP] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.DD] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.DETAILS] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.DIR] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.DIV] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.DL] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.DT] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.EMBED] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.FIELDSET] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.FIGCAPTION] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.FIGURE] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.FOOTER] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.FORM] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.FRAME] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.FRAMESET] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.H1] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.H2] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.H3] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.H4] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.H5] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.H6] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.HEAD] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.HEADER] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.HGROUP] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.HR] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.HTML] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.IFRAME] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.IMG] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.INPUT] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.LI] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.LINK] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.LISTING] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.MAIN] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.MARQUEE] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.MENU] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.META] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.NAV] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.NOEMBED] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.NOFRAMES] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.NOSCRIPT] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.OBJECT] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.OL] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.P] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.PARAM] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.PLAINTEXT] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.PRE] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.SCRIPT] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.SECTION] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.SELECT] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.SOURCE] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.STYLE] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.SUMMARY] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.TABLE] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.TBODY] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.TD] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.TEMPLATE] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.TEXTAREA] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.TFOOT] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.TH] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.THEAD] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.TITLE] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.TR] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.TRACK] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.UL] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.WBR] = true;
SPECIAL_ELEMENTS[NS$5.HTML][$$8.XMP] = true;
SPECIAL_ELEMENTS[NS$5.MATHML] = /* @__PURE__ */ Object.create(null);
SPECIAL_ELEMENTS[NS$5.MATHML][$$8.MI] = true;
SPECIAL_ELEMENTS[NS$5.MATHML][$$8.MO] = true;
SPECIAL_ELEMENTS[NS$5.MATHML][$$8.MN] = true;
SPECIAL_ELEMENTS[NS$5.MATHML][$$8.MS] = true;
SPECIAL_ELEMENTS[NS$5.MATHML][$$8.MTEXT] = true;
SPECIAL_ELEMENTS[NS$5.MATHML][$$8.ANNOTATION_XML] = true;
SPECIAL_ELEMENTS[NS$5.SVG] = /* @__PURE__ */ Object.create(null);
SPECIAL_ELEMENTS[NS$5.SVG][$$8.TITLE] = true;
SPECIAL_ELEMENTS[NS$5.SVG][$$8.FOREIGN_OBJECT] = true;
SPECIAL_ELEMENTS[NS$5.SVG][$$8.DESC] = true;
var HTML$5 = html;
var $$7 = HTML$5.TAG_NAMES, NS$4 = HTML$5.NAMESPACES;
function isImpliedEndTagRequired(tn) {
  switch (tn.length) {
    case 1:
      return tn === $$7.P;
    case 2:
      return tn === $$7.RB || tn === $$7.RP || tn === $$7.RT || tn === $$7.DD || tn === $$7.DT || tn === $$7.LI;
    case 3:
      return tn === $$7.RTC;
    case 6:
      return tn === $$7.OPTION;
    case 8:
      return tn === $$7.OPTGROUP || tn === $$7.MENUITEM;
  }
  return false;
}
function isScopingElement(tn, ns) {
  switch (tn.length) {
    case 2:
      if (tn === $$7.TD || tn === $$7.TH)
        return ns === NS$4.HTML;
      else if (tn === $$7.MI || tn === $$7.MO || tn === $$7.MN || tn === $$7.MS)
        return ns === NS$4.MATHML;
      break;
    case 4:
      if (tn === $$7.HTML)
        return ns === NS$4.HTML;
      else if (tn === $$7.DESC)
        return ns === NS$4.SVG;
      break;
    case 5:
      if (tn === $$7.TABLE)
        return ns === NS$4.HTML;
      else if (tn === $$7.MTEXT)
        return ns === NS$4.MATHML;
      else if (tn === $$7.TITLE)
        return ns === NS$4.SVG;
      break;
    case 6:
      return (tn === $$7.APPLET || tn === $$7.OBJECT) && ns === NS$4.HTML;
    case 7:
      return (tn === $$7.CAPTION || tn === $$7.MARQUEE) && ns === NS$4.HTML;
    case 8:
      return tn === $$7.TEMPLATE && ns === NS$4.HTML;
    case 13:
      return tn === $$7.FOREIGN_OBJECT && ns === NS$4.SVG;
    case 14:
      return tn === $$7.ANNOTATION_XML && ns === NS$4.MATHML;
  }
  return false;
}
var OpenElementStack$1 = open_element_stack.exports = function(document, treeAdapter) {
  this.stackTop = -1;
  this.items = [];
  this.current = document;
  this.currentTagName = null;
  this.currentTmplContent = null;
  this.tmplCount = 0;
  this.treeAdapter = treeAdapter;
};
OpenElementStack$1.prototype._indexOf = function(element2) {
  var idx = -1;
  for (var i2 = this.stackTop; i2 >= 0; i2--) {
    if (this.items[i2] === element2) {
      idx = i2;
      break;
    }
  }
  return idx;
};
OpenElementStack$1.prototype._isInTemplate = function() {
  return this.currentTagName === $$7.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS$4.HTML;
};
OpenElementStack$1.prototype._updateCurrentElement = function() {
  this.current = this.items[this.stackTop];
  this.currentTagName = this.current && this.treeAdapter.getTagName(this.current);
  this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null;
};
OpenElementStack$1.prototype.push = function(element2) {
  this.items[++this.stackTop] = element2;
  this._updateCurrentElement();
  if (this._isInTemplate())
    this.tmplCount++;
};
OpenElementStack$1.prototype.pop = function() {
  this.stackTop--;
  if (this.tmplCount > 0 && this._isInTemplate())
    this.tmplCount--;
  this._updateCurrentElement();
};
OpenElementStack$1.prototype.replace = function(oldElement, newElement) {
  var idx = this._indexOf(oldElement);
  this.items[idx] = newElement;
  if (idx === this.stackTop)
    this._updateCurrentElement();
};
OpenElementStack$1.prototype.insertAfter = function(referenceElement, newElement) {
  var insertionIdx = this._indexOf(referenceElement) + 1;
  this.items.splice(insertionIdx, 0, newElement);
  if (insertionIdx === ++this.stackTop)
    this._updateCurrentElement();
};
OpenElementStack$1.prototype.popUntilTagNamePopped = function(tagName) {
  while (this.stackTop > -1) {
    var tn = this.currentTagName, ns = this.treeAdapter.getNamespaceURI(this.current);
    this.pop();
    if (tn === tagName && ns === NS$4.HTML)
      break;
  }
};
OpenElementStack$1.prototype.popUntilElementPopped = function(element2) {
  while (this.stackTop > -1) {
    var poppedElement = this.current;
    this.pop();
    if (poppedElement === element2)
      break;
  }
};
OpenElementStack$1.prototype.popUntilNumberedHeaderPopped = function() {
  while (this.stackTop > -1) {
    var tn = this.currentTagName, ns = this.treeAdapter.getNamespaceURI(this.current);
    this.pop();
    if (tn === $$7.H1 || tn === $$7.H2 || tn === $$7.H3 || tn === $$7.H4 || tn === $$7.H5 || tn === $$7.H6 && ns === NS$4.HTML)
      break;
  }
};
OpenElementStack$1.prototype.popUntilTableCellPopped = function() {
  while (this.stackTop > -1) {
    var tn = this.currentTagName, ns = this.treeAdapter.getNamespaceURI(this.current);
    this.pop();
    if (tn === $$7.TD || tn === $$7.TH && ns === NS$4.HTML)
      break;
  }
};
OpenElementStack$1.prototype.popAllUpToHtmlElement = function() {
  this.stackTop = 0;
  this._updateCurrentElement();
};
OpenElementStack$1.prototype.clearBackToTableContext = function() {
  while (this.currentTagName !== $$7.TABLE && this.currentTagName !== $$7.TEMPLATE && this.currentTagName !== $$7.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS$4.HTML)
    this.pop();
};
OpenElementStack$1.prototype.clearBackToTableBodyContext = function() {
  while (this.currentTagName !== $$7.TBODY && this.currentTagName !== $$7.TFOOT && this.currentTagName !== $$7.THEAD && this.currentTagName !== $$7.TEMPLATE && this.currentTagName !== $$7.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS$4.HTML)
    this.pop();
};
OpenElementStack$1.prototype.clearBackToTableRowContext = function() {
  while (this.currentTagName !== $$7.TR && this.currentTagName !== $$7.TEMPLATE && this.currentTagName !== $$7.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS$4.HTML)
    this.pop();
};
OpenElementStack$1.prototype.remove = function(element2) {
  for (var i2 = this.stackTop; i2 >= 0; i2--) {
    if (this.items[i2] === element2) {
      this.items.splice(i2, 1);
      this.stackTop--;
      this._updateCurrentElement();
      break;
    }
  }
};
OpenElementStack$1.prototype.tryPeekProperlyNestedBodyElement = function() {
  var element2 = this.items[1];
  return element2 && this.treeAdapter.getTagName(element2) === $$7.BODY ? element2 : null;
};
OpenElementStack$1.prototype.contains = function(element2) {
  return this._indexOf(element2) > -1;
};
OpenElementStack$1.prototype.getCommonAncestor = function(element2) {
  var elementIdx = this._indexOf(element2);
  return --elementIdx >= 0 ? this.items[elementIdx] : null;
};
OpenElementStack$1.prototype.isRootHtmlElementCurrent = function() {
  return this.stackTop === 0 && this.currentTagName === $$7.HTML;
};
OpenElementStack$1.prototype.hasInScope = function(tagName) {
  for (var i2 = this.stackTop; i2 >= 0; i2--) {
    var tn = this.treeAdapter.getTagName(this.items[i2]), ns = this.treeAdapter.getNamespaceURI(this.items[i2]);
    if (tn === tagName && ns === NS$4.HTML)
      return true;
    if (isScopingElement(tn, ns))
      return false;
  }
  return true;
};
OpenElementStack$1.prototype.hasNumberedHeaderInScope = function() {
  for (var i2 = this.stackTop; i2 >= 0; i2--) {
    var tn = this.treeAdapter.getTagName(this.items[i2]), ns = this.treeAdapter.getNamespaceURI(this.items[i2]);
    if ((tn === $$7.H1 || tn === $$7.H2 || tn === $$7.H3 || tn === $$7.H4 || tn === $$7.H5 || tn === $$7.H6) && ns === NS$4.HTML)
      return true;
    if (isScopingElement(tn, ns))
      return false;
  }
  return true;
};
OpenElementStack$1.prototype.hasInListItemScope = function(tagName) {
  for (var i2 = this.stackTop; i2 >= 0; i2--) {
    var tn = this.treeAdapter.getTagName(this.items[i2]), ns = this.treeAdapter.getNamespaceURI(this.items[i2]);
    if (tn === tagName && ns === NS$4.HTML)
      return true;
    if ((tn === $$7.UL || tn === $$7.OL) && ns === NS$4.HTML || isScopingElement(tn, ns))
      return false;
  }
  return true;
};
OpenElementStack$1.prototype.hasInButtonScope = function(tagName) {
  for (var i2 = this.stackTop; i2 >= 0; i2--) {
    var tn = this.treeAdapter.getTagName(this.items[i2]), ns = this.treeAdapter.getNamespaceURI(this.items[i2]);
    if (tn === tagName && ns === NS$4.HTML)
      return true;
    if (tn === $$7.BUTTON && ns === NS$4.HTML || isScopingElement(tn, ns))
      return false;
  }
  return true;
};
OpenElementStack$1.prototype.hasInTableScope = function(tagName) {
  for (var i2 = this.stackTop; i2 >= 0; i2--) {
    var tn = this.treeAdapter.getTagName(this.items[i2]), ns = this.treeAdapter.getNamespaceURI(this.items[i2]);
    if (ns !== NS$4.HTML)
      continue;
    if (tn === tagName)
      return true;
    if (tn === $$7.TABLE || tn === $$7.TEMPLATE || tn === $$7.HTML)
      return false;
  }
  return true;
};
OpenElementStack$1.prototype.hasTableBodyContextInTableScope = function() {
  for (var i2 = this.stackTop; i2 >= 0; i2--) {
    var tn = this.treeAdapter.getTagName(this.items[i2]), ns = this.treeAdapter.getNamespaceURI(this.items[i2]);
    if (ns !== NS$4.HTML)
      continue;
    if (tn === $$7.TBODY || tn === $$7.THEAD || tn === $$7.TFOOT)
      return true;
    if (tn === $$7.TABLE || tn === $$7.HTML)
      return false;
  }
  return true;
};
OpenElementStack$1.prototype.hasInSelectScope = function(tagName) {
  for (var i2 = this.stackTop; i2 >= 0; i2--) {
    var tn = this.treeAdapter.getTagName(this.items[i2]), ns = this.treeAdapter.getNamespaceURI(this.items[i2]);
    if (ns !== NS$4.HTML)
      continue;
    if (tn === tagName)
      return true;
    if (tn !== $$7.OPTION && tn !== $$7.OPTGROUP)
      return false;
  }
  return true;
};
OpenElementStack$1.prototype.generateImpliedEndTags = function() {
  while (isImpliedEndTagRequired(this.currentTagName))
    this.pop();
};
OpenElementStack$1.prototype.generateImpliedEndTagsWithExclusion = function(exclusionTagName) {
  while (isImpliedEndTagRequired(this.currentTagName) && this.currentTagName !== exclusionTagName)
    this.pop();
};
var formatting_element_listExports = {};
var formatting_element_list = {
  get exports() {
    return formatting_element_listExports;
  },
  set exports(v) {
    formatting_element_listExports = v;
  }
};
var NOAH_ARK_CAPACITY = 3;
var FormattingElementList$1 = formatting_element_list.exports = function(treeAdapter) {
  this.length = 0;
  this.entries = [];
  this.treeAdapter = treeAdapter;
  this.bookmark = null;
};
FormattingElementList$1.MARKER_ENTRY = "MARKER_ENTRY";
FormattingElementList$1.ELEMENT_ENTRY = "ELEMENT_ENTRY";
FormattingElementList$1.prototype._getNoahArkConditionCandidates = function(newElement) {
  var candidates = [];
  if (this.length >= NOAH_ARK_CAPACITY) {
    var neAttrsLength = this.treeAdapter.getAttrList(newElement).length, neTagName = this.treeAdapter.getTagName(newElement), neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
    for (var i2 = this.length - 1; i2 >= 0; i2--) {
      var entry = this.entries[i2];
      if (entry.type === FormattingElementList$1.MARKER_ENTRY)
        break;
      var element2 = entry.element, elementAttrs = this.treeAdapter.getAttrList(element2), isCandidate = this.treeAdapter.getTagName(element2) === neTagName && this.treeAdapter.getNamespaceURI(element2) === neNamespaceURI && elementAttrs.length === neAttrsLength;
      if (isCandidate)
        candidates.push({ idx: i2, attrs: elementAttrs });
    }
  }
  return candidates.length < NOAH_ARK_CAPACITY ? [] : candidates;
};
FormattingElementList$1.prototype._ensureNoahArkCondition = function(newElement) {
  var candidates = this._getNoahArkConditionCandidates(newElement), cLength = candidates.length;
  if (cLength) {
    var neAttrs = this.treeAdapter.getAttrList(newElement), neAttrsLength = neAttrs.length, neAttrsMap = /* @__PURE__ */ Object.create(null);
    for (var i2 = 0; i2 < neAttrsLength; i2++) {
      var neAttr = neAttrs[i2];
      neAttrsMap[neAttr.name] = neAttr.value;
    }
    for (i2 = 0; i2 < neAttrsLength; i2++) {
      for (var j2 = 0; j2 < cLength; j2++) {
        var cAttr = candidates[j2].attrs[i2];
        if (neAttrsMap[cAttr.name] !== cAttr.value) {
          candidates.splice(j2, 1);
          cLength--;
        }
        if (candidates.length < NOAH_ARK_CAPACITY)
          return;
      }
    }
    for (i2 = cLength - 1; i2 >= NOAH_ARK_CAPACITY - 1; i2--) {
      this.entries.splice(candidates[i2].idx, 1);
      this.length--;
    }
  }
};
FormattingElementList$1.prototype.insertMarker = function() {
  this.entries.push({ type: FormattingElementList$1.MARKER_ENTRY });
  this.length++;
};
FormattingElementList$1.prototype.pushElement = function(element2, token) {
  this._ensureNoahArkCondition(element2);
  this.entries.push({
    type: FormattingElementList$1.ELEMENT_ENTRY,
    element: element2,
    token
  });
  this.length++;
};
FormattingElementList$1.prototype.insertElementAfterBookmark = function(element2, token) {
  var bookmarkIdx = this.length - 1;
  for (; bookmarkIdx >= 0; bookmarkIdx--) {
    if (this.entries[bookmarkIdx] === this.bookmark)
      break;
  }
  this.entries.splice(bookmarkIdx + 1, 0, {
    type: FormattingElementList$1.ELEMENT_ENTRY,
    element: element2,
    token
  });
  this.length++;
};
FormattingElementList$1.prototype.removeEntry = function(entry) {
  for (var i2 = this.length - 1; i2 >= 0; i2--) {
    if (this.entries[i2] === entry) {
      this.entries.splice(i2, 1);
      this.length--;
      break;
    }
  }
};
FormattingElementList$1.prototype.clearToLastMarker = function() {
  while (this.length) {
    var entry = this.entries.pop();
    this.length--;
    if (entry.type === FormattingElementList$1.MARKER_ENTRY)
      break;
  }
};
FormattingElementList$1.prototype.getElementEntryInScopeWithTagName = function(tagName) {
  for (var i2 = this.length - 1; i2 >= 0; i2--) {
    var entry = this.entries[i2];
    if (entry.type === FormattingElementList$1.MARKER_ENTRY)
      return null;
    if (this.treeAdapter.getTagName(entry.element) === tagName)
      return entry;
  }
  return null;
};
FormattingElementList$1.prototype.getElementEntry = function(element2) {
  for (var i2 = this.length - 1; i2 >= 0; i2--) {
    var entry = this.entries[i2];
    if (entry.type === FormattingElementList$1.ELEMENT_ENTRY && entry.element === element2)
      return entry;
  }
  return null;
};
var parser_mixinExports = {};
var parser_mixin = {
  get exports() {
    return parser_mixinExports;
  },
  set exports(v) {
    parser_mixinExports = v;
  }
};
var mixinExports = {};
var mixin = {
  get exports() {
    return mixinExports;
  },
  set exports(v) {
    mixinExports = v;
  }
};
var Mixin$4 = mixin.exports = function(host) {
  var originalMethods = {}, overriddenMethods = this._getOverriddenMethods(this, originalMethods);
  Object.keys(overriddenMethods).forEach(function(key) {
    if (typeof overriddenMethods[key] === "function") {
      originalMethods[key] = host[key];
      host[key] = overriddenMethods[key];
    }
  });
};
Mixin$4.prototype._getOverriddenMethods = function() {
  throw new Error("Not implemented");
};
var tokenizer_mixinExports = {};
var tokenizer_mixin = {
  get exports() {
    return tokenizer_mixinExports;
  },
  set exports(v) {
    tokenizer_mixinExports = v;
  }
};
var preprocessor_mixinExports = {};
var preprocessor_mixin = {
  get exports() {
    return preprocessor_mixinExports;
  },
  set exports(v) {
    preprocessor_mixinExports = v;
  }
};
var Mixin$3 = mixinExports, inherits$7 = require$$1$3.inherits, UNICODE$2 = unicode;
var $$6 = UNICODE$2.CODE_POINTS;
var PositionTrackingPreprocessorMixin$2 = preprocessor_mixin.exports = function(preprocessor2) {
  if (!preprocessor2.__locTracker) {
    preprocessor2.__locTracker = this;
    Mixin$3.call(this, preprocessor2);
    this.preprocessor = preprocessor2;
    this.isEol = false;
    this.lineStartPos = 0;
    this.droppedBufferSize = 0;
    this.col = -1;
    this.line = 1;
  }
  return preprocessor2.__locTracker;
};
inherits$7(PositionTrackingPreprocessorMixin$2, Mixin$3);
Object.defineProperty(PositionTrackingPreprocessorMixin$2.prototype, "offset", {
  get: function() {
    return this.droppedBufferSize + this.preprocessor.pos;
  }
});
PositionTrackingPreprocessorMixin$2.prototype._getOverriddenMethods = function(mxn, orig) {
  return {
    advance: function() {
      var cp = orig.advance.call(this);
      if (mxn.isEol) {
        mxn.isEol = false;
        mxn.line++;
        mxn.lineStartPos = mxn.offset;
      }
      if (cp === $$6.LINE_FEED)
        mxn.isEol = true;
      mxn.col = mxn.offset - mxn.lineStartPos + 1;
      return cp;
    },
    retreat: function() {
      orig.retreat.call(this);
      mxn.isEol = false;
      mxn.col = mxn.offset - mxn.lineStartPos + 1;
    },
    dropParsedChunk: function() {
      var prevPos = this.pos;
      orig.dropParsedChunk.call(this);
      mxn.droppedBufferSize += prevPos - this.pos;
    }
  };
};
var Mixin$2 = mixinExports, Tokenizer$5 = tokenizerExports, PositionTrackingPreprocessorMixin$1 = preprocessor_mixinExports, inherits$6 = require$$1$3.inherits;
var LocationInfoTokenizerMixin$2 = tokenizer_mixin.exports = function(tokenizer2) {
  Mixin$2.call(this, tokenizer2);
  this.tokenizer = tokenizer2;
  this.posTracker = new PositionTrackingPreprocessorMixin$1(tokenizer2.preprocessor);
  this.currentAttrLocation = null;
  this.currentTokenLocation = null;
};
inherits$6(LocationInfoTokenizerMixin$2, Mixin$2);
LocationInfoTokenizerMixin$2.prototype._getCurrentLocation = function() {
  return {
    line: this.posTracker.line,
    col: this.posTracker.col,
    startOffset: this.posTracker.offset,
    endOffset: -1
  };
};
LocationInfoTokenizerMixin$2.prototype._attachCurrentAttrLocationInfo = function() {
  this.currentAttrLocation.endOffset = this.posTracker.offset;
  var currentToken = this.tokenizer.currentToken, currentAttr = this.tokenizer.currentAttr;
  if (!currentToken.location.attrs)
    currentToken.location.attrs = /* @__PURE__ */ Object.create(null);
  currentToken.location.attrs[currentAttr.name] = this.currentAttrLocation;
};
LocationInfoTokenizerMixin$2.prototype._getOverriddenMethods = function(mxn, orig) {
  var methods = {
    _createStartTagToken: function() {
      orig._createStartTagToken.call(this);
      this.currentToken.location = mxn.currentTokenLocation;
    },
    _createEndTagToken: function() {
      orig._createEndTagToken.call(this);
      this.currentToken.location = mxn.currentTokenLocation;
    },
    _createCommentToken: function() {
      orig._createCommentToken.call(this);
      this.currentToken.location = mxn.currentTokenLocation;
    },
    _createDoctypeToken: function(initialName) {
      orig._createDoctypeToken.call(this, initialName);
      this.currentToken.location = mxn.currentTokenLocation;
    },
    _createCharacterToken: function(type, ch) {
      orig._createCharacterToken.call(this, type, ch);
      this.currentCharacterToken.location = mxn.currentTokenLocation;
    },
    _createAttr: function(attrNameFirstCh) {
      orig._createAttr.call(this, attrNameFirstCh);
      mxn.currentAttrLocation = mxn._getCurrentLocation();
    },
    _leaveAttrName: function(toState) {
      orig._leaveAttrName.call(this, toState);
      mxn._attachCurrentAttrLocationInfo();
    },
    _leaveAttrValue: function(toState) {
      orig._leaveAttrValue.call(this, toState);
      mxn._attachCurrentAttrLocationInfo();
    },
    _emitCurrentToken: function() {
      if (this.currentCharacterToken)
        this.currentCharacterToken.location.endOffset = this.currentToken.location.startOffset;
      this.currentToken.location.endOffset = mxn.posTracker.offset + 1;
      orig._emitCurrentToken.call(this);
    },
    _emitCurrentCharacterToken: function() {
      if (this.currentCharacterToken && this.currentCharacterToken.location.endOffset === -1)
        this.currentCharacterToken.location.endOffset = mxn.posTracker.offset;
      orig._emitCurrentCharacterToken.call(this);
    }
  };
  Object.keys(Tokenizer$5.MODE).forEach(function(modeName) {
    var state = Tokenizer$5.MODE[modeName];
    methods[state] = function(cp) {
      mxn.currentTokenLocation = mxn._getCurrentLocation();
      orig[state].call(this, cp);
    };
  });
  return methods;
};
var open_element_stack_mixinExports = {};
var open_element_stack_mixin = {
  get exports() {
    return open_element_stack_mixinExports;
  },
  set exports(v) {
    open_element_stack_mixinExports = v;
  }
};
var Mixin$1 = mixinExports, inherits$5 = require$$1$3.inherits;
var LocationInfoOpenElementStackMixin$1 = open_element_stack_mixin.exports = function(stack, options2) {
  Mixin$1.call(this, stack);
  this.onItemPop = options2.onItemPop;
};
inherits$5(LocationInfoOpenElementStackMixin$1, Mixin$1);
LocationInfoOpenElementStackMixin$1.prototype._getOverriddenMethods = function(mxn, orig) {
  return {
    pop: function() {
      mxn.onItemPop(this.current);
      orig.pop.call(this);
    },
    popAllUpToHtmlElement: function() {
      for (var i2 = this.stackTop; i2 > 0; i2--)
        mxn.onItemPop(this.items[i2]);
      orig.popAllUpToHtmlElement.call(this);
    },
    remove: function(element2) {
      mxn.onItemPop(this.current);
      orig.remove.call(this, element2);
    }
  };
};
var Mixin = mixinExports, Tokenizer$4 = tokenizerExports, LocationInfoTokenizerMixin$1 = tokenizer_mixinExports, PositionTrackingPreprocessorMixin = preprocessor_mixinExports, LocationInfoOpenElementStackMixin = open_element_stack_mixinExports, HTML$4 = html, inherits$4 = require$$1$3.inherits;
var $$5 = HTML$4.TAG_NAMES;
var LocationInfoParserMixin$1 = parser_mixin.exports = function(parser2) {
  Mixin.call(this, parser2);
  this.parser = parser2;
  this.posTracker = null;
  this.lastStartTagToken = null;
  this.lastFosterParentingLocation = null;
  this.currentToken = null;
};
inherits$4(LocationInfoParserMixin$1, Mixin);
LocationInfoParserMixin$1.prototype._setStartLocation = function(element2) {
  if (this.lastStartTagToken) {
    element2.__location = Object.create(this.lastStartTagToken.location);
    element2.__location.startTag = this.lastStartTagToken.location;
  } else
    element2.__location = null;
};
LocationInfoParserMixin$1.prototype._setEndLocation = function(element2, closingToken) {
  var loc = element2.__location;
  if (loc) {
    if (closingToken.location) {
      var ctLoc = closingToken.location, tn = this.parser.treeAdapter.getTagName(element2);
      var isClosingEndTag = closingToken.type === Tokenizer$4.END_TAG_TOKEN && tn === closingToken.tagName;
      if (isClosingEndTag) {
        loc.endTag = Object.create(ctLoc);
        loc.endOffset = ctLoc.endOffset;
      } else
        loc.endOffset = ctLoc.startOffset;
    } else if (closingToken.type === Tokenizer$4.EOF_TOKEN)
      loc.endOffset = this.posTracker.offset;
  }
};
LocationInfoParserMixin$1.prototype._getOverriddenMethods = function(mxn, orig) {
  return {
    _bootstrap: function(document, fragmentContext) {
      orig._bootstrap.call(this, document, fragmentContext);
      mxn.lastStartTagToken = null;
      mxn.lastFosterParentingLocation = null;
      mxn.currentToken = null;
      mxn.posTracker = new PositionTrackingPreprocessorMixin(this.tokenizer.preprocessor);
      new LocationInfoTokenizerMixin$1(this.tokenizer);
      new LocationInfoOpenElementStackMixin(this.openElements, {
        onItemPop: function(element2) {
          mxn._setEndLocation(element2, mxn.currentToken);
        }
      });
    },
    _runParsingLoop: function(scriptHandler) {
      orig._runParsingLoop.call(this, scriptHandler);
      for (var i2 = this.openElements.stackTop; i2 >= 0; i2--)
        mxn._setEndLocation(this.openElements.items[i2], mxn.currentToken);
    },
    //Token processing
    _processTokenInForeignContent: function(token) {
      mxn.currentToken = token;
      orig._processTokenInForeignContent.call(this, token);
    },
    _processToken: function(token) {
      mxn.currentToken = token;
      orig._processToken.call(this, token);
      var requireExplicitUpdate = token.type === Tokenizer$4.END_TAG_TOKEN && (token.tagName === $$5.HTML || token.tagName === $$5.BODY && this.openElements.hasInScope($$5.BODY));
      if (requireExplicitUpdate) {
        for (var i2 = this.openElements.stackTop; i2 >= 0; i2--) {
          var element2 = this.openElements.items[i2];
          if (this.treeAdapter.getTagName(element2) === token.tagName) {
            mxn._setEndLocation(element2, token);
            break;
          }
        }
      }
    },
    //Doctype
    _setDocumentType: function(token) {
      orig._setDocumentType.call(this, token);
      var documentChildren = this.treeAdapter.getChildNodes(this.document), cnLength = documentChildren.length;
      for (var i2 = 0; i2 < cnLength; i2++) {
        var node2 = documentChildren[i2];
        if (this.treeAdapter.isDocumentTypeNode(node2)) {
          node2.__location = token.location;
          break;
        }
      }
    },
    //Elements
    _attachElementToTree: function(element2) {
      mxn._setStartLocation(element2);
      mxn.lastStartTagToken = null;
      orig._attachElementToTree.call(this, element2);
    },
    _appendElement: function(token, namespaceURI) {
      mxn.lastStartTagToken = token;
      orig._appendElement.call(this, token, namespaceURI);
    },
    _insertElement: function(token, namespaceURI) {
      mxn.lastStartTagToken = token;
      orig._insertElement.call(this, token, namespaceURI);
    },
    _insertTemplate: function(token) {
      mxn.lastStartTagToken = token;
      orig._insertTemplate.call(this, token);
      var tmplContent = this.treeAdapter.getTemplateContent(this.openElements.current);
      tmplContent.__location = null;
    },
    _insertFakeRootElement: function() {
      orig._insertFakeRootElement.call(this);
      this.openElements.current.__location = null;
    },
    //Comments
    _appendCommentNode: function(token, parent2) {
      orig._appendCommentNode.call(this, token, parent2);
      var children = this.treeAdapter.getChildNodes(parent2), commentNode = children[children.length - 1];
      commentNode.__location = token.location;
    },
    //Text
    _findFosterParentingLocation: function() {
      mxn.lastFosterParentingLocation = orig._findFosterParentingLocation.call(this);
      return mxn.lastFosterParentingLocation;
    },
    _insertCharacters: function(token) {
      orig._insertCharacters.call(this, token);
      var hasFosterParent = this._shouldFosterParentOnInsertion(), parent2 = hasFosterParent && mxn.lastFosterParentingLocation.parent || this.openElements.currentTmplContent || this.openElements.current, siblings = this.treeAdapter.getChildNodes(parent2), textNodeIdx = hasFosterParent && mxn.lastFosterParentingLocation.beforeElement ? siblings.indexOf(mxn.lastFosterParentingLocation.beforeElement) - 1 : siblings.length - 1, textNode = siblings[textNodeIdx];
      if (textNode.__location)
        textNode.__location.endOffset = token.location.endOffset;
      else
        textNode.__location = token.location;
    }
  };
};
var _default = {};
var DOCUMENT_MODE$2 = html.DOCUMENT_MODE;
_default.createDocument = function() {
  return {
    nodeName: "#document",
    mode: DOCUMENT_MODE$2.NO_QUIRKS,
    childNodes: []
  };
};
_default.createDocumentFragment = function() {
  return {
    nodeName: "#document-fragment",
    childNodes: []
  };
};
_default.createElement = function(tagName, namespaceURI, attrs) {
  return {
    nodeName: tagName,
    tagName,
    attrs,
    namespaceURI,
    childNodes: [],
    parentNode: null
  };
};
_default.createCommentNode = function(data) {
  return {
    nodeName: "#comment",
    data,
    parentNode: null
  };
};
var createTextNode$1 = function(value) {
  return {
    nodeName: "#text",
    value,
    parentNode: null
  };
};
var appendChild$1 = _default.appendChild = function(parentNode, newNode) {
  parentNode.childNodes.push(newNode);
  newNode.parentNode = parentNode;
};
var insertBefore$1 = _default.insertBefore = function(parentNode, newNode, referenceNode) {
  var insertionIdx = parentNode.childNodes.indexOf(referenceNode);
  parentNode.childNodes.splice(insertionIdx, 0, newNode);
  newNode.parentNode = parentNode;
};
_default.setTemplateContent = function(templateElement, contentElement) {
  templateElement.content = contentElement;
};
_default.getTemplateContent = function(templateElement) {
  return templateElement.content;
};
_default.setDocumentType = function(document, name2, publicId, systemId) {
  var doctypeNode = null;
  for (var i2 = 0; i2 < document.childNodes.length; i2++) {
    if (document.childNodes[i2].nodeName === "#documentType") {
      doctypeNode = document.childNodes[i2];
      break;
    }
  }
  if (doctypeNode) {
    doctypeNode.name = name2;
    doctypeNode.publicId = publicId;
    doctypeNode.systemId = systemId;
  } else {
    appendChild$1(document, {
      nodeName: "#documentType",
      name: name2,
      publicId,
      systemId
    });
  }
};
_default.setDocumentMode = function(document, mode) {
  document.mode = mode;
};
_default.getDocumentMode = function(document) {
  return document.mode;
};
_default.detachNode = function(node2) {
  if (node2.parentNode) {
    var idx = node2.parentNode.childNodes.indexOf(node2);
    node2.parentNode.childNodes.splice(idx, 1);
    node2.parentNode = null;
  }
};
_default.insertText = function(parentNode, text) {
  if (parentNode.childNodes.length) {
    var prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
    if (prevNode.nodeName === "#text") {
      prevNode.value += text;
      return;
    }
  }
  appendChild$1(parentNode, createTextNode$1(text));
};
_default.insertTextBefore = function(parentNode, text, referenceNode) {
  var prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
  if (prevNode && prevNode.nodeName === "#text")
    prevNode.value += text;
  else
    insertBefore$1(parentNode, createTextNode$1(text), referenceNode);
};
_default.adoptAttributes = function(recipient, attrs) {
  var recipientAttrsMap = [];
  for (var i2 = 0; i2 < recipient.attrs.length; i2++)
    recipientAttrsMap.push(recipient.attrs[i2].name);
  for (var j2 = 0; j2 < attrs.length; j2++) {
    if (recipientAttrsMap.indexOf(attrs[j2].name) === -1)
      recipient.attrs.push(attrs[j2]);
  }
};
_default.getFirstChild = function(node2) {
  return node2.childNodes[0];
};
_default.getChildNodes = function(node2) {
  return node2.childNodes;
};
_default.getParentNode = function(node2) {
  return node2.parentNode;
};
_default.getAttrList = function(element2) {
  return element2.attrs;
};
_default.getTagName = function(element2) {
  return element2.tagName;
};
_default.getNamespaceURI = function(element2) {
  return element2.namespaceURI;
};
_default.getTextNodeContent = function(textNode) {
  return textNode.value;
};
_default.getCommentNodeContent = function(commentNode) {
  return commentNode.data;
};
_default.getDocumentTypeNodeName = function(doctypeNode) {
  return doctypeNode.name;
};
_default.getDocumentTypeNodePublicId = function(doctypeNode) {
  return doctypeNode.publicId;
};
_default.getDocumentTypeNodeSystemId = function(doctypeNode) {
  return doctypeNode.systemId;
};
_default.isTextNode = function(node2) {
  return node2.nodeName === "#text";
};
_default.isCommentNode = function(node2) {
  return node2.nodeName === "#comment";
};
_default.isDocumentTypeNode = function(node2) {
  return node2.nodeName === "#documentType";
};
_default.isElementNode = function(node2) {
  return !!node2.tagName;
};
var merge_options = function mergeOptions(defaults2, options2) {
  options2 = options2 || /* @__PURE__ */ Object.create(null);
  return [defaults2, options2].reduce(function(merged, optObj) {
    Object.keys(optObj).forEach(function(key) {
      merged[key] = optObj[key];
    });
    return merged;
  }, /* @__PURE__ */ Object.create(null));
};
var doctype$3 = {};
var DOCUMENT_MODE$1 = html.DOCUMENT_MODE;
var VALID_DOCTYPE_NAME = "html", QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
  "+//silmaril//dtd html pro v0r11 19970101//en",
  "-//advasoft ltd//dtd html 3.0 aswedit + extensions//en",
  "-//as//dtd html 3.0 aswedit + extensions//en",
  "-//ietf//dtd html 2.0 level 1//en",
  "-//ietf//dtd html 2.0 level 2//en",
  "-//ietf//dtd html 2.0 strict level 1//en",
  "-//ietf//dtd html 2.0 strict level 2//en",
  "-//ietf//dtd html 2.0 strict//en",
  "-//ietf//dtd html 2.0//en",
  "-//ietf//dtd html 2.1e//en",
  "-//ietf//dtd html 3.0//en",
  "-//ietf//dtd html 3.0//en//",
  "-//ietf//dtd html 3.2 final//en",
  "-//ietf//dtd html 3.2//en",
  "-//ietf//dtd html 3//en",
  "-//ietf//dtd html level 0//en",
  "-//ietf//dtd html level 0//en//2.0",
  "-//ietf//dtd html level 1//en",
  "-//ietf//dtd html level 1//en//2.0",
  "-//ietf//dtd html level 2//en",
  "-//ietf//dtd html level 2//en//2.0",
  "-//ietf//dtd html level 3//en",
  "-//ietf//dtd html level 3//en//3.0",
  "-//ietf//dtd html strict level 0//en",
  "-//ietf//dtd html strict level 0//en//2.0",
  "-//ietf//dtd html strict level 1//en",
  "-//ietf//dtd html strict level 1//en//2.0",
  "-//ietf//dtd html strict level 2//en",
  "-//ietf//dtd html strict level 2//en//2.0",
  "-//ietf//dtd html strict level 3//en",
  "-//ietf//dtd html strict level 3//en//3.0",
  "-//ietf//dtd html strict//en",
  "-//ietf//dtd html strict//en//2.0",
  "-//ietf//dtd html strict//en//3.0",
  "-//ietf//dtd html//en",
  "-//ietf//dtd html//en//2.0",
  "-//ietf//dtd html//en//3.0",
  "-//metrius//dtd metrius presentational//en",
  "-//microsoft//dtd internet explorer 2.0 html strict//en",
  "-//microsoft//dtd internet explorer 2.0 html//en",
  "-//microsoft//dtd internet explorer 2.0 tables//en",
  "-//microsoft//dtd internet explorer 3.0 html strict//en",
  "-//microsoft//dtd internet explorer 3.0 html//en",
  "-//microsoft//dtd internet explorer 3.0 tables//en",
  "-//netscape comm. corp.//dtd html//en",
  "-//netscape comm. corp.//dtd strict html//en",
  "-//o'reilly and associates//dtd html 2.0//en",
  "-//o'reilly and associates//dtd html extended 1.0//en",
  "-//spyglass//dtd html 2.0 extended//en",
  "-//sq//dtd html 2.0 hotmetal + extensions//en",
  "-//sun microsystems corp.//dtd hotjava html//en",
  "-//sun microsystems corp.//dtd hotjava strict html//en",
  "-//w3c//dtd html 3 1995-03-24//en",
  "-//w3c//dtd html 3.2 draft//en",
  "-//w3c//dtd html 3.2 final//en",
  "-//w3c//dtd html 3.2//en",
  "-//w3c//dtd html 3.2s draft//en",
  "-//w3c//dtd html 4.0 frameset//en",
  "-//w3c//dtd html 4.0 transitional//en",
  "-//w3c//dtd html experimental 19960712//en",
  "-//w3c//dtd html experimental 970421//en",
  "-//w3c//dtd w3 html//en",
  "-//w3o//dtd w3 html 3.0//en",
  "-//w3o//dtd w3 html 3.0//en//",
  "-//webtechs//dtd mozilla html 2.0//en",
  "-//webtechs//dtd mozilla html//en"
], QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = QUIRKS_MODE_PUBLIC_ID_PREFIXES.concat([
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
]), QUIRKS_MODE_PUBLIC_IDS = [
  "-//w3o//dtd w3 html strict 3.0//en//",
  "-/w3c/dtd html 4.0 transitional/en",
  "html"
], LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = [
  "-//W3C//DTD XHTML 1.0 Frameset//",
  "-//W3C//DTD XHTML 1.0 Transitional//"
], LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = LIMITED_QUIRKS_PUBLIC_ID_PREFIXES.concat([
  "-//W3C//DTD HTML 4.01 Frameset//",
  "-//W3C//DTD HTML 4.01 Transitional//"
]);
function enquoteDoctypeId(id) {
  var quote = id.indexOf('"') !== -1 ? "'" : '"';
  return quote + id + quote;
}
function hasPrefix(publicId, prefixes) {
  for (var i2 = 0; i2 < prefixes.length; i2++) {
    if (publicId.indexOf(prefixes[i2]) === 0)
      return true;
  }
  return false;
}
doctype$3.getDocumentMode = function(name2, publicId, systemId) {
  if (name2 !== VALID_DOCTYPE_NAME)
    return DOCUMENT_MODE$1.QUIRKS;
  if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID)
    return DOCUMENT_MODE$1.QUIRKS;
  if (publicId !== null) {
    publicId = publicId.toLowerCase();
    if (QUIRKS_MODE_PUBLIC_IDS.indexOf(publicId) > -1)
      return DOCUMENT_MODE$1.QUIRKS;
    var prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
    if (hasPrefix(publicId, prefixes))
      return DOCUMENT_MODE$1.QUIRKS;
    prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
    if (hasPrefix(publicId, prefixes))
      return DOCUMENT_MODE$1.LIMITED_QUIRKS;
  }
  return DOCUMENT_MODE$1.NO_QUIRKS;
};
doctype$3.serializeContent = function(name2, publicId, systemId) {
  var str = "!DOCTYPE ";
  if (name2)
    str += name2;
  if (publicId !== null)
    str += " PUBLIC " + enquoteDoctypeId(publicId);
  else if (systemId !== null)
    str += " SYSTEM";
  if (systemId !== null)
    str += " " + enquoteDoctypeId(systemId);
  return str;
};
var foreign_content = {};
var Tokenizer$3 = tokenizerExports, HTML$3 = html;
var $$4 = HTML$3.TAG_NAMES, NS$3 = HTML$3.NAMESPACES, ATTRS$1 = HTML$3.ATTRS;
var MIME_TYPES = {
  TEXT_HTML: "text/html",
  APPLICATION_XML: "application/xhtml+xml"
};
var DEFINITION_URL_ATTR = "definitionurl", ADJUSTED_DEFINITION_URL_ATTR = "definitionURL", SVG_ATTRS_ADJUSTMENT_MAP = {
  "attributename": "attributeName",
  "attributetype": "attributeType",
  "basefrequency": "baseFrequency",
  "baseprofile": "baseProfile",
  "calcmode": "calcMode",
  "clippathunits": "clipPathUnits",
  "diffuseconstant": "diffuseConstant",
  "edgemode": "edgeMode",
  "filterunits": "filterUnits",
  "glyphref": "glyphRef",
  "gradienttransform": "gradientTransform",
  "gradientunits": "gradientUnits",
  "kernelmatrix": "kernelMatrix",
  "kernelunitlength": "kernelUnitLength",
  "keypoints": "keyPoints",
  "keysplines": "keySplines",
  "keytimes": "keyTimes",
  "lengthadjust": "lengthAdjust",
  "limitingconeangle": "limitingConeAngle",
  "markerheight": "markerHeight",
  "markerunits": "markerUnits",
  "markerwidth": "markerWidth",
  "maskcontentunits": "maskContentUnits",
  "maskunits": "maskUnits",
  "numoctaves": "numOctaves",
  "pathlength": "pathLength",
  "patterncontentunits": "patternContentUnits",
  "patterntransform": "patternTransform",
  "patternunits": "patternUnits",
  "pointsatx": "pointsAtX",
  "pointsaty": "pointsAtY",
  "pointsatz": "pointsAtZ",
  "preservealpha": "preserveAlpha",
  "preserveaspectratio": "preserveAspectRatio",
  "primitiveunits": "primitiveUnits",
  "refx": "refX",
  "refy": "refY",
  "repeatcount": "repeatCount",
  "repeatdur": "repeatDur",
  "requiredextensions": "requiredExtensions",
  "requiredfeatures": "requiredFeatures",
  "specularconstant": "specularConstant",
  "specularexponent": "specularExponent",
  "spreadmethod": "spreadMethod",
  "startoffset": "startOffset",
  "stddeviation": "stdDeviation",
  "stitchtiles": "stitchTiles",
  "surfacescale": "surfaceScale",
  "systemlanguage": "systemLanguage",
  "tablevalues": "tableValues",
  "targetx": "targetX",
  "targety": "targetY",
  "textlength": "textLength",
  "viewbox": "viewBox",
  "viewtarget": "viewTarget",
  "xchannelselector": "xChannelSelector",
  "ychannelselector": "yChannelSelector",
  "zoomandpan": "zoomAndPan"
}, XML_ATTRS_ADJUSTMENT_MAP = {
  "xlink:actuate": { prefix: "xlink", name: "actuate", namespace: NS$3.XLINK },
  "xlink:arcrole": { prefix: "xlink", name: "arcrole", namespace: NS$3.XLINK },
  "xlink:href": { prefix: "xlink", name: "href", namespace: NS$3.XLINK },
  "xlink:role": { prefix: "xlink", name: "role", namespace: NS$3.XLINK },
  "xlink:show": { prefix: "xlink", name: "show", namespace: NS$3.XLINK },
  "xlink:title": { prefix: "xlink", name: "title", namespace: NS$3.XLINK },
  "xlink:type": { prefix: "xlink", name: "type", namespace: NS$3.XLINK },
  "xml:base": { prefix: "xml", name: "base", namespace: NS$3.XML },
  "xml:lang": { prefix: "xml", name: "lang", namespace: NS$3.XML },
  "xml:space": { prefix: "xml", name: "space", namespace: NS$3.XML },
  "xmlns": { prefix: "", name: "xmlns", namespace: NS$3.XMLNS },
  "xmlns:xlink": { prefix: "xmlns", name: "xlink", namespace: NS$3.XMLNS }
};
var SVG_TAG_NAMES_ADJUSTMENT_MAP = foreign_content.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
  "altglyph": "altGlyph",
  "altglyphdef": "altGlyphDef",
  "altglyphitem": "altGlyphItem",
  "animatecolor": "animateColor",
  "animatemotion": "animateMotion",
  "animatetransform": "animateTransform",
  "clippath": "clipPath",
  "feblend": "feBlend",
  "fecolormatrix": "feColorMatrix",
  "fecomponenttransfer": "feComponentTransfer",
  "fecomposite": "feComposite",
  "feconvolvematrix": "feConvolveMatrix",
  "fediffuselighting": "feDiffuseLighting",
  "fedisplacementmap": "feDisplacementMap",
  "fedistantlight": "feDistantLight",
  "feflood": "feFlood",
  "fefunca": "feFuncA",
  "fefuncb": "feFuncB",
  "fefuncg": "feFuncG",
  "fefuncr": "feFuncR",
  "fegaussianblur": "feGaussianBlur",
  "feimage": "feImage",
  "femerge": "feMerge",
  "femergenode": "feMergeNode",
  "femorphology": "feMorphology",
  "feoffset": "feOffset",
  "fepointlight": "fePointLight",
  "fespecularlighting": "feSpecularLighting",
  "fespotlight": "feSpotLight",
  "fetile": "feTile",
  "feturbulence": "feTurbulence",
  "foreignobject": "foreignObject",
  "glyphref": "glyphRef",
  "lineargradient": "linearGradient",
  "radialgradient": "radialGradient",
  "textpath": "textPath"
};
var EXITS_FOREIGN_CONTENT = /* @__PURE__ */ Object.create(null);
EXITS_FOREIGN_CONTENT[$$4.B] = true;
EXITS_FOREIGN_CONTENT[$$4.BIG] = true;
EXITS_FOREIGN_CONTENT[$$4.BLOCKQUOTE] = true;
EXITS_FOREIGN_CONTENT[$$4.BODY] = true;
EXITS_FOREIGN_CONTENT[$$4.BR] = true;
EXITS_FOREIGN_CONTENT[$$4.CENTER] = true;
EXITS_FOREIGN_CONTENT[$$4.CODE] = true;
EXITS_FOREIGN_CONTENT[$$4.DD] = true;
EXITS_FOREIGN_CONTENT[$$4.DIV] = true;
EXITS_FOREIGN_CONTENT[$$4.DL] = true;
EXITS_FOREIGN_CONTENT[$$4.DT] = true;
EXITS_FOREIGN_CONTENT[$$4.EM] = true;
EXITS_FOREIGN_CONTENT[$$4.EMBED] = true;
EXITS_FOREIGN_CONTENT[$$4.H1] = true;
EXITS_FOREIGN_CONTENT[$$4.H2] = true;
EXITS_FOREIGN_CONTENT[$$4.H3] = true;
EXITS_FOREIGN_CONTENT[$$4.H4] = true;
EXITS_FOREIGN_CONTENT[$$4.H5] = true;
EXITS_FOREIGN_CONTENT[$$4.H6] = true;
EXITS_FOREIGN_CONTENT[$$4.HEAD] = true;
EXITS_FOREIGN_CONTENT[$$4.HR] = true;
EXITS_FOREIGN_CONTENT[$$4.I] = true;
EXITS_FOREIGN_CONTENT[$$4.IMG] = true;
EXITS_FOREIGN_CONTENT[$$4.LI] = true;
EXITS_FOREIGN_CONTENT[$$4.LISTING] = true;
EXITS_FOREIGN_CONTENT[$$4.MENU] = true;
EXITS_FOREIGN_CONTENT[$$4.META] = true;
EXITS_FOREIGN_CONTENT[$$4.NOBR] = true;
EXITS_FOREIGN_CONTENT[$$4.OL] = true;
EXITS_FOREIGN_CONTENT[$$4.P] = true;
EXITS_FOREIGN_CONTENT[$$4.PRE] = true;
EXITS_FOREIGN_CONTENT[$$4.RUBY] = true;
EXITS_FOREIGN_CONTENT[$$4.S] = true;
EXITS_FOREIGN_CONTENT[$$4.SMALL] = true;
EXITS_FOREIGN_CONTENT[$$4.SPAN] = true;
EXITS_FOREIGN_CONTENT[$$4.STRONG] = true;
EXITS_FOREIGN_CONTENT[$$4.STRIKE] = true;
EXITS_FOREIGN_CONTENT[$$4.SUB] = true;
EXITS_FOREIGN_CONTENT[$$4.SUP] = true;
EXITS_FOREIGN_CONTENT[$$4.TABLE] = true;
EXITS_FOREIGN_CONTENT[$$4.TT] = true;
EXITS_FOREIGN_CONTENT[$$4.U] = true;
EXITS_FOREIGN_CONTENT[$$4.UL] = true;
EXITS_FOREIGN_CONTENT[$$4.VAR] = true;
foreign_content.causesExit = function(startTagToken) {
  var tn = startTagToken.tagName;
  var isFontWithAttrs = tn === $$4.FONT && (Tokenizer$3.getTokenAttr(startTagToken, ATTRS$1.COLOR) !== null || Tokenizer$3.getTokenAttr(startTagToken, ATTRS$1.SIZE) !== null || Tokenizer$3.getTokenAttr(startTagToken, ATTRS$1.FACE) !== null);
  return isFontWithAttrs ? true : EXITS_FOREIGN_CONTENT[tn];
};
foreign_content.adjustTokenMathMLAttrs = function(token) {
  for (var i2 = 0; i2 < token.attrs.length; i2++) {
    if (token.attrs[i2].name === DEFINITION_URL_ATTR) {
      token.attrs[i2].name = ADJUSTED_DEFINITION_URL_ATTR;
      break;
    }
  }
};
foreign_content.adjustTokenSVGAttrs = function(token) {
  for (var i2 = 0; i2 < token.attrs.length; i2++) {
    var adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP[token.attrs[i2].name];
    if (adjustedAttrName)
      token.attrs[i2].name = adjustedAttrName;
  }
};
foreign_content.adjustTokenXMLAttrs = function(token) {
  for (var i2 = 0; i2 < token.attrs.length; i2++) {
    var adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP[token.attrs[i2].name];
    if (adjustedAttrEntry) {
      token.attrs[i2].prefix = adjustedAttrEntry.prefix;
      token.attrs[i2].name = adjustedAttrEntry.name;
      token.attrs[i2].namespace = adjustedAttrEntry.namespace;
    }
  }
};
foreign_content.adjustTokenSVGTagName = function(token) {
  var adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP[token.tagName];
  if (adjustedTagName)
    token.tagName = adjustedTagName;
};
function isMathMLTextIntegrationPoint(tn, ns) {
  return ns === NS$3.MATHML && (tn === $$4.MI || tn === $$4.MO || tn === $$4.MN || tn === $$4.MS || tn === $$4.MTEXT);
}
function isHtmlIntegrationPoint(tn, ns, attrs) {
  if (ns === NS$3.MATHML && tn === $$4.ANNOTATION_XML) {
    for (var i2 = 0; i2 < attrs.length; i2++) {
      if (attrs[i2].name === ATTRS$1.ENCODING) {
        var value = attrs[i2].value.toLowerCase();
        return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
      }
    }
  }
  return ns === NS$3.SVG && (tn === $$4.FOREIGN_OBJECT || tn === $$4.DESC || tn === $$4.TITLE);
}
foreign_content.isIntegrationPoint = function(tn, ns, attrs, foreignNS) {
  if ((!foreignNS || foreignNS === NS$3.HTML) && isHtmlIntegrationPoint(tn, ns, attrs))
    return true;
  if ((!foreignNS || foreignNS === NS$3.MATHML) && isMathMLTextIntegrationPoint(tn, ns))
    return true;
  return false;
};
var Tokenizer$2 = tokenizerExports, OpenElementStack = open_element_stackExports, FormattingElementList = formatting_element_listExports, LocationInfoParserMixin = parser_mixinExports, defaultTreeAdapter$1 = _default, mergeOptions$2 = merge_options, doctype$2 = doctype$3, foreignContent$1 = foreign_content, UNICODE$1 = unicode, HTML$2 = html;
var $$3 = HTML$2.TAG_NAMES, NS$2 = HTML$2.NAMESPACES, ATTRS = HTML$2.ATTRS;
var DEFAULT_OPTIONS$2 = {
  locationInfo: false,
  treeAdapter: defaultTreeAdapter$1
};
var HIDDEN_INPUT_TYPE = "hidden";
var AA_OUTER_LOOP_ITER = 8, AA_INNER_LOOP_ITER = 3;
var INITIAL_MODE = "INITIAL_MODE", BEFORE_HTML_MODE = "BEFORE_HTML_MODE", BEFORE_HEAD_MODE = "BEFORE_HEAD_MODE", IN_HEAD_MODE = "IN_HEAD_MODE", AFTER_HEAD_MODE = "AFTER_HEAD_MODE", IN_BODY_MODE = "IN_BODY_MODE", TEXT_MODE = "TEXT_MODE", IN_TABLE_MODE = "IN_TABLE_MODE", IN_TABLE_TEXT_MODE = "IN_TABLE_TEXT_MODE", IN_CAPTION_MODE = "IN_CAPTION_MODE", IN_COLUMN_GROUP_MODE = "IN_COLUMN_GROUP_MODE", IN_TABLE_BODY_MODE = "IN_TABLE_BODY_MODE", IN_ROW_MODE = "IN_ROW_MODE", IN_CELL_MODE = "IN_CELL_MODE", IN_SELECT_MODE = "IN_SELECT_MODE", IN_SELECT_IN_TABLE_MODE = "IN_SELECT_IN_TABLE_MODE", IN_TEMPLATE_MODE = "IN_TEMPLATE_MODE", AFTER_BODY_MODE = "AFTER_BODY_MODE", IN_FRAMESET_MODE = "IN_FRAMESET_MODE", AFTER_FRAMESET_MODE = "AFTER_FRAMESET_MODE", AFTER_AFTER_BODY_MODE = "AFTER_AFTER_BODY_MODE", AFTER_AFTER_FRAMESET_MODE = "AFTER_AFTER_FRAMESET_MODE";
var INSERTION_MODE_RESET_MAP = /* @__PURE__ */ Object.create(null);
INSERTION_MODE_RESET_MAP[$$3.TR] = IN_ROW_MODE;
INSERTION_MODE_RESET_MAP[$$3.TBODY] = INSERTION_MODE_RESET_MAP[$$3.THEAD] = INSERTION_MODE_RESET_MAP[$$3.TFOOT] = IN_TABLE_BODY_MODE;
INSERTION_MODE_RESET_MAP[$$3.CAPTION] = IN_CAPTION_MODE;
INSERTION_MODE_RESET_MAP[$$3.COLGROUP] = IN_COLUMN_GROUP_MODE;
INSERTION_MODE_RESET_MAP[$$3.TABLE] = IN_TABLE_MODE;
INSERTION_MODE_RESET_MAP[$$3.BODY] = IN_BODY_MODE;
INSERTION_MODE_RESET_MAP[$$3.FRAMESET] = IN_FRAMESET_MODE;
var TEMPLATE_INSERTION_MODE_SWITCH_MAP = /* @__PURE__ */ Object.create(null);
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$$3.CAPTION] = TEMPLATE_INSERTION_MODE_SWITCH_MAP[$$3.COLGROUP] = TEMPLATE_INSERTION_MODE_SWITCH_MAP[$$3.TBODY] = TEMPLATE_INSERTION_MODE_SWITCH_MAP[$$3.TFOOT] = TEMPLATE_INSERTION_MODE_SWITCH_MAP[$$3.THEAD] = IN_TABLE_MODE;
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$$3.COL] = IN_COLUMN_GROUP_MODE;
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$$3.TR] = IN_TABLE_BODY_MODE;
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$$3.TD] = TEMPLATE_INSERTION_MODE_SWITCH_MAP[$$3.TH] = IN_ROW_MODE;
var _$2 = /* @__PURE__ */ Object.create(null);
_$2[INITIAL_MODE] = /* @__PURE__ */ Object.create(null);
_$2[INITIAL_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[INITIAL_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = tokenInInitialMode;
_$2[INITIAL_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
_$2[INITIAL_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[INITIAL_MODE][Tokenizer$2.DOCTYPE_TOKEN] = doctypeInInitialMode;
_$2[INITIAL_MODE][Tokenizer$2.START_TAG_TOKEN] = _$2[INITIAL_MODE][Tokenizer$2.END_TAG_TOKEN] = _$2[INITIAL_MODE][Tokenizer$2.EOF_TOKEN] = tokenInInitialMode;
_$2[BEFORE_HTML_MODE] = /* @__PURE__ */ Object.create(null);
_$2[BEFORE_HTML_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[BEFORE_HTML_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = tokenBeforeHtml;
_$2[BEFORE_HTML_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
_$2[BEFORE_HTML_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[BEFORE_HTML_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[BEFORE_HTML_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagBeforeHtml;
_$2[BEFORE_HTML_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagBeforeHtml;
_$2[BEFORE_HTML_MODE][Tokenizer$2.EOF_TOKEN] = tokenBeforeHtml;
_$2[BEFORE_HEAD_MODE] = /* @__PURE__ */ Object.create(null);
_$2[BEFORE_HEAD_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[BEFORE_HEAD_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = tokenBeforeHead;
_$2[BEFORE_HEAD_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
_$2[BEFORE_HEAD_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[BEFORE_HEAD_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[BEFORE_HEAD_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagBeforeHead;
_$2[BEFORE_HEAD_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagBeforeHead;
_$2[BEFORE_HEAD_MODE][Tokenizer$2.EOF_TOKEN] = tokenBeforeHead;
_$2[IN_HEAD_MODE] = /* @__PURE__ */ Object.create(null);
_$2[IN_HEAD_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[IN_HEAD_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = tokenInHead;
_$2[IN_HEAD_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_$2[IN_HEAD_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[IN_HEAD_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[IN_HEAD_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagInHead;
_$2[IN_HEAD_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagInHead;
_$2[IN_HEAD_MODE][Tokenizer$2.EOF_TOKEN] = tokenInHead;
_$2[AFTER_HEAD_MODE] = /* @__PURE__ */ Object.create(null);
_$2[AFTER_HEAD_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[AFTER_HEAD_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = tokenAfterHead;
_$2[AFTER_HEAD_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_$2[AFTER_HEAD_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[AFTER_HEAD_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[AFTER_HEAD_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagAfterHead;
_$2[AFTER_HEAD_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagAfterHead;
_$2[AFTER_HEAD_MODE][Tokenizer$2.EOF_TOKEN] = tokenAfterHead;
_$2[IN_BODY_MODE] = /* @__PURE__ */ Object.create(null);
_$2[IN_BODY_MODE][Tokenizer$2.CHARACTER_TOKEN] = characterInBody;
_$2[IN_BODY_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = ignoreToken;
_$2[IN_BODY_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_$2[IN_BODY_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[IN_BODY_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[IN_BODY_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagInBody;
_$2[IN_BODY_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagInBody;
_$2[IN_BODY_MODE][Tokenizer$2.EOF_TOKEN] = eofInBody;
_$2[TEXT_MODE] = /* @__PURE__ */ Object.create(null);
_$2[TEXT_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[TEXT_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = _$2[TEXT_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_$2[TEXT_MODE][Tokenizer$2.COMMENT_TOKEN] = _$2[TEXT_MODE][Tokenizer$2.DOCTYPE_TOKEN] = _$2[TEXT_MODE][Tokenizer$2.START_TAG_TOKEN] = ignoreToken;
_$2[TEXT_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagInText;
_$2[TEXT_MODE][Tokenizer$2.EOF_TOKEN] = eofInText;
_$2[IN_TABLE_MODE] = /* @__PURE__ */ Object.create(null);
_$2[IN_TABLE_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[IN_TABLE_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = _$2[IN_TABLE_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
_$2[IN_TABLE_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[IN_TABLE_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[IN_TABLE_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagInTable;
_$2[IN_TABLE_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagInTable;
_$2[IN_TABLE_MODE][Tokenizer$2.EOF_TOKEN] = eofInBody;
_$2[IN_TABLE_TEXT_MODE] = /* @__PURE__ */ Object.create(null);
_$2[IN_TABLE_TEXT_MODE][Tokenizer$2.CHARACTER_TOKEN] = characterInTableText;
_$2[IN_TABLE_TEXT_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = ignoreToken;
_$2[IN_TABLE_TEXT_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInTableText;
_$2[IN_TABLE_TEXT_MODE][Tokenizer$2.COMMENT_TOKEN] = _$2[IN_TABLE_TEXT_MODE][Tokenizer$2.DOCTYPE_TOKEN] = _$2[IN_TABLE_TEXT_MODE][Tokenizer$2.START_TAG_TOKEN] = _$2[IN_TABLE_TEXT_MODE][Tokenizer$2.END_TAG_TOKEN] = _$2[IN_TABLE_TEXT_MODE][Tokenizer$2.EOF_TOKEN] = tokenInTableText;
_$2[IN_CAPTION_MODE] = /* @__PURE__ */ Object.create(null);
_$2[IN_CAPTION_MODE][Tokenizer$2.CHARACTER_TOKEN] = characterInBody;
_$2[IN_CAPTION_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = ignoreToken;
_$2[IN_CAPTION_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_$2[IN_CAPTION_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[IN_CAPTION_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[IN_CAPTION_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagInCaption;
_$2[IN_CAPTION_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagInCaption;
_$2[IN_CAPTION_MODE][Tokenizer$2.EOF_TOKEN] = eofInBody;
_$2[IN_COLUMN_GROUP_MODE] = /* @__PURE__ */ Object.create(null);
_$2[IN_COLUMN_GROUP_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[IN_COLUMN_GROUP_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = tokenInColumnGroup;
_$2[IN_COLUMN_GROUP_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_$2[IN_COLUMN_GROUP_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[IN_COLUMN_GROUP_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[IN_COLUMN_GROUP_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagInColumnGroup;
_$2[IN_COLUMN_GROUP_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagInColumnGroup;
_$2[IN_COLUMN_GROUP_MODE][Tokenizer$2.EOF_TOKEN] = eofInBody;
_$2[IN_TABLE_BODY_MODE] = /* @__PURE__ */ Object.create(null);
_$2[IN_TABLE_BODY_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[IN_TABLE_BODY_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = _$2[IN_TABLE_BODY_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
_$2[IN_TABLE_BODY_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[IN_TABLE_BODY_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[IN_TABLE_BODY_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagInTableBody;
_$2[IN_TABLE_BODY_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagInTableBody;
_$2[IN_TABLE_BODY_MODE][Tokenizer$2.EOF_TOKEN] = eofInBody;
_$2[IN_ROW_MODE] = /* @__PURE__ */ Object.create(null);
_$2[IN_ROW_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[IN_ROW_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = _$2[IN_ROW_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
_$2[IN_ROW_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[IN_ROW_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[IN_ROW_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagInRow;
_$2[IN_ROW_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagInRow;
_$2[IN_ROW_MODE][Tokenizer$2.EOF_TOKEN] = eofInBody;
_$2[IN_CELL_MODE] = /* @__PURE__ */ Object.create(null);
_$2[IN_CELL_MODE][Tokenizer$2.CHARACTER_TOKEN] = characterInBody;
_$2[IN_CELL_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = ignoreToken;
_$2[IN_CELL_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_$2[IN_CELL_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[IN_CELL_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[IN_CELL_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagInCell;
_$2[IN_CELL_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagInCell;
_$2[IN_CELL_MODE][Tokenizer$2.EOF_TOKEN] = eofInBody;
_$2[IN_SELECT_MODE] = /* @__PURE__ */ Object.create(null);
_$2[IN_SELECT_MODE][Tokenizer$2.CHARACTER_TOKEN] = insertCharacters;
_$2[IN_SELECT_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = ignoreToken;
_$2[IN_SELECT_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_$2[IN_SELECT_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[IN_SELECT_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[IN_SELECT_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagInSelect;
_$2[IN_SELECT_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagInSelect;
_$2[IN_SELECT_MODE][Tokenizer$2.EOF_TOKEN] = eofInBody;
_$2[IN_SELECT_IN_TABLE_MODE] = /* @__PURE__ */ Object.create(null);
_$2[IN_SELECT_IN_TABLE_MODE][Tokenizer$2.CHARACTER_TOKEN] = insertCharacters;
_$2[IN_SELECT_IN_TABLE_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = ignoreToken;
_$2[IN_SELECT_IN_TABLE_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_$2[IN_SELECT_IN_TABLE_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[IN_SELECT_IN_TABLE_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[IN_SELECT_IN_TABLE_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagInSelectInTable;
_$2[IN_SELECT_IN_TABLE_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagInSelectInTable;
_$2[IN_SELECT_IN_TABLE_MODE][Tokenizer$2.EOF_TOKEN] = eofInBody;
_$2[IN_TEMPLATE_MODE] = /* @__PURE__ */ Object.create(null);
_$2[IN_TEMPLATE_MODE][Tokenizer$2.CHARACTER_TOKEN] = characterInBody;
_$2[IN_TEMPLATE_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = ignoreToken;
_$2[IN_TEMPLATE_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_$2[IN_TEMPLATE_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[IN_TEMPLATE_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[IN_TEMPLATE_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagInTemplate;
_$2[IN_TEMPLATE_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagInTemplate;
_$2[IN_TEMPLATE_MODE][Tokenizer$2.EOF_TOKEN] = eofInTemplate;
_$2[AFTER_BODY_MODE] = /* @__PURE__ */ Object.create(null);
_$2[AFTER_BODY_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[AFTER_BODY_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = tokenAfterBody;
_$2[AFTER_BODY_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_$2[AFTER_BODY_MODE][Tokenizer$2.COMMENT_TOKEN] = appendCommentToRootHtmlElement;
_$2[AFTER_BODY_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[AFTER_BODY_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagAfterBody;
_$2[AFTER_BODY_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagAfterBody;
_$2[AFTER_BODY_MODE][Tokenizer$2.EOF_TOKEN] = stopParsing;
_$2[IN_FRAMESET_MODE] = /* @__PURE__ */ Object.create(null);
_$2[IN_FRAMESET_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[IN_FRAMESET_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = ignoreToken;
_$2[IN_FRAMESET_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_$2[IN_FRAMESET_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[IN_FRAMESET_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[IN_FRAMESET_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagInFrameset;
_$2[IN_FRAMESET_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagInFrameset;
_$2[IN_FRAMESET_MODE][Tokenizer$2.EOF_TOKEN] = stopParsing;
_$2[AFTER_FRAMESET_MODE] = /* @__PURE__ */ Object.create(null);
_$2[AFTER_FRAMESET_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[AFTER_FRAMESET_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = ignoreToken;
_$2[AFTER_FRAMESET_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_$2[AFTER_FRAMESET_MODE][Tokenizer$2.COMMENT_TOKEN] = appendComment;
_$2[AFTER_FRAMESET_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[AFTER_FRAMESET_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagAfterFrameset;
_$2[AFTER_FRAMESET_MODE][Tokenizer$2.END_TAG_TOKEN] = endTagAfterFrameset;
_$2[AFTER_FRAMESET_MODE][Tokenizer$2.EOF_TOKEN] = stopParsing;
_$2[AFTER_AFTER_BODY_MODE] = /* @__PURE__ */ Object.create(null);
_$2[AFTER_AFTER_BODY_MODE][Tokenizer$2.CHARACTER_TOKEN] = tokenAfterAfterBody;
_$2[AFTER_AFTER_BODY_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = tokenAfterAfterBody;
_$2[AFTER_AFTER_BODY_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_$2[AFTER_AFTER_BODY_MODE][Tokenizer$2.COMMENT_TOKEN] = appendCommentToDocument;
_$2[AFTER_AFTER_BODY_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[AFTER_AFTER_BODY_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagAfterAfterBody;
_$2[AFTER_AFTER_BODY_MODE][Tokenizer$2.END_TAG_TOKEN] = tokenAfterAfterBody;
_$2[AFTER_AFTER_BODY_MODE][Tokenizer$2.EOF_TOKEN] = stopParsing;
_$2[AFTER_AFTER_FRAMESET_MODE] = /* @__PURE__ */ Object.create(null);
_$2[AFTER_AFTER_FRAMESET_MODE][Tokenizer$2.CHARACTER_TOKEN] = _$2[AFTER_AFTER_FRAMESET_MODE][Tokenizer$2.NULL_CHARACTER_TOKEN] = ignoreToken;
_$2[AFTER_AFTER_FRAMESET_MODE][Tokenizer$2.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_$2[AFTER_AFTER_FRAMESET_MODE][Tokenizer$2.COMMENT_TOKEN] = appendCommentToDocument;
_$2[AFTER_AFTER_FRAMESET_MODE][Tokenizer$2.DOCTYPE_TOKEN] = ignoreToken;
_$2[AFTER_AFTER_FRAMESET_MODE][Tokenizer$2.START_TAG_TOKEN] = startTagAfterAfterFrameset;
_$2[AFTER_AFTER_FRAMESET_MODE][Tokenizer$2.END_TAG_TOKEN] = ignoreToken;
_$2[AFTER_AFTER_FRAMESET_MODE][Tokenizer$2.EOF_TOKEN] = stopParsing;
var Parser$2 = parser.exports = function(options2) {
  this.options = mergeOptions$2(DEFAULT_OPTIONS$2, options2);
  this.treeAdapter = this.options.treeAdapter;
  this.pendingScript = null;
  if (this.options.locationInfo)
    new LocationInfoParserMixin(this);
};
Parser$2.prototype.parse = function(html2) {
  var document = this.treeAdapter.createDocument();
  this._bootstrap(document, null);
  this.tokenizer.write(html2, true);
  this._runParsingLoop(null);
  return document;
};
Parser$2.prototype.parseFragment = function(html2, fragmentContext) {
  if (!fragmentContext)
    fragmentContext = this.treeAdapter.createElement($$3.TEMPLATE, NS$2.HTML, []);
  var documentMock = this.treeAdapter.createElement("documentmock", NS$2.HTML, []);
  this._bootstrap(documentMock, fragmentContext);
  if (this.treeAdapter.getTagName(fragmentContext) === $$3.TEMPLATE)
    this._pushTmplInsertionMode(IN_TEMPLATE_MODE);
  this._initTokenizerForFragmentParsing();
  this._insertFakeRootElement();
  this._resetInsertionMode();
  this._findFormInFragmentContext();
  this.tokenizer.write(html2, true);
  this._runParsingLoop(null);
  var rootElement = this.treeAdapter.getFirstChild(documentMock), fragment = this.treeAdapter.createDocumentFragment();
  this._adoptNodes(rootElement, fragment);
  return fragment;
};
Parser$2.prototype._bootstrap = function(document, fragmentContext) {
  this.tokenizer = new Tokenizer$2(this.options);
  this.stopped = false;
  this.insertionMode = INITIAL_MODE;
  this.originalInsertionMode = "";
  this.document = document;
  this.fragmentContext = fragmentContext;
  this.headElement = null;
  this.formElement = null;
  this.openElements = new OpenElementStack(this.document, this.treeAdapter);
  this.activeFormattingElements = new FormattingElementList(this.treeAdapter);
  this.tmplInsertionModeStack = [];
  this.tmplInsertionModeStackTop = -1;
  this.currentTmplInsertionMode = null;
  this.pendingCharacterTokens = [];
  this.hasNonWhitespacePendingCharacterToken = false;
  this.framesetOk = true;
  this.skipNextNewLine = false;
  this.fosterParentingEnabled = false;
};
Parser$2.prototype._runParsingLoop = function(scriptHandler) {
  while (!this.stopped) {
    this._setupTokenizerCDATAMode();
    var token = this.tokenizer.getNextToken();
    if (token.type === Tokenizer$2.HIBERNATION_TOKEN)
      break;
    if (this.skipNextNewLine) {
      this.skipNextNewLine = false;
      if (token.type === Tokenizer$2.WHITESPACE_CHARACTER_TOKEN && token.chars[0] === "\n") {
        if (token.chars.length === 1)
          continue;
        token.chars = token.chars.substr(1);
      }
    }
    this._processInputToken(token);
    if (scriptHandler && this.pendingScript)
      break;
  }
};
Parser$2.prototype.runParsingLoopForCurrentChunk = function(writeCallback, scriptHandler) {
  this._runParsingLoop(scriptHandler);
  if (scriptHandler && this.pendingScript) {
    var script = this.pendingScript;
    this.pendingScript = null;
    scriptHandler(script);
    return;
  }
  if (writeCallback)
    writeCallback();
};
Parser$2.prototype._setupTokenizerCDATAMode = function() {
  var current = this._getAdjustedCurrentElement();
  this.tokenizer.allowCDATA = current && current !== this.document && this.treeAdapter.getNamespaceURI(current) !== NS$2.HTML && !this._isIntegrationPoint(current);
};
Parser$2.prototype._switchToTextParsing = function(currentToken, nextTokenizerState) {
  this._insertElement(currentToken, NS$2.HTML);
  this.tokenizer.state = nextTokenizerState;
  this.originalInsertionMode = this.insertionMode;
  this.insertionMode = TEXT_MODE;
};
Parser$2.prototype.switchToPlaintextParsing = function() {
  this.insertionMode = TEXT_MODE;
  this.originalInsertionMode = IN_BODY_MODE;
  this.tokenizer.state = Tokenizer$2.MODE.PLAINTEXT;
};
Parser$2.prototype._getAdjustedCurrentElement = function() {
  return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
};
Parser$2.prototype._findFormInFragmentContext = function() {
  var node2 = this.fragmentContext;
  do {
    if (this.treeAdapter.getTagName(node2) === $$3.FORM) {
      this.formElement = node2;
      break;
    }
    node2 = this.treeAdapter.getParentNode(node2);
  } while (node2);
};
Parser$2.prototype._initTokenizerForFragmentParsing = function() {
  if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === NS$2.HTML) {
    var tn = this.treeAdapter.getTagName(this.fragmentContext);
    if (tn === $$3.TITLE || tn === $$3.TEXTAREA)
      this.tokenizer.state = Tokenizer$2.MODE.RCDATA;
    else if (tn === $$3.STYLE || tn === $$3.XMP || tn === $$3.IFRAME || tn === $$3.NOEMBED || tn === $$3.NOFRAMES || tn === $$3.NOSCRIPT)
      this.tokenizer.state = Tokenizer$2.MODE.RAWTEXT;
    else if (tn === $$3.SCRIPT)
      this.tokenizer.state = Tokenizer$2.MODE.SCRIPT_DATA;
    else if (tn === $$3.PLAINTEXT)
      this.tokenizer.state = Tokenizer$2.MODE.PLAINTEXT;
  }
};
Parser$2.prototype._setDocumentType = function(token) {
  this.treeAdapter.setDocumentType(this.document, token.name, token.publicId, token.systemId);
};
Parser$2.prototype._attachElementToTree = function(element2) {
  if (this._shouldFosterParentOnInsertion())
    this._fosterParentElement(element2);
  else {
    var parent2 = this.openElements.currentTmplContent || this.openElements.current;
    this.treeAdapter.appendChild(parent2, element2);
  }
};
Parser$2.prototype._appendElement = function(token, namespaceURI) {
  var element2 = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
  this._attachElementToTree(element2);
};
Parser$2.prototype._insertElement = function(token, namespaceURI) {
  var element2 = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
  this._attachElementToTree(element2);
  this.openElements.push(element2);
};
Parser$2.prototype._insertFakeElement = function(tagName) {
  var element2 = this.treeAdapter.createElement(tagName, NS$2.HTML, []);
  this._attachElementToTree(element2);
  this.openElements.push(element2);
};
Parser$2.prototype._insertTemplate = function(token) {
  var tmpl = this.treeAdapter.createElement(token.tagName, NS$2.HTML, token.attrs), content = this.treeAdapter.createDocumentFragment();
  this.treeAdapter.setTemplateContent(tmpl, content);
  this._attachElementToTree(tmpl);
  this.openElements.push(tmpl);
};
Parser$2.prototype._insertFakeRootElement = function() {
  var element2 = this.treeAdapter.createElement($$3.HTML, NS$2.HTML, []);
  this.treeAdapter.appendChild(this.openElements.current, element2);
  this.openElements.push(element2);
};
Parser$2.prototype._appendCommentNode = function(token, parent2) {
  var commentNode = this.treeAdapter.createCommentNode(token.data);
  this.treeAdapter.appendChild(parent2, commentNode);
};
Parser$2.prototype._insertCharacters = function(token) {
  if (this._shouldFosterParentOnInsertion())
    this._fosterParentText(token.chars);
  else {
    var parent2 = this.openElements.currentTmplContent || this.openElements.current;
    this.treeAdapter.insertText(parent2, token.chars);
  }
};
Parser$2.prototype._adoptNodes = function(donor, recipient) {
  while (true) {
    var child2 = this.treeAdapter.getFirstChild(donor);
    if (!child2)
      break;
    this.treeAdapter.detachNode(child2);
    this.treeAdapter.appendChild(recipient, child2);
  }
};
Parser$2.prototype._shouldProcessTokenInForeignContent = function(token) {
  var current = this._getAdjustedCurrentElement();
  if (!current || current === this.document)
    return false;
  var ns = this.treeAdapter.getNamespaceURI(current);
  if (ns === NS$2.HTML)
    return false;
  if (this.treeAdapter.getTagName(current) === $$3.ANNOTATION_XML && ns === NS$2.MATHML && token.type === Tokenizer$2.START_TAG_TOKEN && token.tagName === $$3.SVG)
    return false;
  var isCharacterToken = token.type === Tokenizer$2.CHARACTER_TOKEN || token.type === Tokenizer$2.NULL_CHARACTER_TOKEN || token.type === Tokenizer$2.WHITESPACE_CHARACTER_TOKEN, isMathMLTextStartTag = token.type === Tokenizer$2.START_TAG_TOKEN && token.tagName !== $$3.MGLYPH && token.tagName !== $$3.MALIGNMARK;
  if ((isMathMLTextStartTag || isCharacterToken) && this._isIntegrationPoint(current, NS$2.MATHML))
    return false;
  if ((token.type === Tokenizer$2.START_TAG_TOKEN || isCharacterToken) && this._isIntegrationPoint(current, NS$2.HTML))
    return false;
  return token.type !== Tokenizer$2.EOF_TOKEN;
};
Parser$2.prototype._processToken = function(token) {
  _$2[this.insertionMode][token.type](this, token);
};
Parser$2.prototype._processTokenInBodyMode = function(token) {
  _$2[IN_BODY_MODE][token.type](this, token);
};
Parser$2.prototype._processTokenInForeignContent = function(token) {
  if (token.type === Tokenizer$2.CHARACTER_TOKEN)
    characterInForeignContent(this, token);
  else if (token.type === Tokenizer$2.NULL_CHARACTER_TOKEN)
    nullCharacterInForeignContent(this, token);
  else if (token.type === Tokenizer$2.WHITESPACE_CHARACTER_TOKEN)
    insertCharacters(this, token);
  else if (token.type === Tokenizer$2.COMMENT_TOKEN)
    appendComment(this, token);
  else if (token.type === Tokenizer$2.START_TAG_TOKEN)
    startTagInForeignContent(this, token);
  else if (token.type === Tokenizer$2.END_TAG_TOKEN)
    endTagInForeignContent(this, token);
};
Parser$2.prototype._processInputToken = function(token) {
  if (this._shouldProcessTokenInForeignContent(token))
    this._processTokenInForeignContent(token);
  else
    this._processToken(token);
};
Parser$2.prototype._isIntegrationPoint = function(element2, foreignNS) {
  var tn = this.treeAdapter.getTagName(element2), ns = this.treeAdapter.getNamespaceURI(element2), attrs = this.treeAdapter.getAttrList(element2);
  return foreignContent$1.isIntegrationPoint(tn, ns, attrs, foreignNS);
};
Parser$2.prototype._reconstructActiveFormattingElements = function() {
  var listLength = this.activeFormattingElements.length;
  if (listLength) {
    var unopenIdx = listLength, entry = null;
    do {
      unopenIdx--;
      entry = this.activeFormattingElements.entries[unopenIdx];
      if (entry.type === FormattingElementList.MARKER_ENTRY || this.openElements.contains(entry.element)) {
        unopenIdx++;
        break;
      }
    } while (unopenIdx > 0);
    for (var i2 = unopenIdx; i2 < listLength; i2++) {
      entry = this.activeFormattingElements.entries[i2];
      this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
      entry.element = this.openElements.current;
    }
  }
};
Parser$2.prototype._closeTableCell = function() {
  this.openElements.generateImpliedEndTags();
  this.openElements.popUntilTableCellPopped();
  this.activeFormattingElements.clearToLastMarker();
  this.insertionMode = IN_ROW_MODE;
};
Parser$2.prototype._closePElement = function() {
  this.openElements.generateImpliedEndTagsWithExclusion($$3.P);
  this.openElements.popUntilTagNamePopped($$3.P);
};
Parser$2.prototype._resetInsertionMode = function() {
  for (var i2 = this.openElements.stackTop, last = false; i2 >= 0; i2--) {
    var element2 = this.openElements.items[i2];
    if (i2 === 0) {
      last = true;
      if (this.fragmentContext)
        element2 = this.fragmentContext;
    }
    var tn = this.treeAdapter.getTagName(element2), newInsertionMode = INSERTION_MODE_RESET_MAP[tn];
    if (newInsertionMode) {
      this.insertionMode = newInsertionMode;
      break;
    } else if (!last && (tn === $$3.TD || tn === $$3.TH)) {
      this.insertionMode = IN_CELL_MODE;
      break;
    } else if (!last && tn === $$3.HEAD) {
      this.insertionMode = IN_HEAD_MODE;
      break;
    } else if (tn === $$3.SELECT) {
      this._resetInsertionModeForSelect(i2);
      break;
    } else if (tn === $$3.TEMPLATE) {
      this.insertionMode = this.currentTmplInsertionMode;
      break;
    } else if (tn === $$3.HTML) {
      this.insertionMode = this.headElement ? AFTER_HEAD_MODE : BEFORE_HEAD_MODE;
      break;
    } else if (last) {
      this.insertionMode = IN_BODY_MODE;
      break;
    }
  }
};
Parser$2.prototype._resetInsertionModeForSelect = function(selectIdx) {
  if (selectIdx > 0) {
    for (var i2 = selectIdx - 1; i2 > 0; i2--) {
      var ancestor = this.openElements.items[i2], tn = this.treeAdapter.getTagName(ancestor);
      if (tn === $$3.TEMPLATE)
        break;
      else if (tn === $$3.TABLE) {
        this.insertionMode = IN_SELECT_IN_TABLE_MODE;
        return;
      }
    }
  }
  this.insertionMode = IN_SELECT_MODE;
};
Parser$2.prototype._pushTmplInsertionMode = function(mode) {
  this.tmplInsertionModeStack.push(mode);
  this.tmplInsertionModeStackTop++;
  this.currentTmplInsertionMode = mode;
};
Parser$2.prototype._popTmplInsertionMode = function() {
  this.tmplInsertionModeStack.pop();
  this.tmplInsertionModeStackTop--;
  this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
};
Parser$2.prototype._isElementCausesFosterParenting = function(element2) {
  var tn = this.treeAdapter.getTagName(element2);
  return tn === $$3.TABLE || tn === $$3.TBODY || tn === $$3.TFOOT || tn === $$3.THEAD || tn === $$3.TR;
};
Parser$2.prototype._shouldFosterParentOnInsertion = function() {
  return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current);
};
Parser$2.prototype._findFosterParentingLocation = function() {
  var location = {
    parent: null,
    beforeElement: null
  };
  for (var i2 = this.openElements.stackTop; i2 >= 0; i2--) {
    var openElement = this.openElements.items[i2], tn = this.treeAdapter.getTagName(openElement), ns = this.treeAdapter.getNamespaceURI(openElement);
    if (tn === $$3.TEMPLATE && ns === NS$2.HTML) {
      location.parent = this.treeAdapter.getTemplateContent(openElement);
      break;
    } else if (tn === $$3.TABLE) {
      location.parent = this.treeAdapter.getParentNode(openElement);
      if (location.parent)
        location.beforeElement = openElement;
      else
        location.parent = this.openElements.items[i2 - 1];
      break;
    }
  }
  if (!location.parent)
    location.parent = this.openElements.items[0];
  return location;
};
Parser$2.prototype._fosterParentElement = function(element2) {
  var location = this._findFosterParentingLocation();
  if (location.beforeElement)
    this.treeAdapter.insertBefore(location.parent, element2, location.beforeElement);
  else
    this.treeAdapter.appendChild(location.parent, element2);
};
Parser$2.prototype._fosterParentText = function(chars) {
  var location = this._findFosterParentingLocation();
  if (location.beforeElement)
    this.treeAdapter.insertTextBefore(location.parent, chars, location.beforeElement);
  else
    this.treeAdapter.insertText(location.parent, chars);
};
Parser$2.prototype._isSpecialElement = function(element2) {
  var tn = this.treeAdapter.getTagName(element2), ns = this.treeAdapter.getNamespaceURI(element2);
  return HTML$2.SPECIAL_ELEMENTS[ns][tn];
};
function aaObtainFormattingElementEntry(p, token) {
  var formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
  if (formattingElementEntry) {
    if (!p.openElements.contains(formattingElementEntry.element)) {
      p.activeFormattingElements.removeEntry(formattingElementEntry);
      formattingElementEntry = null;
    } else if (!p.openElements.hasInScope(token.tagName))
      formattingElementEntry = null;
  } else
    genericEndTagInBody(p, token);
  return formattingElementEntry;
}
function aaObtainFurthestBlock(p, formattingElementEntry) {
  var furthestBlock = null;
  for (var i2 = p.openElements.stackTop; i2 >= 0; i2--) {
    var element2 = p.openElements.items[i2];
    if (element2 === formattingElementEntry.element)
      break;
    if (p._isSpecialElement(element2))
      furthestBlock = element2;
  }
  if (!furthestBlock) {
    p.openElements.popUntilElementPopped(formattingElementEntry.element);
    p.activeFormattingElements.removeEntry(formattingElementEntry);
  }
  return furthestBlock;
}
function aaInnerLoop(p, furthestBlock, formattingElement) {
  var lastElement = furthestBlock, nextElement = p.openElements.getCommonAncestor(furthestBlock);
  for (var i2 = 0, element2 = nextElement; element2 !== formattingElement; i2++, element2 = nextElement) {
    nextElement = p.openElements.getCommonAncestor(element2);
    var elementEntry = p.activeFormattingElements.getElementEntry(element2), counterOverflow = elementEntry && i2 >= AA_INNER_LOOP_ITER, shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
    if (shouldRemoveFromOpenElements) {
      if (counterOverflow)
        p.activeFormattingElements.removeEntry(elementEntry);
      p.openElements.remove(element2);
    } else {
      element2 = aaRecreateElementFromEntry(p, elementEntry);
      if (lastElement === furthestBlock)
        p.activeFormattingElements.bookmark = elementEntry;
      p.treeAdapter.detachNode(lastElement);
      p.treeAdapter.appendChild(element2, lastElement);
      lastElement = element2;
    }
  }
  return lastElement;
}
function aaRecreateElementFromEntry(p, elementEntry) {
  var ns = p.treeAdapter.getNamespaceURI(elementEntry.element), newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
  p.openElements.replace(elementEntry.element, newElement);
  elementEntry.element = newElement;
  return newElement;
}
function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
  if (p._isElementCausesFosterParenting(commonAncestor))
    p._fosterParentElement(lastElement);
  else {
    var tn = p.treeAdapter.getTagName(commonAncestor), ns = p.treeAdapter.getNamespaceURI(commonAncestor);
    if (tn === $$3.TEMPLATE && ns === NS$2.HTML)
      commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
    p.treeAdapter.appendChild(commonAncestor, lastElement);
  }
}
function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
  var ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element), token = formattingElementEntry.token, newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
  p._adoptNodes(furthestBlock, newElement);
  p.treeAdapter.appendChild(furthestBlock, newElement);
  p.activeFormattingElements.insertElementAfterBookmark(newElement, formattingElementEntry.token);
  p.activeFormattingElements.removeEntry(formattingElementEntry);
  p.openElements.remove(formattingElementEntry.element);
  p.openElements.insertAfter(furthestBlock, newElement);
}
function callAdoptionAgency(p, token) {
  var formattingElementEntry;
  for (var i2 = 0; i2 < AA_OUTER_LOOP_ITER; i2++) {
    formattingElementEntry = aaObtainFormattingElementEntry(p, token);
    if (!formattingElementEntry)
      break;
    var furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
    if (!furthestBlock)
      break;
    p.activeFormattingElements.bookmark = formattingElementEntry;
    var lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element), commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
    p.treeAdapter.detachNode(lastElement);
    aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
    aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
  }
}
function ignoreToken() {
}
function appendComment(p, token) {
  p._appendCommentNode(token, p.openElements.currentTmplContent || p.openElements.current);
}
function appendCommentToRootHtmlElement(p, token) {
  p._appendCommentNode(token, p.openElements.items[0]);
}
function appendCommentToDocument(p, token) {
  p._appendCommentNode(token, p.document);
}
function insertCharacters(p, token) {
  p._insertCharacters(token);
}
function stopParsing(p) {
  p.stopped = true;
}
function doctypeInInitialMode(p, token) {
  p._setDocumentType(token);
  var mode = token.forceQuirks ? HTML$2.DOCUMENT_MODE.QUIRKS : doctype$2.getDocumentMode(token.name, token.publicId, token.systemId);
  p.treeAdapter.setDocumentMode(p.document, mode);
  p.insertionMode = BEFORE_HTML_MODE;
}
function tokenInInitialMode(p, token) {
  p.treeAdapter.setDocumentMode(p.document, HTML$2.DOCUMENT_MODE.QUIRKS);
  p.insertionMode = BEFORE_HTML_MODE;
  p._processToken(token);
}
function startTagBeforeHtml(p, token) {
  if (token.tagName === $$3.HTML) {
    p._insertElement(token, NS$2.HTML);
    p.insertionMode = BEFORE_HEAD_MODE;
  } else
    tokenBeforeHtml(p, token);
}
function endTagBeforeHtml(p, token) {
  var tn = token.tagName;
  if (tn === $$3.HTML || tn === $$3.HEAD || tn === $$3.BODY || tn === $$3.BR)
    tokenBeforeHtml(p, token);
}
function tokenBeforeHtml(p, token) {
  p._insertFakeRootElement();
  p.insertionMode = BEFORE_HEAD_MODE;
  p._processToken(token);
}
function startTagBeforeHead(p, token) {
  var tn = token.tagName;
  if (tn === $$3.HTML)
    startTagInBody(p, token);
  else if (tn === $$3.HEAD) {
    p._insertElement(token, NS$2.HTML);
    p.headElement = p.openElements.current;
    p.insertionMode = IN_HEAD_MODE;
  } else
    tokenBeforeHead(p, token);
}
function endTagBeforeHead(p, token) {
  var tn = token.tagName;
  if (tn === $$3.HEAD || tn === $$3.BODY || tn === $$3.HTML || tn === $$3.BR)
    tokenBeforeHead(p, token);
}
function tokenBeforeHead(p, token) {
  p._insertFakeElement($$3.HEAD);
  p.headElement = p.openElements.current;
  p.insertionMode = IN_HEAD_MODE;
  p._processToken(token);
}
function startTagInHead(p, token) {
  var tn = token.tagName;
  if (tn === $$3.HTML)
    startTagInBody(p, token);
  else if (tn === $$3.BASE || tn === $$3.BASEFONT || tn === $$3.BGSOUND || tn === $$3.LINK || tn === $$3.META)
    p._appendElement(token, NS$2.HTML);
  else if (tn === $$3.TITLE)
    p._switchToTextParsing(token, Tokenizer$2.MODE.RCDATA);
  else if (tn === $$3.NOSCRIPT || tn === $$3.NOFRAMES || tn === $$3.STYLE)
    p._switchToTextParsing(token, Tokenizer$2.MODE.RAWTEXT);
  else if (tn === $$3.SCRIPT)
    p._switchToTextParsing(token, Tokenizer$2.MODE.SCRIPT_DATA);
  else if (tn === $$3.TEMPLATE) {
    p._insertTemplate(token, NS$2.HTML);
    p.activeFormattingElements.insertMarker();
    p.framesetOk = false;
    p.insertionMode = IN_TEMPLATE_MODE;
    p._pushTmplInsertionMode(IN_TEMPLATE_MODE);
  } else if (tn !== $$3.HEAD)
    tokenInHead(p, token);
}
function endTagInHead(p, token) {
  var tn = token.tagName;
  if (tn === $$3.HEAD) {
    p.openElements.pop();
    p.insertionMode = AFTER_HEAD_MODE;
  } else if (tn === $$3.BODY || tn === $$3.BR || tn === $$3.HTML)
    tokenInHead(p, token);
  else if (tn === $$3.TEMPLATE && p.openElements.tmplCount > 0) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped($$3.TEMPLATE);
    p.activeFormattingElements.clearToLastMarker();
    p._popTmplInsertionMode();
    p._resetInsertionMode();
  }
}
function tokenInHead(p, token) {
  p.openElements.pop();
  p.insertionMode = AFTER_HEAD_MODE;
  p._processToken(token);
}
function startTagAfterHead(p, token) {
  var tn = token.tagName;
  if (tn === $$3.HTML)
    startTagInBody(p, token);
  else if (tn === $$3.BODY) {
    p._insertElement(token, NS$2.HTML);
    p.framesetOk = false;
    p.insertionMode = IN_BODY_MODE;
  } else if (tn === $$3.FRAMESET) {
    p._insertElement(token, NS$2.HTML);
    p.insertionMode = IN_FRAMESET_MODE;
  } else if (tn === $$3.BASE || tn === $$3.BASEFONT || tn === $$3.BGSOUND || tn === $$3.LINK || tn === $$3.META || tn === $$3.NOFRAMES || tn === $$3.SCRIPT || tn === $$3.STYLE || tn === $$3.TEMPLATE || tn === $$3.TITLE) {
    p.openElements.push(p.headElement);
    startTagInHead(p, token);
    p.openElements.remove(p.headElement);
  } else if (tn !== $$3.HEAD)
    tokenAfterHead(p, token);
}
function endTagAfterHead(p, token) {
  var tn = token.tagName;
  if (tn === $$3.BODY || tn === $$3.HTML || tn === $$3.BR)
    tokenAfterHead(p, token);
  else if (tn === $$3.TEMPLATE)
    endTagInHead(p, token);
}
function tokenAfterHead(p, token) {
  p._insertFakeElement($$3.BODY);
  p.insertionMode = IN_BODY_MODE;
  p._processToken(token);
}
function whitespaceCharacterInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertCharacters(token);
}
function characterInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertCharacters(token);
  p.framesetOk = false;
}
function htmlStartTagInBody(p, token) {
  if (p.openElements.tmplCount === 0)
    p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
}
function bodyStartTagInBody(p, token) {
  var bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
  if (bodyElement && p.openElements.tmplCount === 0) {
    p.framesetOk = false;
    p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
  }
}
function framesetStartTagInBody(p, token) {
  var bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
  if (p.framesetOk && bodyElement) {
    p.treeAdapter.detachNode(bodyElement);
    p.openElements.popAllUpToHtmlElement();
    p._insertElement(token, NS$2.HTML);
    p.insertionMode = IN_FRAMESET_MODE;
  }
}
function addressStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$3.P))
    p._closePElement();
  p._insertElement(token, NS$2.HTML);
}
function numberedHeaderStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$3.P))
    p._closePElement();
  var tn = p.openElements.currentTagName;
  if (tn === $$3.H1 || tn === $$3.H2 || tn === $$3.H3 || tn === $$3.H4 || tn === $$3.H5 || tn === $$3.H6)
    p.openElements.pop();
  p._insertElement(token, NS$2.HTML);
}
function preStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$3.P))
    p._closePElement();
  p._insertElement(token, NS$2.HTML);
  p.skipNextNewLine = true;
  p.framesetOk = false;
}
function formStartTagInBody(p, token) {
  var inTemplate = p.openElements.tmplCount > 0;
  if (!p.formElement || inTemplate) {
    if (p.openElements.hasInButtonScope($$3.P))
      p._closePElement();
    p._insertElement(token, NS$2.HTML);
    if (!inTemplate)
      p.formElement = p.openElements.current;
  }
}
function listItemStartTagInBody(p, token) {
  p.framesetOk = false;
  var tn = token.tagName;
  for (var i2 = p.openElements.stackTop; i2 >= 0; i2--) {
    var element2 = p.openElements.items[i2], elementTn = p.treeAdapter.getTagName(element2), closeTn = null;
    if (tn === $$3.LI && elementTn === $$3.LI)
      closeTn = $$3.LI;
    else if ((tn === $$3.DD || tn === $$3.DT) && (elementTn === $$3.DD || elementTn === $$3.DT))
      closeTn = elementTn;
    if (closeTn) {
      p.openElements.generateImpliedEndTagsWithExclusion(closeTn);
      p.openElements.popUntilTagNamePopped(closeTn);
      break;
    }
    if (elementTn !== $$3.ADDRESS && elementTn !== $$3.DIV && elementTn !== $$3.P && p._isSpecialElement(element2))
      break;
  }
  if (p.openElements.hasInButtonScope($$3.P))
    p._closePElement();
  p._insertElement(token, NS$2.HTML);
}
function plaintextStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$3.P))
    p._closePElement();
  p._insertElement(token, NS$2.HTML);
  p.tokenizer.state = Tokenizer$2.MODE.PLAINTEXT;
}
function buttonStartTagInBody(p, token) {
  if (p.openElements.hasInScope($$3.BUTTON)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped($$3.BUTTON);
  }
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS$2.HTML);
  p.framesetOk = false;
}
function aStartTagInBody(p, token) {
  var activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName($$3.A);
  if (activeElementEntry) {
    callAdoptionAgency(p, token);
    p.openElements.remove(activeElementEntry.element);
    p.activeFormattingElements.removeEntry(activeElementEntry);
  }
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS$2.HTML);
  p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function bStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS$2.HTML);
  p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function nobrStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  if (p.openElements.hasInScope($$3.NOBR)) {
    callAdoptionAgency(p, token);
    p._reconstructActiveFormattingElements();
  }
  p._insertElement(token, NS$2.HTML);
  p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function appletStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS$2.HTML);
  p.activeFormattingElements.insertMarker();
  p.framesetOk = false;
}
function tableStartTagInBody(p, token) {
  if (p.treeAdapter.getDocumentMode(p.document) !== HTML$2.DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope($$3.P))
    p._closePElement();
  p._insertElement(token, NS$2.HTML);
  p.framesetOk = false;
  p.insertionMode = IN_TABLE_MODE;
}
function areaStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._appendElement(token, NS$2.HTML);
  p.framesetOk = false;
}
function inputStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._appendElement(token, NS$2.HTML);
  var inputType = Tokenizer$2.getTokenAttr(token, ATTRS.TYPE);
  if (!inputType || inputType.toLowerCase() !== HIDDEN_INPUT_TYPE)
    p.framesetOk = false;
}
function paramStartTagInBody(p, token) {
  p._appendElement(token, NS$2.HTML);
}
function hrStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$3.P))
    p._closePElement();
  if (p.openElements.currentTagName === $$3.MENUITEM)
    p.openElements.pop();
  p._appendElement(token, NS$2.HTML);
  p.framesetOk = false;
}
function imageStartTagInBody(p, token) {
  token.tagName = $$3.IMG;
  areaStartTagInBody(p, token);
}
function textareaStartTagInBody(p, token) {
  p._insertElement(token, NS$2.HTML);
  p.skipNextNewLine = true;
  p.tokenizer.state = Tokenizer$2.MODE.RCDATA;
  p.originalInsertionMode = p.insertionMode;
  p.framesetOk = false;
  p.insertionMode = TEXT_MODE;
}
function xmpStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$3.P))
    p._closePElement();
  p._reconstructActiveFormattingElements();
  p.framesetOk = false;
  p._switchToTextParsing(token, Tokenizer$2.MODE.RAWTEXT);
}
function iframeStartTagInBody(p, token) {
  p.framesetOk = false;
  p._switchToTextParsing(token, Tokenizer$2.MODE.RAWTEXT);
}
function noembedStartTagInBody(p, token) {
  p._switchToTextParsing(token, Tokenizer$2.MODE.RAWTEXT);
}
function selectStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS$2.HTML);
  p.framesetOk = false;
  if (p.insertionMode === IN_TABLE_MODE || p.insertionMode === IN_CAPTION_MODE || p.insertionMode === IN_TABLE_BODY_MODE || p.insertionMode === IN_ROW_MODE || p.insertionMode === IN_CELL_MODE)
    p.insertionMode = IN_SELECT_IN_TABLE_MODE;
  else
    p.insertionMode = IN_SELECT_MODE;
}
function optgroupStartTagInBody(p, token) {
  if (p.openElements.currentTagName === $$3.OPTION)
    p.openElements.pop();
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS$2.HTML);
}
function rbStartTagInBody(p, token) {
  if (p.openElements.hasInScope($$3.RUBY))
    p.openElements.generateImpliedEndTags();
  p._insertElement(token, NS$2.HTML);
}
function rtStartTagInBody(p, token) {
  if (p.openElements.hasInScope($$3.RUBY))
    p.openElements.generateImpliedEndTagsWithExclusion($$3.RTC);
  p._insertElement(token, NS$2.HTML);
}
function menuitemStartTagInBody(p, token) {
  if (p.openElements.currentTagName === $$3.MENUITEM)
    p.openElements.pop();
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS$2.HTML);
}
function menuStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$3.P))
    p._closePElement();
  if (p.openElements.currentTagName === $$3.MENUITEM)
    p.openElements.pop();
  p._insertElement(token, NS$2.HTML);
}
function mathStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  foreignContent$1.adjustTokenMathMLAttrs(token);
  foreignContent$1.adjustTokenXMLAttrs(token);
  if (token.selfClosing)
    p._appendElement(token, NS$2.MATHML);
  else
    p._insertElement(token, NS$2.MATHML);
}
function svgStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  foreignContent$1.adjustTokenSVGAttrs(token);
  foreignContent$1.adjustTokenXMLAttrs(token);
  if (token.selfClosing)
    p._appendElement(token, NS$2.SVG);
  else
    p._insertElement(token, NS$2.SVG);
}
function genericStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS$2.HTML);
}
function startTagInBody(p, token) {
  var tn = token.tagName;
  switch (tn.length) {
    case 1:
      if (tn === $$3.I || tn === $$3.S || tn === $$3.B || tn === $$3.U)
        bStartTagInBody(p, token);
      else if (tn === $$3.P)
        addressStartTagInBody(p, token);
      else if (tn === $$3.A)
        aStartTagInBody(p, token);
      else
        genericStartTagInBody(p, token);
      break;
    case 2:
      if (tn === $$3.DL || tn === $$3.OL || tn === $$3.UL)
        addressStartTagInBody(p, token);
      else if (tn === $$3.H1 || tn === $$3.H2 || tn === $$3.H3 || tn === $$3.H4 || tn === $$3.H5 || tn === $$3.H6)
        numberedHeaderStartTagInBody(p, token);
      else if (tn === $$3.LI || tn === $$3.DD || tn === $$3.DT)
        listItemStartTagInBody(p, token);
      else if (tn === $$3.EM || tn === $$3.TT)
        bStartTagInBody(p, token);
      else if (tn === $$3.BR)
        areaStartTagInBody(p, token);
      else if (tn === $$3.HR)
        hrStartTagInBody(p, token);
      else if (tn === $$3.RB)
        rbStartTagInBody(p, token);
      else if (tn === $$3.RT || tn === $$3.RP)
        rtStartTagInBody(p, token);
      else if (tn !== $$3.TH && tn !== $$3.TD && tn !== $$3.TR)
        genericStartTagInBody(p, token);
      break;
    case 3:
      if (tn === $$3.DIV || tn === $$3.DIR || tn === $$3.NAV)
        addressStartTagInBody(p, token);
      else if (tn === $$3.PRE)
        preStartTagInBody(p, token);
      else if (tn === $$3.BIG)
        bStartTagInBody(p, token);
      else if (tn === $$3.IMG || tn === $$3.WBR)
        areaStartTagInBody(p, token);
      else if (tn === $$3.XMP)
        xmpStartTagInBody(p, token);
      else if (tn === $$3.SVG)
        svgStartTagInBody(p, token);
      else if (tn === $$3.RTC)
        rbStartTagInBody(p, token);
      else if (tn !== $$3.COL)
        genericStartTagInBody(p, token);
      break;
    case 4:
      if (tn === $$3.HTML)
        htmlStartTagInBody(p, token);
      else if (tn === $$3.BASE || tn === $$3.LINK || tn === $$3.META)
        startTagInHead(p, token);
      else if (tn === $$3.BODY)
        bodyStartTagInBody(p, token);
      else if (tn === $$3.MAIN)
        addressStartTagInBody(p, token);
      else if (tn === $$3.FORM)
        formStartTagInBody(p, token);
      else if (tn === $$3.CODE || tn === $$3.FONT)
        bStartTagInBody(p, token);
      else if (tn === $$3.NOBR)
        nobrStartTagInBody(p, token);
      else if (tn === $$3.AREA)
        areaStartTagInBody(p, token);
      else if (tn === $$3.MATH)
        mathStartTagInBody(p, token);
      else if (tn === $$3.MENU)
        menuStartTagInBody(p, token);
      else if (tn !== $$3.HEAD)
        genericStartTagInBody(p, token);
      break;
    case 5:
      if (tn === $$3.STYLE || tn === $$3.TITLE)
        startTagInHead(p, token);
      else if (tn === $$3.ASIDE)
        addressStartTagInBody(p, token);
      else if (tn === $$3.SMALL)
        bStartTagInBody(p, token);
      else if (tn === $$3.TABLE)
        tableStartTagInBody(p, token);
      else if (tn === $$3.EMBED)
        areaStartTagInBody(p, token);
      else if (tn === $$3.INPUT)
        inputStartTagInBody(p, token);
      else if (tn === $$3.PARAM || tn === $$3.TRACK)
        paramStartTagInBody(p, token);
      else if (tn === $$3.IMAGE)
        imageStartTagInBody(p, token);
      else if (tn !== $$3.FRAME && tn !== $$3.TBODY && tn !== $$3.TFOOT && tn !== $$3.THEAD)
        genericStartTagInBody(p, token);
      break;
    case 6:
      if (tn === $$3.SCRIPT)
        startTagInHead(p, token);
      else if (tn === $$3.CENTER || tn === $$3.FIGURE || tn === $$3.FOOTER || tn === $$3.HEADER || tn === $$3.HGROUP)
        addressStartTagInBody(p, token);
      else if (tn === $$3.BUTTON)
        buttonStartTagInBody(p, token);
      else if (tn === $$3.STRIKE || tn === $$3.STRONG)
        bStartTagInBody(p, token);
      else if (tn === $$3.APPLET || tn === $$3.OBJECT)
        appletStartTagInBody(p, token);
      else if (tn === $$3.KEYGEN)
        areaStartTagInBody(p, token);
      else if (tn === $$3.SOURCE)
        paramStartTagInBody(p, token);
      else if (tn === $$3.IFRAME)
        iframeStartTagInBody(p, token);
      else if (tn === $$3.SELECT)
        selectStartTagInBody(p, token);
      else if (tn === $$3.OPTION)
        optgroupStartTagInBody(p, token);
      else
        genericStartTagInBody(p, token);
      break;
    case 7:
      if (tn === $$3.BGSOUND)
        startTagInHead(p, token);
      else if (tn === $$3.DETAILS || tn === $$3.ADDRESS || tn === $$3.ARTICLE || tn === $$3.SECTION || tn === $$3.SUMMARY)
        addressStartTagInBody(p, token);
      else if (tn === $$3.LISTING)
        preStartTagInBody(p, token);
      else if (tn === $$3.MARQUEE)
        appletStartTagInBody(p, token);
      else if (tn === $$3.NOEMBED)
        noembedStartTagInBody(p, token);
      else if (tn !== $$3.CAPTION)
        genericStartTagInBody(p, token);
      break;
    case 8:
      if (tn === $$3.BASEFONT)
        startTagInHead(p, token);
      else if (tn === $$3.MENUITEM)
        menuitemStartTagInBody(p, token);
      else if (tn === $$3.FRAMESET)
        framesetStartTagInBody(p, token);
      else if (tn === $$3.FIELDSET)
        addressStartTagInBody(p, token);
      else if (tn === $$3.TEXTAREA)
        textareaStartTagInBody(p, token);
      else if (tn === $$3.TEMPLATE)
        startTagInHead(p, token);
      else if (tn === $$3.NOSCRIPT)
        noembedStartTagInBody(p, token);
      else if (tn === $$3.OPTGROUP)
        optgroupStartTagInBody(p, token);
      else if (tn !== $$3.COLGROUP)
        genericStartTagInBody(p, token);
      break;
    case 9:
      if (tn === $$3.PLAINTEXT)
        plaintextStartTagInBody(p, token);
      else
        genericStartTagInBody(p, token);
      break;
    case 10:
      if (tn === $$3.BLOCKQUOTE || tn === $$3.FIGCAPTION)
        addressStartTagInBody(p, token);
      else
        genericStartTagInBody(p, token);
      break;
    default:
      genericStartTagInBody(p, token);
  }
}
function bodyEndTagInBody(p) {
  if (p.openElements.hasInScope($$3.BODY))
    p.insertionMode = AFTER_BODY_MODE;
}
function htmlEndTagInBody(p, token) {
  if (p.openElements.hasInScope($$3.BODY)) {
    p.insertionMode = AFTER_BODY_MODE;
    p._processToken(token);
  }
}
function addressEndTagInBody(p, token) {
  var tn = token.tagName;
  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped(tn);
  }
}
function formEndTagInBody(p) {
  var inTemplate = p.openElements.tmplCount > 0, formElement = p.formElement;
  if (!inTemplate)
    p.formElement = null;
  if ((formElement || inTemplate) && p.openElements.hasInScope($$3.FORM)) {
    p.openElements.generateImpliedEndTags();
    if (inTemplate)
      p.openElements.popUntilTagNamePopped($$3.FORM);
    else
      p.openElements.remove(formElement);
  }
}
function pEndTagInBody(p) {
  if (!p.openElements.hasInButtonScope($$3.P))
    p._insertFakeElement($$3.P);
  p._closePElement();
}
function liEndTagInBody(p) {
  if (p.openElements.hasInListItemScope($$3.LI)) {
    p.openElements.generateImpliedEndTagsWithExclusion($$3.LI);
    p.openElements.popUntilTagNamePopped($$3.LI);
  }
}
function ddEndTagInBody(p, token) {
  var tn = token.tagName;
  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTagsWithExclusion(tn);
    p.openElements.popUntilTagNamePopped(tn);
  }
}
function numberedHeaderEndTagInBody(p) {
  if (p.openElements.hasNumberedHeaderInScope()) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilNumberedHeaderPopped();
  }
}
function appletEndTagInBody(p, token) {
  var tn = token.tagName;
  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped(tn);
    p.activeFormattingElements.clearToLastMarker();
  }
}
function brEndTagInBody(p) {
  p._reconstructActiveFormattingElements();
  p._insertFakeElement($$3.BR);
  p.openElements.pop();
  p.framesetOk = false;
}
function genericEndTagInBody(p, token) {
  var tn = token.tagName;
  for (var i2 = p.openElements.stackTop; i2 > 0; i2--) {
    var element2 = p.openElements.items[i2];
    if (p.treeAdapter.getTagName(element2) === tn) {
      p.openElements.generateImpliedEndTagsWithExclusion(tn);
      p.openElements.popUntilElementPopped(element2);
      break;
    }
    if (p._isSpecialElement(element2))
      break;
  }
}
function endTagInBody(p, token) {
  var tn = token.tagName;
  switch (tn.length) {
    case 1:
      if (tn === $$3.A || tn === $$3.B || tn === $$3.I || tn === $$3.S || tn === $$3.U)
        callAdoptionAgency(p, token);
      else if (tn === $$3.P)
        pEndTagInBody(p);
      else
        genericEndTagInBody(p, token);
      break;
    case 2:
      if (tn === $$3.DL || tn === $$3.UL || tn === $$3.OL)
        addressEndTagInBody(p, token);
      else if (tn === $$3.LI)
        liEndTagInBody(p);
      else if (tn === $$3.DD || tn === $$3.DT)
        ddEndTagInBody(p, token);
      else if (tn === $$3.H1 || tn === $$3.H2 || tn === $$3.H3 || tn === $$3.H4 || tn === $$3.H5 || tn === $$3.H6)
        numberedHeaderEndTagInBody(p);
      else if (tn === $$3.BR)
        brEndTagInBody(p);
      else if (tn === $$3.EM || tn === $$3.TT)
        callAdoptionAgency(p, token);
      else
        genericEndTagInBody(p, token);
      break;
    case 3:
      if (tn === $$3.BIG)
        callAdoptionAgency(p, token);
      else if (tn === $$3.DIR || tn === $$3.DIV || tn === $$3.NAV)
        addressEndTagInBody(p, token);
      else
        genericEndTagInBody(p, token);
      break;
    case 4:
      if (tn === $$3.BODY)
        bodyEndTagInBody(p);
      else if (tn === $$3.HTML)
        htmlEndTagInBody(p, token);
      else if (tn === $$3.FORM)
        formEndTagInBody(p);
      else if (tn === $$3.CODE || tn === $$3.FONT || tn === $$3.NOBR)
        callAdoptionAgency(p, token);
      else if (tn === $$3.MAIN || tn === $$3.MENU)
        addressEndTagInBody(p, token);
      else
        genericEndTagInBody(p, token);
      break;
    case 5:
      if (tn === $$3.ASIDE)
        addressEndTagInBody(p, token);
      else if (tn === $$3.SMALL)
        callAdoptionAgency(p, token);
      else
        genericEndTagInBody(p, token);
      break;
    case 6:
      if (tn === $$3.CENTER || tn === $$3.FIGURE || tn === $$3.FOOTER || tn === $$3.HEADER || tn === $$3.HGROUP)
        addressEndTagInBody(p, token);
      else if (tn === $$3.APPLET || tn === $$3.OBJECT)
        appletEndTagInBody(p, token);
      else if (tn === $$3.STRIKE || tn === $$3.STRONG)
        callAdoptionAgency(p, token);
      else
        genericEndTagInBody(p, token);
      break;
    case 7:
      if (tn === $$3.ADDRESS || tn === $$3.ARTICLE || tn === $$3.DETAILS || tn === $$3.SECTION || tn === $$3.SUMMARY)
        addressEndTagInBody(p, token);
      else if (tn === $$3.MARQUEE)
        appletEndTagInBody(p, token);
      else
        genericEndTagInBody(p, token);
      break;
    case 8:
      if (tn === $$3.FIELDSET)
        addressEndTagInBody(p, token);
      else if (tn === $$3.TEMPLATE)
        endTagInHead(p, token);
      else
        genericEndTagInBody(p, token);
      break;
    case 10:
      if (tn === $$3.BLOCKQUOTE || tn === $$3.FIGCAPTION)
        addressEndTagInBody(p, token);
      else
        genericEndTagInBody(p, token);
      break;
    default:
      genericEndTagInBody(p, token);
  }
}
function eofInBody(p, token) {
  if (p.tmplInsertionModeStackTop > -1)
    eofInTemplate(p, token);
  else
    p.stopped = true;
}
function endTagInText(p, token) {
  if (token.tagName === $$3.SCRIPT)
    p.pendingScript = p.openElements.current;
  p.openElements.pop();
  p.insertionMode = p.originalInsertionMode;
}
function eofInText(p, token) {
  p.openElements.pop();
  p.insertionMode = p.originalInsertionMode;
  p._processToken(token);
}
function characterInTable(p, token) {
  var curTn = p.openElements.currentTagName;
  if (curTn === $$3.TABLE || curTn === $$3.TBODY || curTn === $$3.TFOOT || curTn === $$3.THEAD || curTn === $$3.TR) {
    p.pendingCharacterTokens = [];
    p.hasNonWhitespacePendingCharacterToken = false;
    p.originalInsertionMode = p.insertionMode;
    p.insertionMode = IN_TABLE_TEXT_MODE;
    p._processToken(token);
  } else
    tokenInTable(p, token);
}
function captionStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p.activeFormattingElements.insertMarker();
  p._insertElement(token, NS$2.HTML);
  p.insertionMode = IN_CAPTION_MODE;
}
function colgroupStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertElement(token, NS$2.HTML);
  p.insertionMode = IN_COLUMN_GROUP_MODE;
}
function colStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertFakeElement($$3.COLGROUP);
  p.insertionMode = IN_COLUMN_GROUP_MODE;
  p._processToken(token);
}
function tbodyStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertElement(token, NS$2.HTML);
  p.insertionMode = IN_TABLE_BODY_MODE;
}
function tdStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertFakeElement($$3.TBODY);
  p.insertionMode = IN_TABLE_BODY_MODE;
  p._processToken(token);
}
function tableStartTagInTable(p, token) {
  if (p.openElements.hasInTableScope($$3.TABLE)) {
    p.openElements.popUntilTagNamePopped($$3.TABLE);
    p._resetInsertionMode();
    p._processToken(token);
  }
}
function inputStartTagInTable(p, token) {
  var inputType = Tokenizer$2.getTokenAttr(token, ATTRS.TYPE);
  if (inputType && inputType.toLowerCase() === HIDDEN_INPUT_TYPE)
    p._appendElement(token, NS$2.HTML);
  else
    tokenInTable(p, token);
}
function formStartTagInTable(p, token) {
  if (!p.formElement && p.openElements.tmplCount === 0) {
    p._insertElement(token, NS$2.HTML);
    p.formElement = p.openElements.current;
    p.openElements.pop();
  }
}
function startTagInTable(p, token) {
  var tn = token.tagName;
  switch (tn.length) {
    case 2:
      if (tn === $$3.TD || tn === $$3.TH || tn === $$3.TR)
        tdStartTagInTable(p, token);
      else
        tokenInTable(p, token);
      break;
    case 3:
      if (tn === $$3.COL)
        colStartTagInTable(p, token);
      else
        tokenInTable(p, token);
      break;
    case 4:
      if (tn === $$3.FORM)
        formStartTagInTable(p, token);
      else
        tokenInTable(p, token);
      break;
    case 5:
      if (tn === $$3.TABLE)
        tableStartTagInTable(p, token);
      else if (tn === $$3.STYLE)
        startTagInHead(p, token);
      else if (tn === $$3.TBODY || tn === $$3.TFOOT || tn === $$3.THEAD)
        tbodyStartTagInTable(p, token);
      else if (tn === $$3.INPUT)
        inputStartTagInTable(p, token);
      else
        tokenInTable(p, token);
      break;
    case 6:
      if (tn === $$3.SCRIPT)
        startTagInHead(p, token);
      else
        tokenInTable(p, token);
      break;
    case 7:
      if (tn === $$3.CAPTION)
        captionStartTagInTable(p, token);
      else
        tokenInTable(p, token);
      break;
    case 8:
      if (tn === $$3.COLGROUP)
        colgroupStartTagInTable(p, token);
      else if (tn === $$3.TEMPLATE)
        startTagInHead(p, token);
      else
        tokenInTable(p, token);
      break;
    default:
      tokenInTable(p, token);
  }
}
function endTagInTable(p, token) {
  var tn = token.tagName;
  if (tn === $$3.TABLE) {
    if (p.openElements.hasInTableScope($$3.TABLE)) {
      p.openElements.popUntilTagNamePopped($$3.TABLE);
      p._resetInsertionMode();
    }
  } else if (tn === $$3.TEMPLATE)
    endTagInHead(p, token);
  else if (tn !== $$3.BODY && tn !== $$3.CAPTION && tn !== $$3.COL && tn !== $$3.COLGROUP && tn !== $$3.HTML && tn !== $$3.TBODY && tn !== $$3.TD && tn !== $$3.TFOOT && tn !== $$3.TH && tn !== $$3.THEAD && tn !== $$3.TR)
    tokenInTable(p, token);
}
function tokenInTable(p, token) {
  var savedFosterParentingState = p.fosterParentingEnabled;
  p.fosterParentingEnabled = true;
  p._processTokenInBodyMode(token);
  p.fosterParentingEnabled = savedFosterParentingState;
}
function whitespaceCharacterInTableText(p, token) {
  p.pendingCharacterTokens.push(token);
}
function characterInTableText(p, token) {
  p.pendingCharacterTokens.push(token);
  p.hasNonWhitespacePendingCharacterToken = true;
}
function tokenInTableText(p, token) {
  var i2 = 0;
  if (p.hasNonWhitespacePendingCharacterToken) {
    for (; i2 < p.pendingCharacterTokens.length; i2++)
      tokenInTable(p, p.pendingCharacterTokens[i2]);
  } else {
    for (; i2 < p.pendingCharacterTokens.length; i2++)
      p._insertCharacters(p.pendingCharacterTokens[i2]);
  }
  p.insertionMode = p.originalInsertionMode;
  p._processToken(token);
}
function startTagInCaption(p, token) {
  var tn = token.tagName;
  if (tn === $$3.CAPTION || tn === $$3.COL || tn === $$3.COLGROUP || tn === $$3.TBODY || tn === $$3.TD || tn === $$3.TFOOT || tn === $$3.TH || tn === $$3.THEAD || tn === $$3.TR) {
    if (p.openElements.hasInTableScope($$3.CAPTION)) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilTagNamePopped($$3.CAPTION);
      p.activeFormattingElements.clearToLastMarker();
      p.insertionMode = IN_TABLE_MODE;
      p._processToken(token);
    }
  } else
    startTagInBody(p, token);
}
function endTagInCaption(p, token) {
  var tn = token.tagName;
  if (tn === $$3.CAPTION || tn === $$3.TABLE) {
    if (p.openElements.hasInTableScope($$3.CAPTION)) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilTagNamePopped($$3.CAPTION);
      p.activeFormattingElements.clearToLastMarker();
      p.insertionMode = IN_TABLE_MODE;
      if (tn === $$3.TABLE)
        p._processToken(token);
    }
  } else if (tn !== $$3.BODY && tn !== $$3.COL && tn !== $$3.COLGROUP && tn !== $$3.HTML && tn !== $$3.TBODY && tn !== $$3.TD && tn !== $$3.TFOOT && tn !== $$3.TH && tn !== $$3.THEAD && tn !== $$3.TR)
    endTagInBody(p, token);
}
function startTagInColumnGroup(p, token) {
  var tn = token.tagName;
  if (tn === $$3.HTML)
    startTagInBody(p, token);
  else if (tn === $$3.COL)
    p._appendElement(token, NS$2.HTML);
  else if (tn === $$3.TEMPLATE)
    startTagInHead(p, token);
  else
    tokenInColumnGroup(p, token);
}
function endTagInColumnGroup(p, token) {
  var tn = token.tagName;
  if (tn === $$3.COLGROUP) {
    if (p.openElements.currentTagName === $$3.COLGROUP) {
      p.openElements.pop();
      p.insertionMode = IN_TABLE_MODE;
    }
  } else if (tn === $$3.TEMPLATE)
    endTagInHead(p, token);
  else if (tn !== $$3.COL)
    tokenInColumnGroup(p, token);
}
function tokenInColumnGroup(p, token) {
  if (p.openElements.currentTagName === $$3.COLGROUP) {
    p.openElements.pop();
    p.insertionMode = IN_TABLE_MODE;
    p._processToken(token);
  }
}
function startTagInTableBody(p, token) {
  var tn = token.tagName;
  if (tn === $$3.TR) {
    p.openElements.clearBackToTableBodyContext();
    p._insertElement(token, NS$2.HTML);
    p.insertionMode = IN_ROW_MODE;
  } else if (tn === $$3.TH || tn === $$3.TD) {
    p.openElements.clearBackToTableBodyContext();
    p._insertFakeElement($$3.TR);
    p.insertionMode = IN_ROW_MODE;
    p._processToken(token);
  } else if (tn === $$3.CAPTION || tn === $$3.COL || tn === $$3.COLGROUP || tn === $$3.TBODY || tn === $$3.TFOOT || tn === $$3.THEAD) {
    if (p.openElements.hasTableBodyContextInTableScope()) {
      p.openElements.clearBackToTableBodyContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_MODE;
      p._processToken(token);
    }
  } else
    startTagInTable(p, token);
}
function endTagInTableBody(p, token) {
  var tn = token.tagName;
  if (tn === $$3.TBODY || tn === $$3.TFOOT || tn === $$3.THEAD) {
    if (p.openElements.hasInTableScope(tn)) {
      p.openElements.clearBackToTableBodyContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_MODE;
    }
  } else if (tn === $$3.TABLE) {
    if (p.openElements.hasTableBodyContextInTableScope()) {
      p.openElements.clearBackToTableBodyContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_MODE;
      p._processToken(token);
    }
  } else if (tn !== $$3.BODY && tn !== $$3.CAPTION && tn !== $$3.COL && tn !== $$3.COLGROUP || tn !== $$3.HTML && tn !== $$3.TD && tn !== $$3.TH && tn !== $$3.TR)
    endTagInTable(p, token);
}
function startTagInRow(p, token) {
  var tn = token.tagName;
  if (tn === $$3.TH || tn === $$3.TD) {
    p.openElements.clearBackToTableRowContext();
    p._insertElement(token, NS$2.HTML);
    p.insertionMode = IN_CELL_MODE;
    p.activeFormattingElements.insertMarker();
  } else if (tn === $$3.CAPTION || tn === $$3.COL || tn === $$3.COLGROUP || tn === $$3.TBODY || tn === $$3.TFOOT || tn === $$3.THEAD || tn === $$3.TR) {
    if (p.openElements.hasInTableScope($$3.TR)) {
      p.openElements.clearBackToTableRowContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_BODY_MODE;
      p._processToken(token);
    }
  } else
    startTagInTable(p, token);
}
function endTagInRow(p, token) {
  var tn = token.tagName;
  if (tn === $$3.TR) {
    if (p.openElements.hasInTableScope($$3.TR)) {
      p.openElements.clearBackToTableRowContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_BODY_MODE;
    }
  } else if (tn === $$3.TABLE) {
    if (p.openElements.hasInTableScope($$3.TR)) {
      p.openElements.clearBackToTableRowContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_BODY_MODE;
      p._processToken(token);
    }
  } else if (tn === $$3.TBODY || tn === $$3.TFOOT || tn === $$3.THEAD) {
    if (p.openElements.hasInTableScope(tn) || p.openElements.hasInTableScope($$3.TR)) {
      p.openElements.clearBackToTableRowContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_BODY_MODE;
      p._processToken(token);
    }
  } else if (tn !== $$3.BODY && tn !== $$3.CAPTION && tn !== $$3.COL && tn !== $$3.COLGROUP || tn !== $$3.HTML && tn !== $$3.TD && tn !== $$3.TH)
    endTagInTable(p, token);
}
function startTagInCell(p, token) {
  var tn = token.tagName;
  if (tn === $$3.CAPTION || tn === $$3.COL || tn === $$3.COLGROUP || tn === $$3.TBODY || tn === $$3.TD || tn === $$3.TFOOT || tn === $$3.TH || tn === $$3.THEAD || tn === $$3.TR) {
    if (p.openElements.hasInTableScope($$3.TD) || p.openElements.hasInTableScope($$3.TH)) {
      p._closeTableCell();
      p._processToken(token);
    }
  } else
    startTagInBody(p, token);
}
function endTagInCell(p, token) {
  var tn = token.tagName;
  if (tn === $$3.TD || tn === $$3.TH) {
    if (p.openElements.hasInTableScope(tn)) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilTagNamePopped(tn);
      p.activeFormattingElements.clearToLastMarker();
      p.insertionMode = IN_ROW_MODE;
    }
  } else if (tn === $$3.TABLE || tn === $$3.TBODY || tn === $$3.TFOOT || tn === $$3.THEAD || tn === $$3.TR) {
    if (p.openElements.hasInTableScope(tn)) {
      p._closeTableCell();
      p._processToken(token);
    }
  } else if (tn !== $$3.BODY && tn !== $$3.CAPTION && tn !== $$3.COL && tn !== $$3.COLGROUP && tn !== $$3.HTML)
    endTagInBody(p, token);
}
function startTagInSelect(p, token) {
  var tn = token.tagName;
  if (tn === $$3.HTML)
    startTagInBody(p, token);
  else if (tn === $$3.OPTION) {
    if (p.openElements.currentTagName === $$3.OPTION)
      p.openElements.pop();
    p._insertElement(token, NS$2.HTML);
  } else if (tn === $$3.OPTGROUP) {
    if (p.openElements.currentTagName === $$3.OPTION)
      p.openElements.pop();
    if (p.openElements.currentTagName === $$3.OPTGROUP)
      p.openElements.pop();
    p._insertElement(token, NS$2.HTML);
  } else if (tn === $$3.INPUT || tn === $$3.KEYGEN || tn === $$3.TEXTAREA || tn === $$3.SELECT) {
    if (p.openElements.hasInSelectScope($$3.SELECT)) {
      p.openElements.popUntilTagNamePopped($$3.SELECT);
      p._resetInsertionMode();
      if (tn !== $$3.SELECT)
        p._processToken(token);
    }
  } else if (tn === $$3.SCRIPT || tn === $$3.TEMPLATE)
    startTagInHead(p, token);
}
function endTagInSelect(p, token) {
  var tn = token.tagName;
  if (tn === $$3.OPTGROUP) {
    var prevOpenElement = p.openElements.items[p.openElements.stackTop - 1], prevOpenElementTn = prevOpenElement && p.treeAdapter.getTagName(prevOpenElement);
    if (p.openElements.currentTagName === $$3.OPTION && prevOpenElementTn === $$3.OPTGROUP)
      p.openElements.pop();
    if (p.openElements.currentTagName === $$3.OPTGROUP)
      p.openElements.pop();
  } else if (tn === $$3.OPTION) {
    if (p.openElements.currentTagName === $$3.OPTION)
      p.openElements.pop();
  } else if (tn === $$3.SELECT && p.openElements.hasInSelectScope($$3.SELECT)) {
    p.openElements.popUntilTagNamePopped($$3.SELECT);
    p._resetInsertionMode();
  } else if (tn === $$3.TEMPLATE)
    endTagInHead(p, token);
}
function startTagInSelectInTable(p, token) {
  var tn = token.tagName;
  if (tn === $$3.CAPTION || tn === $$3.TABLE || tn === $$3.TBODY || tn === $$3.TFOOT || tn === $$3.THEAD || tn === $$3.TR || tn === $$3.TD || tn === $$3.TH) {
    p.openElements.popUntilTagNamePopped($$3.SELECT);
    p._resetInsertionMode();
    p._processToken(token);
  } else
    startTagInSelect(p, token);
}
function endTagInSelectInTable(p, token) {
  var tn = token.tagName;
  if (tn === $$3.CAPTION || tn === $$3.TABLE || tn === $$3.TBODY || tn === $$3.TFOOT || tn === $$3.THEAD || tn === $$3.TR || tn === $$3.TD || tn === $$3.TH) {
    if (p.openElements.hasInTableScope(tn)) {
      p.openElements.popUntilTagNamePopped($$3.SELECT);
      p._resetInsertionMode();
      p._processToken(token);
    }
  } else
    endTagInSelect(p, token);
}
function startTagInTemplate(p, token) {
  var tn = token.tagName;
  if (tn === $$3.BASE || tn === $$3.BASEFONT || tn === $$3.BGSOUND || tn === $$3.LINK || tn === $$3.META || tn === $$3.NOFRAMES || tn === $$3.SCRIPT || tn === $$3.STYLE || tn === $$3.TEMPLATE || tn === $$3.TITLE)
    startTagInHead(p, token);
  else {
    var newInsertionMode = TEMPLATE_INSERTION_MODE_SWITCH_MAP[tn] || IN_BODY_MODE;
    p._popTmplInsertionMode();
    p._pushTmplInsertionMode(newInsertionMode);
    p.insertionMode = newInsertionMode;
    p._processToken(token);
  }
}
function endTagInTemplate(p, token) {
  if (token.tagName === $$3.TEMPLATE)
    endTagInHead(p, token);
}
function eofInTemplate(p, token) {
  if (p.openElements.tmplCount > 0) {
    p.openElements.popUntilTagNamePopped($$3.TEMPLATE);
    p.activeFormattingElements.clearToLastMarker();
    p._popTmplInsertionMode();
    p._resetInsertionMode();
    p._processToken(token);
  } else
    p.stopped = true;
}
function startTagAfterBody(p, token) {
  if (token.tagName === $$3.HTML)
    startTagInBody(p, token);
  else
    tokenAfterBody(p, token);
}
function endTagAfterBody(p, token) {
  if (token.tagName === $$3.HTML) {
    if (!p.fragmentContext)
      p.insertionMode = AFTER_AFTER_BODY_MODE;
  } else
    tokenAfterBody(p, token);
}
function tokenAfterBody(p, token) {
  p.insertionMode = IN_BODY_MODE;
  p._processToken(token);
}
function startTagInFrameset(p, token) {
  var tn = token.tagName;
  if (tn === $$3.HTML)
    startTagInBody(p, token);
  else if (tn === $$3.FRAMESET)
    p._insertElement(token, NS$2.HTML);
  else if (tn === $$3.FRAME)
    p._appendElement(token, NS$2.HTML);
  else if (tn === $$3.NOFRAMES)
    startTagInHead(p, token);
}
function endTagInFrameset(p, token) {
  if (token.tagName === $$3.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
    p.openElements.pop();
    if (!p.fragmentContext && p.openElements.currentTagName !== $$3.FRAMESET)
      p.insertionMode = AFTER_FRAMESET_MODE;
  }
}
function startTagAfterFrameset(p, token) {
  var tn = token.tagName;
  if (tn === $$3.HTML)
    startTagInBody(p, token);
  else if (tn === $$3.NOFRAMES)
    startTagInHead(p, token);
}
function endTagAfterFrameset(p, token) {
  if (token.tagName === $$3.HTML)
    p.insertionMode = AFTER_AFTER_FRAMESET_MODE;
}
function startTagAfterAfterBody(p, token) {
  if (token.tagName === $$3.HTML)
    startTagInBody(p, token);
  else
    tokenAfterAfterBody(p, token);
}
function tokenAfterAfterBody(p, token) {
  p.insertionMode = IN_BODY_MODE;
  p._processToken(token);
}
function startTagAfterAfterFrameset(p, token) {
  var tn = token.tagName;
  if (tn === $$3.HTML)
    startTagInBody(p, token);
  else if (tn === $$3.NOFRAMES)
    startTagInHead(p, token);
}
function nullCharacterInForeignContent(p, token) {
  token.chars = UNICODE$1.REPLACEMENT_CHARACTER;
  p._insertCharacters(token);
}
function characterInForeignContent(p, token) {
  p._insertCharacters(token);
  p.framesetOk = false;
}
function startTagInForeignContent(p, token) {
  if (foreignContent$1.causesExit(token) && !p.fragmentContext) {
    while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS$2.HTML && !p._isIntegrationPoint(p.openElements.current))
      p.openElements.pop();
    p._processToken(token);
  } else {
    var current = p._getAdjustedCurrentElement(), currentNs = p.treeAdapter.getNamespaceURI(current);
    if (currentNs === NS$2.MATHML)
      foreignContent$1.adjustTokenMathMLAttrs(token);
    else if (currentNs === NS$2.SVG) {
      foreignContent$1.adjustTokenSVGTagName(token);
      foreignContent$1.adjustTokenSVGAttrs(token);
    }
    foreignContent$1.adjustTokenXMLAttrs(token);
    if (token.selfClosing)
      p._appendElement(token, currentNs);
    else
      p._insertElement(token, currentNs);
  }
}
function endTagInForeignContent(p, token) {
  for (var i2 = p.openElements.stackTop; i2 > 0; i2--) {
    var element2 = p.openElements.items[i2];
    if (p.treeAdapter.getNamespaceURI(element2) === NS$2.HTML) {
      p._processToken(token);
      break;
    }
    if (p.treeAdapter.getTagName(element2).toLowerCase() === token.tagName) {
      p.openElements.popUntilElementPopped(element2);
      break;
    }
  }
}
var serializerExports = {};
var serializer = {
  get exports() {
    return serializerExports;
  },
  set exports(v) {
    serializerExports = v;
  }
};
var defaultTreeAdapter = _default, mergeOptions$1 = merge_options, doctype$1 = doctype$3, HTML$1 = html;
var $$2 = HTML$1.TAG_NAMES, NS$1 = HTML$1.NAMESPACES;
var DEFAULT_OPTIONS$1 = {
  treeAdapter: defaultTreeAdapter
};
var AMP_REGEX = /&/g, NBSP_REGEX = /\u00a0/g, DOUBLE_QUOTE_REGEX = /"/g, LT_REGEX = /</g, GT_REGEX = />/g;
var Serializer$2 = serializer.exports = function(node2, options2) {
  this.options = mergeOptions$1(DEFAULT_OPTIONS$1, options2);
  this.treeAdapter = this.options.treeAdapter;
  this.html = "";
  this.startNode = node2;
};
Serializer$2.escapeString = function(str, attrMode) {
  str = str.replace(AMP_REGEX, "&amp;").replace(NBSP_REGEX, "&nbsp;");
  if (attrMode)
    str = str.replace(DOUBLE_QUOTE_REGEX, "&quot;");
  else {
    str = str.replace(LT_REGEX, "&lt;").replace(GT_REGEX, "&gt;");
  }
  return str;
};
Serializer$2.prototype.serialize = function() {
  this._serializeChildNodes(this.startNode);
  return this.html;
};
Serializer$2.prototype._serializeChildNodes = function(parentNode) {
  var childNodes = this.treeAdapter.getChildNodes(parentNode);
  if (childNodes) {
    for (var i2 = 0, cnLength = childNodes.length; i2 < cnLength; i2++) {
      var currentNode = childNodes[i2];
      if (this.treeAdapter.isElementNode(currentNode))
        this._serializeElement(currentNode);
      else if (this.treeAdapter.isTextNode(currentNode))
        this._serializeTextNode(currentNode);
      else if (this.treeAdapter.isCommentNode(currentNode))
        this._serializeCommentNode(currentNode);
      else if (this.treeAdapter.isDocumentTypeNode(currentNode))
        this._serializeDocumentTypeNode(currentNode);
    }
  }
};
Serializer$2.prototype._serializeElement = function(node2) {
  var tn = this.treeAdapter.getTagName(node2), ns = this.treeAdapter.getNamespaceURI(node2);
  this.html += "<" + tn;
  this._serializeAttributes(node2);
  this.html += ">";
  if (tn !== $$2.AREA && tn !== $$2.BASE && tn !== $$2.BASEFONT && tn !== $$2.BGSOUND && tn !== $$2.BR && tn !== $$2.BR && tn !== $$2.COL && tn !== $$2.EMBED && tn !== $$2.FRAME && tn !== $$2.HR && tn !== $$2.IMG && tn !== $$2.INPUT && tn !== $$2.KEYGEN && tn !== $$2.LINK && tn !== $$2.MENUITEM && tn !== $$2.META && tn !== $$2.PARAM && tn !== $$2.SOURCE && tn !== $$2.TRACK && tn !== $$2.WBR) {
    var childNodesHolder = tn === $$2.TEMPLATE && ns === NS$1.HTML ? this.treeAdapter.getTemplateContent(node2) : node2;
    this._serializeChildNodes(childNodesHolder);
    this.html += "</" + tn + ">";
  }
};
Serializer$2.prototype._serializeAttributes = function(node2) {
  var attrs = this.treeAdapter.getAttrList(node2);
  for (var i2 = 0, attrsLength = attrs.length; i2 < attrsLength; i2++) {
    var attr = attrs[i2], value = Serializer$2.escapeString(attr.value, true);
    this.html += " ";
    if (!attr.namespace)
      this.html += attr.name;
    else if (attr.namespace === NS$1.XML)
      this.html += "xml:" + attr.name;
    else if (attr.namespace === NS$1.XMLNS) {
      if (attr.name !== "xmlns")
        this.html += "xmlns:";
      this.html += attr.name;
    } else if (attr.namespace === NS$1.XLINK)
      this.html += "xlink:" + attr.name;
    else
      this.html += attr.namespace + ":" + attr.name;
    this.html += '="' + value + '"';
  }
};
Serializer$2.prototype._serializeTextNode = function(node2) {
  var content = this.treeAdapter.getTextNodeContent(node2), parent2 = this.treeAdapter.getParentNode(node2), parentTn = void 0;
  if (parent2 && this.treeAdapter.isElementNode(parent2))
    parentTn = this.treeAdapter.getTagName(parent2);
  if (parentTn === $$2.STYLE || parentTn === $$2.SCRIPT || parentTn === $$2.XMP || parentTn === $$2.IFRAME || parentTn === $$2.NOEMBED || parentTn === $$2.NOFRAMES || parentTn === $$2.PLAINTEXT || parentTn === $$2.NOSCRIPT)
    this.html += content;
  else
    this.html += Serializer$2.escapeString(content, false);
};
Serializer$2.prototype._serializeCommentNode = function(node2) {
  this.html += "<!--" + this.treeAdapter.getCommentNodeContent(node2) + "-->";
};
Serializer$2.prototype._serializeDocumentTypeNode = function(node2) {
  var name2 = this.treeAdapter.getDocumentTypeNodeName(node2);
  this.html += "<" + doctype$1.serializeContent(name2, null, null) + ">";
};
var htmlparser2 = {};
var doctype = doctype$3, DOCUMENT_MODE = html.DOCUMENT_MODE;
var nodeTypes = {
  element: 1,
  text: 3,
  cdata: 4,
  comment: 8
};
var nodePropertyShorthands = {
  tagName: "name",
  childNodes: "children",
  parentNode: "parent",
  previousSibling: "prev",
  nextSibling: "next",
  nodeValue: "data"
};
var Node = function(props) {
  for (var key in props) {
    if (props.hasOwnProperty(key))
      this[key] = props[key];
  }
};
Node.prototype = {
  get firstChild() {
    var children = this.children;
    return children && children[0] || null;
  },
  get lastChild() {
    var children = this.children;
    return children && children[children.length - 1] || null;
  },
  get nodeType() {
    return nodeTypes[this.type] || nodeTypes.element;
  }
};
Object.keys(nodePropertyShorthands).forEach(function(key) {
  var shorthand = nodePropertyShorthands[key];
  Object.defineProperty(Node.prototype, key, {
    get: function() {
      return this[shorthand] || null;
    },
    set: function(val) {
      this[shorthand] = val;
      return val;
    }
  });
});
htmlparser2.createDocument = function() {
  return new Node({
    type: "root",
    name: "root",
    parent: null,
    prev: null,
    next: null,
    children: [],
    "x-mode": DOCUMENT_MODE.NO_QUIRKS
  });
};
htmlparser2.createDocumentFragment = function() {
  return new Node({
    type: "root",
    name: "root",
    parent: null,
    prev: null,
    next: null,
    children: []
  });
};
htmlparser2.createElement = function(tagName, namespaceURI, attrs) {
  var attribs = /* @__PURE__ */ Object.create(null), attribsNamespace = /* @__PURE__ */ Object.create(null), attribsPrefix = /* @__PURE__ */ Object.create(null);
  for (var i2 = 0; i2 < attrs.length; i2++) {
    var attrName = attrs[i2].name;
    attribs[attrName] = attrs[i2].value;
    attribsNamespace[attrName] = attrs[i2].namespace;
    attribsPrefix[attrName] = attrs[i2].prefix;
  }
  return new Node({
    type: tagName === "script" || tagName === "style" ? tagName : "tag",
    name: tagName,
    namespace: namespaceURI,
    attribs,
    "x-attribsNamespace": attribsNamespace,
    "x-attribsPrefix": attribsPrefix,
    children: [],
    parent: null,
    prev: null,
    next: null
  });
};
htmlparser2.createCommentNode = function(data) {
  return new Node({
    type: "comment",
    data,
    parent: null,
    prev: null,
    next: null
  });
};
var createTextNode = function(value) {
  return new Node({
    type: "text",
    data: value,
    parent: null,
    prev: null,
    next: null
  });
};
var appendChild = htmlparser2.appendChild = function(parentNode, newNode) {
  var prev = parentNode.children[parentNode.children.length - 1];
  if (prev) {
    prev.next = newNode;
    newNode.prev = prev;
  }
  parentNode.children.push(newNode);
  newNode.parent = parentNode;
};
var insertBefore = htmlparser2.insertBefore = function(parentNode, newNode, referenceNode) {
  var insertionIdx = parentNode.children.indexOf(referenceNode), prev = referenceNode.prev;
  if (prev) {
    prev.next = newNode;
    newNode.prev = prev;
  }
  referenceNode.prev = newNode;
  newNode.next = referenceNode;
  parentNode.children.splice(insertionIdx, 0, newNode);
  newNode.parent = parentNode;
};
htmlparser2.setTemplateContent = function(templateElement, contentElement) {
  appendChild(templateElement, contentElement);
};
htmlparser2.getTemplateContent = function(templateElement) {
  return templateElement.children[0];
};
htmlparser2.setDocumentType = function(document, name2, publicId, systemId) {
  var data = doctype.serializeContent(name2, publicId, systemId), doctypeNode = null;
  for (var i2 = 0; i2 < document.children.length; i2++) {
    if (document.children[i2].type === "directive" && document.children[i2].name === "!doctype") {
      doctypeNode = document.children[i2];
      break;
    }
  }
  if (doctypeNode) {
    doctypeNode.data = data;
    doctypeNode["x-name"] = name2;
    doctypeNode["x-publicId"] = publicId;
    doctypeNode["x-systemId"] = systemId;
  } else {
    appendChild(document, new Node({
      type: "directive",
      name: "!doctype",
      data,
      "x-name": name2,
      "x-publicId": publicId,
      "x-systemId": systemId
    }));
  }
};
htmlparser2.setDocumentMode = function(document, mode) {
  document["x-mode"] = mode;
};
htmlparser2.getDocumentMode = function(document) {
  return document["x-mode"];
};
htmlparser2.detachNode = function(node2) {
  if (node2.parent) {
    var idx = node2.parent.children.indexOf(node2), prev = node2.prev, next = node2.next;
    node2.prev = null;
    node2.next = null;
    if (prev)
      prev.next = next;
    if (next)
      next.prev = prev;
    node2.parent.children.splice(idx, 1);
    node2.parent = null;
  }
};
htmlparser2.insertText = function(parentNode, text) {
  var lastChild = parentNode.children[parentNode.children.length - 1];
  if (lastChild && lastChild.type === "text")
    lastChild.data += text;
  else
    appendChild(parentNode, createTextNode(text));
};
htmlparser2.insertTextBefore = function(parentNode, text, referenceNode) {
  var prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];
  if (prevNode && prevNode.type === "text")
    prevNode.data += text;
  else
    insertBefore(parentNode, createTextNode(text), referenceNode);
};
htmlparser2.adoptAttributes = function(recipient, attrs) {
  for (var i2 = 0; i2 < attrs.length; i2++) {
    var attrName = attrs[i2].name;
    if (typeof recipient.attribs[attrName] === "undefined") {
      recipient.attribs[attrName] = attrs[i2].value;
      recipient["x-attribsNamespace"][attrName] = attrs[i2].namespace;
      recipient["x-attribsPrefix"][attrName] = attrs[i2].prefix;
    }
  }
};
htmlparser2.getFirstChild = function(node2) {
  return node2.children[0];
};
htmlparser2.getChildNodes = function(node2) {
  return node2.children;
};
htmlparser2.getParentNode = function(node2) {
  return node2.parent;
};
htmlparser2.getAttrList = function(element2) {
  var attrList = [];
  for (var name2 in element2.attribs) {
    attrList.push({
      name: name2,
      value: element2.attribs[name2],
      namespace: element2["x-attribsNamespace"][name2],
      prefix: element2["x-attribsPrefix"][name2]
    });
  }
  return attrList;
};
htmlparser2.getTagName = function(element2) {
  return element2.name;
};
htmlparser2.getNamespaceURI = function(element2) {
  return element2.namespace;
};
htmlparser2.getTextNodeContent = function(textNode) {
  return textNode.data;
};
htmlparser2.getCommentNodeContent = function(commentNode) {
  return commentNode.data;
};
htmlparser2.getDocumentTypeNodeName = function(doctypeNode) {
  return doctypeNode["x-name"];
};
htmlparser2.getDocumentTypeNodePublicId = function(doctypeNode) {
  return doctypeNode["x-publicId"];
};
htmlparser2.getDocumentTypeNodeSystemId = function(doctypeNode) {
  return doctypeNode["x-systemId"];
};
htmlparser2.isTextNode = function(node2) {
  return node2.type === "text";
};
htmlparser2.isCommentNode = function(node2) {
  return node2.type === "comment";
};
htmlparser2.isDocumentTypeNode = function(node2) {
  return node2.type === "directive" && node2.name === "!doctype";
};
htmlparser2.isElementNode = function(node2) {
  return !!node2.attribs;
};
var parser_streamExports = {};
var parser_stream = {
  get exports() {
    return parser_streamExports;
  },
  set exports(v) {
    parser_streamExports = v;
  }
};
var WritableStream$1 = require$$0$2.Writable, inherits$3 = require$$1$3.inherits, Parser$1 = parserExports;
var ParserStream$1 = parser_stream.exports = function(options2) {
  WritableStream$1.call(this);
  this.parser = new Parser$1(options2);
  this.lastChunkWritten = false;
  this.writeCallback = null;
  this.pausedByScript = false;
  this.document = this.parser.treeAdapter.createDocument();
  this.pendingHtmlInsertions = [];
  this._resume = this._resume.bind(this);
  this._documentWrite = this._documentWrite.bind(this);
  this._scriptHandler = this._scriptHandler.bind(this);
  this.parser._bootstrap(this.document, null);
};
inherits$3(ParserStream$1, WritableStream$1);
ParserStream$1.prototype._write = function(chunk, encoding, callback) {
  this.writeCallback = callback;
  this.parser.tokenizer.write(chunk.toString("utf8"), this.lastChunkWritten);
  this._runParsingLoop();
};
ParserStream$1.prototype.end = function(chunk, encoding, callback) {
  this.lastChunkWritten = true;
  WritableStream$1.prototype.end.call(this, chunk || "", encoding, callback);
};
ParserStream$1.prototype._runParsingLoop = function() {
  this.parser.runParsingLoopForCurrentChunk(this.writeCallback, this._scriptHandler);
};
ParserStream$1.prototype._resume = function() {
  if (!this.pausedByScript)
    throw new Error("Parser was already resumed");
  while (this.pendingHtmlInsertions.length) {
    var html2 = this.pendingHtmlInsertions.pop();
    this.parser.tokenizer.insertHtmlAtCurrentPos(html2);
  }
  this.pausedByScript = false;
  if (this.parser.tokenizer.active)
    this._runParsingLoop();
};
ParserStream$1.prototype._documentWrite = function(html2) {
  if (!this.parser.stopped)
    this.pendingHtmlInsertions.push(html2);
};
ParserStream$1.prototype._scriptHandler = function(scriptElement) {
  if (this.listeners("script").length) {
    this.pausedByScript = true;
    this.emit("script", scriptElement, this._documentWrite, this._resume);
  } else
    this._runParsingLoop();
};
var plain_text_conversion_streamExports = {};
var plain_text_conversion_stream = {
  get exports() {
    return plain_text_conversion_streamExports;
  },
  set exports(v) {
    plain_text_conversion_streamExports = v;
  }
};
var ParserStream = parser_streamExports, inherits$2 = require$$1$3.inherits, $$1 = html.TAG_NAMES;
var PlainTextConversionStream = plain_text_conversion_stream.exports = function(options2) {
  ParserStream.call(this, options2);
  this.parser._insertFakeElement($$1.HTML);
  this.parser._insertFakeElement($$1.HEAD);
  this.parser.openElements.pop();
  this.parser._insertFakeElement($$1.BODY);
  this.parser._insertFakeElement($$1.PRE);
  this.parser.treeAdapter.insertText(this.parser.openElements.current, "\n");
  this.parser.switchToPlaintextParsing();
};
inherits$2(PlainTextConversionStream, ParserStream);
var serializer_streamExports = {};
var serializer_stream = {
  get exports() {
    return serializer_streamExports;
  },
  set exports(v) {
    serializer_streamExports = v;
  }
};
var ReadableStream = require$$0$2.Readable, inherits$1 = require$$1$3.inherits, Serializer$1 = serializerExports;
var SerializerStream = serializer_stream.exports = function(node2, options2) {
  ReadableStream.call(this);
  this.serializer = new Serializer$1(node2, options2);
  Object.defineProperty(this.serializer, "html", {
    //NOTE: To make `+=` concat operator work properly we define
    //getter which always returns empty string
    get: function() {
      return "";
    },
    set: this.push.bind(this)
  });
};
inherits$1(SerializerStream, ReadableStream);
SerializerStream.prototype._read = function() {
  this.serializer.serialize();
  this.push(null);
};
var saxExports = {};
var sax = {
  get exports() {
    return saxExports;
  },
  set exports(v) {
    saxExports = v;
  }
};
var dev_null_streamExports = {};
var dev_null_stream = {
  get exports() {
    return dev_null_streamExports;
  },
  set exports(v) {
    dev_null_streamExports = v;
  }
};
var WritableStream = require$$0$2.Writable, util = require$$1$3;
var DevNullStream$1 = dev_null_stream.exports = function() {
  WritableStream.call(this);
};
util.inherits(DevNullStream$1, WritableStream);
DevNullStream$1.prototype._write = function(chunk, encoding, cb) {
  cb();
};
var parser_feedback_simulatorExports = {};
var parser_feedback_simulator = {
  get exports() {
    return parser_feedback_simulatorExports;
  },
  set exports(v) {
    parser_feedback_simulatorExports = v;
  }
};
var Tokenizer$1 = tokenizerExports, foreignContent = foreign_content, UNICODE = unicode, HTML = html;
var $ = HTML.TAG_NAMES, NS = HTML.NAMESPACES;
var ParserFeedbackSimulator$1 = parser_feedback_simulator.exports = function(tokenizer2) {
  this.tokenizer = tokenizer2;
  this.namespaceStack = [];
  this.namespaceStackTop = -1;
  this._enterNamespace(NS.HTML);
};
ParserFeedbackSimulator$1.prototype.getNextToken = function() {
  var token = this.tokenizer.getNextToken();
  if (token.type === Tokenizer$1.START_TAG_TOKEN)
    this._handleStartTagToken(token);
  else if (token.type === Tokenizer$1.END_TAG_TOKEN)
    this._handleEndTagToken(token);
  else if (token.type === Tokenizer$1.NULL_CHARACTER_TOKEN && this.inForeignContent) {
    token.type = Tokenizer$1.CHARACTER_TOKEN;
    token.chars = UNICODE.REPLACEMENT_CHARACTER;
  } else if (this.skipNextNewLine) {
    if (token.type !== Tokenizer$1.HIBERNATION_TOKEN)
      this.skipNextNewLine = false;
    if (token.type === Tokenizer$1.WHITESPACE_CHARACTER_TOKEN && token.chars[0] === "\n") {
      if (token.chars.length === 1)
        return this.getNextToken();
      token.chars = token.chars.substr(1);
    }
  }
  return token;
};
ParserFeedbackSimulator$1.prototype._enterNamespace = function(namespace) {
  this.namespaceStackTop++;
  this.namespaceStack.push(namespace);
  this.inForeignContent = namespace !== NS.HTML;
  this.currentNamespace = namespace;
  this.tokenizer.allowCDATA = this.inForeignContent;
};
ParserFeedbackSimulator$1.prototype._leaveCurrentNamespace = function() {
  this.namespaceStackTop--;
  this.namespaceStack.pop();
  this.currentNamespace = this.namespaceStack[this.namespaceStackTop];
  this.inForeignContent = this.currentNamespace !== NS.HTML;
  this.tokenizer.allowCDATA = this.inForeignContent;
};
ParserFeedbackSimulator$1.prototype._ensureTokenizerMode = function(tn) {
  if (tn === $.TEXTAREA || tn === $.TITLE)
    this.tokenizer.state = Tokenizer$1.MODE.RCDATA;
  else if (tn === $.PLAINTEXT)
    this.tokenizer.state = Tokenizer$1.MODE.PLAINTEXT;
  else if (tn === $.SCRIPT)
    this.tokenizer.state = Tokenizer$1.MODE.SCRIPT_DATA;
  else if (tn === $.STYLE || tn === $.IFRAME || tn === $.XMP || tn === $.NOEMBED || tn === $.NOFRAMES || tn === $.NOSCRIPT)
    this.tokenizer.state = Tokenizer$1.MODE.RAWTEXT;
};
ParserFeedbackSimulator$1.prototype._handleStartTagToken = function(token) {
  var tn = token.tagName;
  if (tn === $.SVG)
    this._enterNamespace(NS.SVG);
  else if (tn === $.MATH)
    this._enterNamespace(NS.MATHML);
  if (this.inForeignContent) {
    if (foreignContent.causesExit(token)) {
      this._leaveCurrentNamespace();
      return;
    }
    var currentNs = this.currentNamespace;
    if (currentNs === NS.MATHML)
      foreignContent.adjustTokenMathMLAttrs(token);
    else if (currentNs === NS.SVG) {
      foreignContent.adjustTokenSVGTagName(token);
      foreignContent.adjustTokenSVGAttrs(token);
    }
    foreignContent.adjustTokenXMLAttrs(token);
    tn = token.tagName;
    if (!token.selfClosing && foreignContent.isIntegrationPoint(tn, currentNs, token.attrs))
      this._enterNamespace(NS.HTML);
  } else {
    if (tn === $.PRE || tn === $.TEXTAREA || tn === $.LISTING)
      this.skipNextNewLine = true;
    else if (tn === $.IMAGE)
      token.tagName = $.IMG;
    this._ensureTokenizerMode(tn);
  }
};
ParserFeedbackSimulator$1.prototype._handleEndTagToken = function(token) {
  var tn = token.tagName;
  if (!this.inForeignContent) {
    var previousNs = this.namespaceStack[this.namespaceStackTop - 1];
    if (previousNs === NS.SVG && foreignContent.SVG_TAG_NAMES_ADJUSTMENT_MAP[tn])
      tn = foreignContent.SVG_TAG_NAMES_ADJUSTMENT_MAP[tn];
    if (foreignContent.isIntegrationPoint(tn, previousNs, token.attrs))
      this._leaveCurrentNamespace();
  } else if (tn === $.SVG && this.currentNamespace === NS.SVG || tn === $.MATH && this.currentNamespace === NS.MATHML)
    this._leaveCurrentNamespace();
  if (this.currentNamespace === NS.SVG)
    foreignContent.adjustTokenSVGTagName(token);
};
var TransformStream = require$$0$2.Transform, DevNullStream = dev_null_streamExports, inherits = require$$1$3.inherits, Tokenizer = tokenizerExports, LocationInfoTokenizerMixin = tokenizer_mixinExports, ParserFeedbackSimulator = parser_feedback_simulatorExports, mergeOptions2 = merge_options;
var DEFAULT_OPTIONS = {
  locationInfo: false
};
var SAXParser = sax.exports = function(options2) {
  TransformStream.call(this);
  this.options = mergeOptions2(DEFAULT_OPTIONS, options2);
  this.tokenizer = new Tokenizer(options2);
  if (this.options.locationInfo)
    new LocationInfoTokenizerMixin(this.tokenizer);
  this.parserFeedbackSimulator = new ParserFeedbackSimulator(this.tokenizer);
  this.pendingText = null;
  this.currentTokenLocation = void 0;
  this.lastChunkWritten = false;
  this.stopped = false;
  this.pipe(new DevNullStream());
};
inherits(SAXParser, TransformStream);
SAXParser.prototype._transform = function(chunk, encoding, callback) {
  if (!this.stopped) {
    this.tokenizer.write(chunk.toString("utf8"), this.lastChunkWritten);
    this._runParsingLoop();
  }
  this.push(chunk);
  callback();
};
SAXParser.prototype._flush = function(callback) {
  callback();
};
SAXParser.prototype.end = function(chunk, encoding, callback) {
  this.lastChunkWritten = true;
  TransformStream.prototype.end.call(this, chunk, encoding, callback);
};
SAXParser.prototype.stop = function() {
  this.stopped = true;
};
SAXParser.prototype._runParsingLoop = function() {
  do {
    var token = this.parserFeedbackSimulator.getNextToken();
    if (token.type === Tokenizer.HIBERNATION_TOKEN)
      break;
    if (token.type === Tokenizer.CHARACTER_TOKEN || token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN || token.type === Tokenizer.NULL_CHARACTER_TOKEN) {
      if (this.options.locationInfo) {
        if (this.pendingText === null)
          this.currentTokenLocation = token.location;
        else
          this.currentTokenLocation.endOffset = token.location.endOffset;
      }
      this.pendingText = (this.pendingText || "") + token.chars;
    } else {
      this._emitPendingText();
      this._handleToken(token);
    }
  } while (!this.stopped && token.type !== Tokenizer.EOF_TOKEN);
};
SAXParser.prototype._handleToken = function(token) {
  if (this.options.locationInfo)
    this.currentTokenLocation = token.location;
  if (token.type === Tokenizer.START_TAG_TOKEN)
    this.emit("startTag", token.tagName, token.attrs, token.selfClosing, this.currentTokenLocation);
  else if (token.type === Tokenizer.END_TAG_TOKEN)
    this.emit("endTag", token.tagName, this.currentTokenLocation);
  else if (token.type === Tokenizer.COMMENT_TOKEN)
    this.emit("comment", token.data, this.currentTokenLocation);
  else if (token.type === Tokenizer.DOCTYPE_TOKEN)
    this.emit("doctype", token.name, token.publicId, token.systemId, this.currentTokenLocation);
};
SAXParser.prototype._emitPendingText = function() {
  if (this.pendingText !== null) {
    this.emit("text", this.pendingText, this.currentTokenLocation);
    this.pendingText = null;
  }
};
var Parser = parserExports, Serializer = serializerExports;
lib.parse = function parse(html2, options2) {
  var parser2 = new Parser(options2);
  return parser2.parse(html2);
};
lib.parseFragment = function parseFragment(fragmentContext, html2, options2) {
  if (typeof fragmentContext === "string") {
    options2 = html2;
    html2 = fragmentContext;
    fragmentContext = null;
  }
  var parser2 = new Parser(options2);
  return parser2.parseFragment(html2, fragmentContext);
};
lib.serialize = function(node2, options2) {
  var serializer2 = new Serializer(node2, options2);
  return serializer2.serialize();
};
lib.treeAdapters = {
  default: _default,
  htmlparser2
};
lib.ParserStream = parser_streamExports;
lib.PlainTextConversionStream = plain_text_conversion_streamExports;
lib.SerializerStream = serializer_streamExports;
lib.SAXParser = saxExports;
(function(module, exports) {
  var htmlparser = requireLib(), parse5 = lib;
  exports = module.exports = function(content, options2, isDocument) {
    var dom = exports.evaluate(content, options2, isDocument), root2 = exports.evaluate("<root></root>", options2, false)[0];
    root2.type = "root";
    root2.parent = null;
    exports.update(dom, root2);
    return root2;
  };
  function parseWithParse5(content, isDocument) {
    var parse3 = isDocument ? parse5.parse : parse5.parseFragment, root2 = parse3(content, { treeAdapter: parse5.treeAdapters.htmlparser2 });
    return root2.children;
  }
  exports.evaluate = function(content, options2, isDocument) {
    var dom;
    if (Buffer.isBuffer(content))
      content = content.toString();
    if (typeof content === "string") {
      var useHtmlParser2 = options2.xmlMode || options2._useHtmlParser2;
      dom = useHtmlParser2 ? htmlparser.parseDOM(content, options2) : parseWithParse5(content, isDocument);
    } else {
      dom = content;
    }
    return dom;
  };
  exports.update = function(arr, parent2) {
    if (!Array.isArray(arr))
      arr = [arr];
    if (parent2) {
      parent2.children = arr;
    } else {
      parent2 = null;
    }
    for (var i2 = 0; i2 < arr.length; i2++) {
      var node2 = arr[i2];
      var oldParent = node2.parent || node2.root, oldSiblings = oldParent && oldParent.children;
      if (oldSiblings && oldSiblings !== arr) {
        oldSiblings.splice(oldSiblings.indexOf(node2), 1);
        if (node2.prev) {
          node2.prev.next = node2.next;
        }
        if (node2.next) {
          node2.next.prev = node2.prev;
        }
      }
      if (parent2) {
        node2.prev = arr[i2 - 1] || null;
        node2.next = arr[i2 + 1] || null;
      } else {
        node2.prev = node2.next = null;
      }
      if (parent2 && parent2.type === "root") {
        node2.root = parent2;
        node2.parent = null;
      } else {
        node2.root = null;
        node2.parent = parent2;
      }
    }
    return parent2;
  };
})(parse$6, parseExports);
var options = {};
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$c = freeGlobal || freeSelf || Function("return this")();
var _root = root$c;
var root$b = _root;
var Symbol$6 = root$b.Symbol;
var _Symbol = Symbol$6;
var Symbol$5 = _Symbol;
var objectProto$i = Object.prototype;
var hasOwnProperty$g = objectProto$i.hasOwnProperty;
var nativeObjectToString$1 = objectProto$i.toString;
var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$g.call(value, symToStringTag$1), tag2 = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag2;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$h = Object.prototype;
var nativeObjectToString = objectProto$h.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$4 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : void 0;
function baseGetTag$6(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$6;
function isObject$b(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$b;
var baseGetTag$5 = _baseGetTag, isObject$a = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$a(value)) {
    return false;
  }
  var tag2 = baseGetTag$5(value);
  return tag2 == funcTag$1 || tag2 == genTag || tag2 == asyncTag || tag2 == proxyTag;
}
var isFunction_1 = isFunction$3;
var root$a = _root;
var coreJsData$1 = root$a["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$2 = isFunction_1, isMasked = _isMasked, isObject$9 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$g = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$f = objectProto$g.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$f).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value) {
  if (!isObject$9(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative$6(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$3(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$3;
function eq$6(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$6;
var baseAssignValue$2 = _baseAssignValue, eq$5 = eq_1;
var objectProto$f = Object.prototype;
var hasOwnProperty$e = objectProto$f.hasOwnProperty;
function assignValue$3(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$e.call(object, key) && eq$5(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$2(object, key, value);
  }
}
var _assignValue = assignValue$3;
var assignValue$2 = _assignValue, baseAssignValue$1 = _baseAssignValue;
function copyObject$3(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue$1(object, key, newValue);
    } else {
      assignValue$2(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$3;
function identity$5(value) {
  return value;
}
var identity_1 = identity$5;
function apply$3(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$3;
var apply$2 = _apply;
var nativeMax$3 = Math.max;
function overRest$2(func, start, transform) {
  start = nativeMax$3(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax$3(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply$2(func, this, otherArgs);
  };
}
var _overRest = overRest$2;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$4 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$4 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$2(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$2;
var baseSetToString = _baseSetToString, shortOut$1 = _shortOut;
var setToString$3 = shortOut$1(baseSetToString);
var _setToString = setToString$3;
var identity$3 = identity_1, overRest$1 = _overRest, setToString$2 = _setToString;
function baseRest$3(func, start) {
  return setToString$2(overRest$1(func, start, identity$3), func + "");
}
var _baseRest = baseRest$3;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$3;
var isFunction$1 = isFunction_1, isLength$2 = isLength_1;
function isArrayLike$7(value) {
  return value != null && isLength$2(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$7;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$5(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$5;
var eq$4 = eq_1, isArrayLike$6 = isArrayLike_1, isIndex$4 = _isIndex, isObject$8 = isObject_1;
function isIterateeCall$3(value, index, object) {
  if (!isObject$8(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike$6(object) && isIndex$4(index, object.length) : type == "string" && index in object) {
    return eq$4(object[index], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$3;
var baseRest$2 = _baseRest, isIterateeCall$2 = _isIterateeCall;
function createAssigner$3(assigner) {
  return baseRest$2(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall$2(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner$3;
var objectProto$e = Object.prototype;
function isPrototype$4(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$e;
  return value === proto;
}
var _isPrototype = isPrototype$4;
function baseTimes$1(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;
function isObjectLike$8(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$8;
var baseGetTag$4 = _baseGetTag, isObjectLike$7 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$7(value) && baseGetTag$4(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$6 = isObjectLike_1;
var objectProto$d = Object.prototype;
var hasOwnProperty$d = objectProto$d.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$d.propertyIsEnumerable;
var isArguments$4 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$6(value) && hasOwnProperty$d.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$4;
var isArray$h = Array.isArray;
var isArray_1 = isArray$h;
var isBufferExports = {};
var isBuffer$3 = {
  get exports() {
    return isBufferExports;
  },
  set exports(v) {
    isBufferExports = v;
  }
};
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$3, isBufferExports);
var baseGetTag$3 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$5 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$5(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$3(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtilExports = {};
var _nodeUtil = {
  get exports() {
    return _nodeUtilExports;
  },
  set exports(v) {
    _nodeUtilExports = v;
  }
};
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtilExports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$3 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$3;
var baseTimes = _baseTimes, isArguments$3 = isArguments_1, isArray$g = isArray_1, isBuffer$2 = isBufferExports, isIndex$3 = _isIndex, isTypedArray$2 = isTypedArray_1;
var objectProto$c = Object.prototype;
var hasOwnProperty$c = objectProto$c.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$g(value), isArg = !isArr && isArguments$3(value), isBuff = !isArr && !isArg && isBuffer$2(value), isType = !isArr && !isArg && !isBuff && isTypedArray$2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$c.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex$3(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$3 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$b = Object.prototype;
var hasOwnProperty$b = objectProto$b.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype$3(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$b.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$5 = isArrayLike_1;
function keys$4(object) {
  return isArrayLike$5(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}
var keys_1 = keys$4;
var assignValue$1 = _assignValue, copyObject$2 = _copyObject, createAssigner$2 = _createAssigner, isArrayLike$4 = isArrayLike_1, isPrototype$2 = _isPrototype, keys$3 = keys_1;
var objectProto$a = Object.prototype;
var hasOwnProperty$a = objectProto$a.hasOwnProperty;
var assign$2 = createAssigner$2(function(object, source) {
  if (isPrototype$2(source) || isArrayLike$4(source)) {
    copyObject$2(source, keys$3(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty$a.call(source, key)) {
      assignValue$1(object, key, source[key]);
    }
  }
});
var assign_1 = assign$2;
var assign$1 = assign_1;
options.default = {
  withDomLvl1: true,
  normalizeWhitespace: false,
  xml: false,
  decodeEntities: true
};
options.flatten = function(options2) {
  return options2 && options2.xml ? assign$1({ xmlMode: true }, options2.xml) : options2;
};
var utils = {};
var parse$5 = parseExports, render = domSerializerExports, assign = assign_1;
var tags = { tag: true, script: true, style: true };
utils.isTag = function(type) {
  if (type.type)
    type = type.type;
  return tags[type] || false;
};
utils.camelCase = function(str) {
  return str.replace(/[_.-](\w|$)/g, function(_2, x) {
    return x.toUpperCase();
  });
};
utils.cssCase = function(str) {
  return str.replace(/[A-Z]/g, "-$&").toLowerCase();
};
utils.domEach = function(cheerio2, fn) {
  var i2 = 0, len = cheerio2.length;
  while (i2 < len && fn.call(cheerio2, i2, cheerio2[i2]) !== false)
    ++i2;
  return cheerio2;
};
utils.cloneDom = function(dom, options2) {
  options2 = assign({}, options2, { _useHtmlParser2: true });
  return parse$5(render(dom, options2), options2, false).children;
};
var quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/;
utils.isHtml = function(str) {
  if (str.charAt(0) === "<" && str.charAt(str.length - 1) === ">" && str.length >= 3)
    return true;
  var match = quickExpr.exec(str);
  return !!(match && match[1]);
};
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$7 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$9 = Object.prototype;
var hasOwnProperty$9 = objectProto$9.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$7(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$9.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$3 = isArrayLike_1;
function keysIn$4(object) {
  return isArrayLike$3(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$4;
var copyObject$1 = _copyObject, createAssigner$1 = _createAssigner, keysIn$3 = keysIn_1;
var assignIn = createAssigner$1(function(object, source) {
  copyObject$1(source, keysIn$3(source), object);
});
var assignIn_1 = assignIn;
var getNative$5 = _getNative, root$9 = _root;
var WeakMap$2 = getNative$5(root$9, "WeakMap");
var _WeakMap = WeakMap$2;
var WeakMap$1 = _WeakMap;
var metaMap$2 = WeakMap$1 && new WeakMap$1();
var _metaMap = metaMap$2;
var identity$2 = identity_1, metaMap$1 = _metaMap;
var baseSetData$2 = !metaMap$1 ? identity$2 : function(func, data) {
  metaMap$1.set(func, data);
  return func;
};
var _baseSetData = baseSetData$2;
var isObject$6 = isObject_1;
var objectCreate = Object.create;
var baseCreate$4 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$6(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$4;
var baseCreate$3 = _baseCreate, isObject$5 = isObject_1;
function createCtor$4(Ctor) {
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0:
        return new Ctor();
      case 1:
        return new Ctor(args[0]);
      case 2:
        return new Ctor(args[0], args[1]);
      case 3:
        return new Ctor(args[0], args[1], args[2]);
      case 4:
        return new Ctor(args[0], args[1], args[2], args[3]);
      case 5:
        return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate$3(Ctor.prototype), result = Ctor.apply(thisBinding, args);
    return isObject$5(result) ? result : thisBinding;
  };
}
var _createCtor = createCtor$4;
var createCtor$3 = _createCtor, root$8 = _root;
var WRAP_BIND_FLAG$7 = 1;
function createBind$1(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG$7, Ctor = createCtor$3(func);
  function wrapper() {
    var fn = this && this !== root$8 && this instanceof wrapper ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}
var _createBind = createBind$1;
var nativeMax$2 = Math.max;
function composeArgs$2(args, partials, holders, isCurried) {
  var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax$2(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}
var _composeArgs = composeArgs$2;
var nativeMax$1 = Math.max;
function composeArgsRight$2(args, partials, holders, isCurried) {
  var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax$1(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}
var _composeArgsRight = composeArgsRight$2;
function countHolders$1(array, placeholder) {
  var length = array.length, result = 0;
  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}
var _countHolders = countHolders$1;
function baseLodash$3() {
}
var _baseLodash = baseLodash$3;
var baseCreate$2 = _baseCreate, baseLodash$2 = _baseLodash;
var MAX_ARRAY_LENGTH = 4294967295;
function LazyWrapper$3(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}
LazyWrapper$3.prototype = baseCreate$2(baseLodash$2.prototype);
LazyWrapper$3.prototype.constructor = LazyWrapper$3;
var _LazyWrapper = LazyWrapper$3;
function noop$1() {
}
var noop_1 = noop$1;
var metaMap = _metaMap, noop = noop_1;
var getData$2 = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};
var _getData = getData$2;
var realNames$1 = {};
var _realNames = realNames$1;
var realNames = _realNames;
var objectProto$8 = Object.prototype;
var hasOwnProperty$8 = objectProto$8.hasOwnProperty;
function getFuncName$1(func) {
  var result = func.name + "", array = realNames[result], length = hasOwnProperty$8.call(realNames, result) ? array.length : 0;
  while (length--) {
    var data = array[length], otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}
var _getFuncName = getFuncName$1;
var baseCreate$1 = _baseCreate, baseLodash$1 = _baseLodash;
function LodashWrapper$2(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = void 0;
}
LodashWrapper$2.prototype = baseCreate$1(baseLodash$1.prototype);
LodashWrapper$2.prototype.constructor = LodashWrapper$2;
var _LodashWrapper = LodashWrapper$2;
function copyArray$3(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray$3;
var LazyWrapper$2 = _LazyWrapper, LodashWrapper$1 = _LodashWrapper, copyArray$2 = _copyArray;
function wrapperClone$1(wrapper) {
  if (wrapper instanceof LazyWrapper$2) {
    return wrapper.clone();
  }
  var result = new LodashWrapper$1(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray$2(wrapper.__actions__);
  result.__index__ = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}
var _wrapperClone = wrapperClone$1;
var LazyWrapper$1 = _LazyWrapper, LodashWrapper = _LodashWrapper, baseLodash = _baseLodash, isArray$f = isArray_1, isObjectLike$4 = isObjectLike_1, wrapperClone = _wrapperClone;
var objectProto$7 = Object.prototype;
var hasOwnProperty$7 = objectProto$7.hasOwnProperty;
function lodash$1(value) {
  if (isObjectLike$4(value) && !isArray$f(value) && !(value instanceof LazyWrapper$1)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty$7.call(value, "__wrapped__")) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}
lodash$1.prototype = baseLodash.prototype;
lodash$1.prototype.constructor = lodash$1;
var wrapperLodash = lodash$1;
var LazyWrapper = _LazyWrapper, getData$1 = _getData, getFuncName = _getFuncName, lodash = wrapperLodash;
function isLaziable$1(func) {
  var funcName = getFuncName(func), other = lodash[funcName];
  if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData$1(other);
  return !!data && func === data[0];
}
var _isLaziable = isLaziable$1;
var baseSetData$1 = _baseSetData, shortOut = _shortOut;
var setData$2 = shortOut(baseSetData$1);
var _setData = setData$2;
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
function getWrapDetails$1(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}
var _getWrapDetails = getWrapDetails$1;
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function insertWrapDetails$1(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
  details = details.join(length > 2 ? ", " : " ");
  return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
}
var _insertWrapDetails = insertWrapDetails$1;
function arrayEach$2(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$2;
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
function baseIsNaN$1(value) {
  return value !== value;
}
var _baseIsNaN = baseIsNaN$1;
function strictIndexOf$1(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
var _strictIndexOf = strictIndexOf$1;
var baseFindIndex = _baseFindIndex, baseIsNaN = _baseIsNaN, strictIndexOf = _strictIndexOf;
function baseIndexOf$1(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
var _baseIndexOf = baseIndexOf$1;
var baseIndexOf = _baseIndexOf;
function arrayIncludes$1(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
var _arrayIncludes = arrayIncludes$1;
var arrayEach$1 = _arrayEach, arrayIncludes = _arrayIncludes;
var WRAP_BIND_FLAG$6 = 1, WRAP_BIND_KEY_FLAG$4 = 2, WRAP_CURRY_FLAG$4 = 8, WRAP_CURRY_RIGHT_FLAG$2 = 16, WRAP_PARTIAL_FLAG$3 = 32, WRAP_PARTIAL_RIGHT_FLAG$2 = 64, WRAP_ARY_FLAG$2 = 128, WRAP_REARG_FLAG$1 = 256, WRAP_FLIP_FLAG$1 = 512;
var wrapFlags = [
  ["ary", WRAP_ARY_FLAG$2],
  ["bind", WRAP_BIND_FLAG$6],
  ["bindKey", WRAP_BIND_KEY_FLAG$4],
  ["curry", WRAP_CURRY_FLAG$4],
  ["curryRight", WRAP_CURRY_RIGHT_FLAG$2],
  ["flip", WRAP_FLIP_FLAG$1],
  ["partial", WRAP_PARTIAL_FLAG$3],
  ["partialRight", WRAP_PARTIAL_RIGHT_FLAG$2],
  ["rearg", WRAP_REARG_FLAG$1]
];
function updateWrapDetails$1(details, bitmask) {
  arrayEach$1(wrapFlags, function(pair) {
    var value = "_." + pair[0];
    if (bitmask & pair[1] && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}
var _updateWrapDetails = updateWrapDetails$1;
var getWrapDetails = _getWrapDetails, insertWrapDetails = _insertWrapDetails, setToString$1 = _setToString, updateWrapDetails = _updateWrapDetails;
function setWrapToString$2(wrapper, reference, bitmask) {
  var source = reference + "";
  return setToString$1(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}
var _setWrapToString = setWrapToString$2;
var isLaziable = _isLaziable, setData$1 = _setData, setWrapToString$1 = _setWrapToString;
var WRAP_BIND_FLAG$5 = 1, WRAP_BIND_KEY_FLAG$3 = 2, WRAP_CURRY_BOUND_FLAG$1 = 4, WRAP_CURRY_FLAG$3 = 8, WRAP_PARTIAL_FLAG$2 = 32, WRAP_PARTIAL_RIGHT_FLAG$1 = 64;
function createRecurry$2(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG$3, newHolders = isCurry ? holders : void 0, newHoldersRight = isCurry ? void 0 : holders, newPartials = isCurry ? partials : void 0, newPartialsRight = isCurry ? void 0 : partials;
  bitmask |= isCurry ? WRAP_PARTIAL_FLAG$2 : WRAP_PARTIAL_RIGHT_FLAG$1;
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG$1 : WRAP_PARTIAL_FLAG$2);
  if (!(bitmask & WRAP_CURRY_BOUND_FLAG$1)) {
    bitmask &= ~(WRAP_BIND_FLAG$5 | WRAP_BIND_KEY_FLAG$3);
  }
  var newData = [
    func,
    bitmask,
    thisArg,
    newPartials,
    newHolders,
    newPartialsRight,
    newHoldersRight,
    argPos,
    ary,
    arity
  ];
  var result = wrapFunc.apply(void 0, newData);
  if (isLaziable(func)) {
    setData$1(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString$1(result, func, bitmask);
}
var _createRecurry = createRecurry$2;
function getHolder$3(func) {
  var object = func;
  return object.placeholder;
}
var _getHolder = getHolder$3;
var copyArray$1 = _copyArray, isIndex$2 = _isIndex;
var nativeMin$1 = Math.min;
function reorder$1(array, indexes) {
  var arrLength = array.length, length = nativeMin$1(indexes.length, arrLength), oldArray = copyArray$1(array);
  while (length--) {
    var index = indexes[length];
    array[length] = isIndex$2(index, arrLength) ? oldArray[index] : void 0;
  }
  return array;
}
var _reorder = reorder$1;
var PLACEHOLDER$1 = "__lodash_placeholder__";
function replaceHolders$4(array, placeholder) {
  var index = -1, length = array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER$1) {
      array[index] = PLACEHOLDER$1;
      result[resIndex++] = index;
    }
  }
  return result;
}
var _replaceHolders = replaceHolders$4;
var composeArgs$1 = _composeArgs, composeArgsRight$1 = _composeArgsRight, countHolders = _countHolders, createCtor$2 = _createCtor, createRecurry$1 = _createRecurry, getHolder$2 = _getHolder, reorder = _reorder, replaceHolders$3 = _replaceHolders, root$7 = _root;
var WRAP_BIND_FLAG$4 = 1, WRAP_BIND_KEY_FLAG$2 = 2, WRAP_CURRY_FLAG$2 = 8, WRAP_CURRY_RIGHT_FLAG$1 = 16, WRAP_ARY_FLAG$1 = 128, WRAP_FLIP_FLAG = 512;
function createHybrid$2(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG$1, isBind = bitmask & WRAP_BIND_FLAG$4, isBindKey = bitmask & WRAP_BIND_KEY_FLAG$2, isCurried = bitmask & (WRAP_CURRY_FLAG$2 | WRAP_CURRY_RIGHT_FLAG$1), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? void 0 : createCtor$2(func);
  function wrapper() {
    var length = arguments.length, args = Array(length), index = length;
    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder$2(wrapper), holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs$1(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight$1(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders$3(args, placeholder);
      return createRecurry$1(
        func,
        bitmask,
        createHybrid$2,
        wrapper.placeholder,
        thisArg,
        args,
        newHolders,
        argPos,
        ary,
        arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root$7 && this instanceof wrapper) {
      fn = Ctor || createCtor$2(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}
var _createHybrid = createHybrid$2;
var apply$1 = _apply, createCtor$1 = _createCtor, createHybrid$1 = _createHybrid, createRecurry = _createRecurry, getHolder$1 = _getHolder, replaceHolders$2 = _replaceHolders, root$6 = _root;
function createCurry$1(func, bitmask, arity) {
  var Ctor = createCtor$1(func);
  function wrapper() {
    var length = arguments.length, args = Array(length), index = length, placeholder = getHolder$1(wrapper);
    while (index--) {
      args[index] = arguments[index];
    }
    var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders$2(args, placeholder);
    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func,
        bitmask,
        createHybrid$1,
        wrapper.placeholder,
        void 0,
        args,
        holders,
        void 0,
        void 0,
        arity - length
      );
    }
    var fn = this && this !== root$6 && this instanceof wrapper ? Ctor : func;
    return apply$1(fn, this, args);
  }
  return wrapper;
}
var _createCurry = createCurry$1;
var apply = _apply, createCtor = _createCtor, root$5 = _root;
var WRAP_BIND_FLAG$3 = 1;
function createPartial$1(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG$3, Ctor = createCtor(func);
  function wrapper() {
    var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root$5 && this instanceof wrapper ? Ctor : func;
    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}
var _createPartial = createPartial$1;
var composeArgs = _composeArgs, composeArgsRight = _composeArgsRight, replaceHolders$1 = _replaceHolders;
var PLACEHOLDER = "__lodash_placeholder__";
var WRAP_BIND_FLAG$2 = 1, WRAP_BIND_KEY_FLAG$1 = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG$1 = 8, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256;
var nativeMin = Math.min;
function mergeData$1(data, source) {
  var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG$2 | WRAP_BIND_KEY_FLAG$1 | WRAP_ARY_FLAG);
  var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG$1 || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG$1;
  if (!(isCommon || isCombo)) {
    return data;
  }
  if (srcBitmask & WRAP_BIND_FLAG$2) {
    data[2] = source[2];
    newBitmask |= bitmask & WRAP_BIND_FLAG$2 ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders$1(data[3], PLACEHOLDER) : source[4];
  }
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders$1(data[5], PLACEHOLDER) : source[6];
  }
  value = source[7];
  if (value) {
    data[7] = value;
  }
  if (srcBitmask & WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  if (data[9] == null) {
    data[9] = source[9];
  }
  data[0] = source[0];
  data[1] = newBitmask;
  return data;
}
var _mergeData = mergeData$1;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var _baseTrim = baseTrim$1;
var baseGetTag$2 = _baseGetTag, isObjectLike$3 = isObjectLike_1;
var symbolTag$1 = "[object Symbol]";
function isSymbol$4(value) {
  return typeof value == "symbol" || isObjectLike$3(value) && baseGetTag$2(value) == symbolTag$1;
}
var isSymbol_1 = isSymbol$4;
var baseTrim = _baseTrim, isObject$4 = isObject_1, isSymbol$3 = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$3(value)) {
    return NAN;
  }
  if (isObject$4(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$4(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var toNumber = toNumber_1;
var INFINITY$2 = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY$2 || value === -INFINITY$2) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_1 = toFinite$1;
var toFinite = toFinite_1;
function toInteger$1(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_1 = toInteger$1;
var baseSetData = _baseSetData, createBind = _createBind, createCurry = _createCurry, createHybrid = _createHybrid, createPartial = _createPartial, getData = _getData, mergeData = _mergeData, setData = _setData, setWrapToString = _setWrapToString, toInteger = toInteger_1;
var FUNC_ERROR_TEXT$2 = "Expected a function";
var WRAP_BIND_FLAG$1 = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG$1 = 32, WRAP_PARTIAL_RIGHT_FLAG = 64;
var nativeMax = Math.max;
function createWrap$1(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG$1 | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = void 0;
  }
  ary = ary === void 0 ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === void 0 ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;
  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials, holdersRight = holders;
    partials = holders = void 0;
  }
  var data = isBindKey ? void 0 : getData(func);
  var newData = [
    func,
    bitmask,
    thisArg,
    partials,
    holders,
    partialsRight,
    holdersRight,
    argPos,
    ary,
    arity
  ];
  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === void 0 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG$1) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG$1 || bitmask == (WRAP_BIND_FLAG$1 | WRAP_PARTIAL_FLAG$1)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(void 0, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}
var _createWrap = createWrap$1;
var baseRest$1 = _baseRest, createWrap = _createWrap, getHolder = _getHolder, replaceHolders = _replaceHolders;
var WRAP_BIND_FLAG = 1, WRAP_PARTIAL_FLAG = 32;
var bind = baseRest$1(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});
bind.placeholder = {};
var bind_1 = bind;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$2 = createBaseFor();
var _baseFor = baseFor$2;
var baseFor$1 = _baseFor, keys$2 = keys_1;
function baseForOwn$1(object, iteratee) {
  return object && baseFor$1(object, iteratee, keys$2);
}
var _baseForOwn = baseForOwn$1;
var isArrayLike$2 = isArrayLike_1;
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$2(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var _createBaseEach = createBaseEach$1;
var baseForOwn = _baseForOwn, createBaseEach = _createBaseEach;
var baseEach$5 = createBaseEach(baseForOwn);
var _baseEach = baseEach$5;
var identity$1 = identity_1;
function castFunction$1(value) {
  return typeof value == "function" ? value : identity$1;
}
var _castFunction = castFunction$1;
var arrayEach = _arrayEach, baseEach$4 = _baseEach, castFunction = _castFunction, isArray$e = isArray_1;
function forEach(collection, iteratee) {
  var func = isArray$e(collection) ? arrayEach : baseEach$4;
  return func(collection, castFunction(iteratee));
}
var forEach_1 = forEach;
var baseRest = _baseRest, eq$3 = eq_1, isIterateeCall$1 = _isIterateeCall, keysIn$2 = keysIn_1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
var defaults = baseRest(function(object, sources) {
  object = Object(object);
  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : void 0;
  if (guard && isIterateeCall$1(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index < length) {
    var source = sources[index];
    var props = keysIn$2(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];
      if (value === void 0 || eq$3(value, objectProto$6[key]) && !hasOwnProperty$6.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
var defaults_1 = defaults;
var attributes$2 = {};
var _static = {};
var nthCheckExports = {};
var nthCheck = {
  get exports() {
    return nthCheckExports;
  },
  set exports(v) {
    nthCheckExports = v;
  }
};
var parse_1 = parse$4;
var re_nthElement = /^([+\-]?\d*n)?\s*(?:([+\-]?)\s*(\d+))?$/;
function parse$4(formula) {
  formula = formula.trim().toLowerCase();
  if (formula === "even") {
    return [2, 0];
  } else if (formula === "odd") {
    return [2, 1];
  } else {
    var parsed = formula.match(re_nthElement);
    if (!parsed) {
      throw new SyntaxError("n-th rule couldn't be parsed ('" + formula + "')");
    }
    var a;
    if (parsed[1]) {
      a = parseInt(parsed[1], 10);
      if (isNaN(a)) {
        if (parsed[1].charAt(0) === "-")
          a = -1;
        else
          a = 1;
      }
    } else
      a = 0;
    return [
      a,
      parsed[3] ? parseInt((parsed[2] || "") + parsed[3], 10) : 0
    ];
  }
}
var boolbase = {
  trueFunc: function trueFunc() {
    return true;
  },
  falseFunc: function falseFunc() {
    return false;
  }
};
var compile_1 = compile$4;
var BaseFuncs$2 = boolbase, trueFunc$2 = BaseFuncs$2.trueFunc, falseFunc$4 = BaseFuncs$2.falseFunc;
function compile$4(parsed) {
  var a = parsed[0], b = parsed[1] - 1;
  if (b < 0 && a <= 0)
    return falseFunc$4;
  if (a === -1)
    return function(pos) {
      return pos <= b;
    };
  if (a === 0)
    return function(pos) {
      return pos === b;
    };
  if (a === 1)
    return b < 0 ? trueFunc$2 : function(pos) {
      return pos >= b;
    };
  var bMod = b % a;
  if (bMod < 0)
    bMod += a;
  if (a > 1) {
    return function(pos) {
      return pos >= b && pos % a === bMod;
    };
  }
  a *= -1;
  return function(pos) {
    return pos <= b && pos % a === bMod;
  };
}
var parse$3 = parse_1, compile$3 = compile_1;
nthCheck.exports = function nthCheck2(formula) {
  return compile$3(parse$3(formula));
};
nthCheckExports.parse = parse$3;
nthCheckExports.compile = compile$3;
var DomUtils$4 = domutilsExports, hasAttrib$1 = DomUtils$4.hasAttrib, getAttributeValue = DomUtils$4.getAttributeValue, falseFunc$3 = boolbase.falseFunc;
var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
var attributeRules = {
  __proto__: null,
  equals: function(next, data) {
    var name2 = data.name, value = data.value;
    if (data.ignoreCase) {
      value = value.toLowerCase();
      return function equalsIC(elem) {
        var attr = getAttributeValue(elem, name2);
        return attr != null && attr.toLowerCase() === value && next(elem);
      };
    }
    return function equals2(elem) {
      return getAttributeValue(elem, name2) === value && next(elem);
    };
  },
  hyphen: function(next, data) {
    var name2 = data.name, value = data.value, len = value.length;
    if (data.ignoreCase) {
      value = value.toLowerCase();
      return function hyphenIC(elem) {
        var attr = getAttributeValue(elem, name2);
        return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
      };
    }
    return function hyphen2(elem) {
      var attr = getAttributeValue(elem, name2);
      return attr != null && attr.substr(0, len) === value && (attr.length === len || attr.charAt(len) === "-") && next(elem);
    };
  },
  element: function(next, data) {
    var name2 = data.name, value = data.value;
    if (/\s/.test(value)) {
      return falseFunc$3;
    }
    value = value.replace(reChars, "\\$&");
    var pattern = "(?:^|\\s)" + value + "(?:$|\\s)", flags = data.ignoreCase ? "i" : "", regex = new RegExp(pattern, flags);
    return function element2(elem) {
      var attr = getAttributeValue(elem, name2);
      return attr != null && regex.test(attr) && next(elem);
    };
  },
  exists: function(next, data) {
    var name2 = data.name;
    return function exists(elem) {
      return hasAttrib$1(elem, name2) && next(elem);
    };
  },
  start: function(next, data) {
    var name2 = data.name, value = data.value, len = value.length;
    if (len === 0) {
      return falseFunc$3;
    }
    if (data.ignoreCase) {
      value = value.toLowerCase();
      return function startIC(elem) {
        var attr = getAttributeValue(elem, name2);
        return attr != null && attr.substr(0, len).toLowerCase() === value && next(elem);
      };
    }
    return function start(elem) {
      var attr = getAttributeValue(elem, name2);
      return attr != null && attr.substr(0, len) === value && next(elem);
    };
  },
  end: function(next, data) {
    var name2 = data.name, value = data.value, len = -value.length;
    if (len === 0) {
      return falseFunc$3;
    }
    if (data.ignoreCase) {
      value = value.toLowerCase();
      return function endIC(elem) {
        var attr = getAttributeValue(elem, name2);
        return attr != null && attr.substr(len).toLowerCase() === value && next(elem);
      };
    }
    return function end(elem) {
      var attr = getAttributeValue(elem, name2);
      return attr != null && attr.substr(len) === value && next(elem);
    };
  },
  any: function(next, data) {
    var name2 = data.name, value = data.value;
    if (value === "") {
      return falseFunc$3;
    }
    if (data.ignoreCase) {
      var regex = new RegExp(value.replace(reChars, "\\$&"), "i");
      return function anyIC(elem) {
        var attr = getAttributeValue(elem, name2);
        return attr != null && regex.test(attr) && next(elem);
      };
    }
    return function any(elem) {
      var attr = getAttributeValue(elem, name2);
      return attr != null && attr.indexOf(value) >= 0 && next(elem);
    };
  },
  not: function(next, data) {
    var name2 = data.name, value = data.value;
    if (value === "") {
      return function notEmpty(elem) {
        return !!getAttributeValue(elem, name2) && next(elem);
      };
    } else if (data.ignoreCase) {
      value = value.toLowerCase();
      return function notIC(elem) {
        var attr = getAttributeValue(elem, name2);
        return attr != null && attr.toLowerCase() !== value && next(elem);
      };
    }
    return function not2(elem) {
      return getAttributeValue(elem, name2) !== value && next(elem);
    };
  }
};
var attributes$1 = {
  compile: function(next, data, options2) {
    if (options2 && options2.strict && (data.ignoreCase || data.action === "not"))
      throw SyntaxError("Unsupported attribute selector");
    return attributeRules[data.action](next, data);
  },
  rules: attributeRules
};
var DomUtils$3 = domutilsExports, isTag$2 = DomUtils$3.isTag, getText = DomUtils$3.getText, getParent$2 = DomUtils$3.getParent, getChildren$3 = DomUtils$3.getChildren, getSiblings$1 = DomUtils$3.getSiblings, hasAttrib = DomUtils$3.hasAttrib, getName$1 = DomUtils$3.getName, getAttribute = DomUtils$3.getAttributeValue, getNCheck = nthCheckExports, checkAttrib = attributes$1.rules.equals, BaseFuncs$1 = boolbase, trueFunc$1 = BaseFuncs$1.trueFunc, falseFunc$2 = BaseFuncs$1.falseFunc;
function getFirstElement(elems) {
  for (var i2 = 0; elems && i2 < elems.length; i2++) {
    if (isTag$2(elems[i2]))
      return elems[i2];
  }
}
function getAttribFunc(name2, value) {
  var data = { name: name2, value };
  return function attribFunc(next) {
    return checkAttrib(next, data);
  };
}
function getChildFunc(next) {
  return function(elem) {
    return !!getParent$2(elem) && next(elem);
  };
}
var filters$1 = {
  contains: function(next, text) {
    return function contains(elem) {
      return next(elem) && getText(elem).indexOf(text) >= 0;
    };
  },
  icontains: function(next, text) {
    var itext = text.toLowerCase();
    return function icontains(elem) {
      return next(elem) && getText(elem).toLowerCase().indexOf(itext) >= 0;
    };
  },
  //location specific methods
  "nth-child": function(next, rule) {
    var func = getNCheck(rule);
    if (func === falseFunc$2)
      return func;
    if (func === trueFunc$1)
      return getChildFunc(next);
    return function nthChild(elem) {
      var siblings = getSiblings$1(elem);
      for (var i2 = 0, pos = 0; i2 < siblings.length; i2++) {
        if (isTag$2(siblings[i2])) {
          if (siblings[i2] === elem)
            break;
          else
            pos++;
        }
      }
      return func(pos) && next(elem);
    };
  },
  "nth-last-child": function(next, rule) {
    var func = getNCheck(rule);
    if (func === falseFunc$2)
      return func;
    if (func === trueFunc$1)
      return getChildFunc(next);
    return function nthLastChild(elem) {
      var siblings = getSiblings$1(elem);
      for (var pos = 0, i2 = siblings.length - 1; i2 >= 0; i2--) {
        if (isTag$2(siblings[i2])) {
          if (siblings[i2] === elem)
            break;
          else
            pos++;
        }
      }
      return func(pos) && next(elem);
    };
  },
  "nth-of-type": function(next, rule) {
    var func = getNCheck(rule);
    if (func === falseFunc$2)
      return func;
    if (func === trueFunc$1)
      return getChildFunc(next);
    return function nthOfType(elem) {
      var siblings = getSiblings$1(elem);
      for (var pos = 0, i2 = 0; i2 < siblings.length; i2++) {
        if (isTag$2(siblings[i2])) {
          if (siblings[i2] === elem)
            break;
          if (getName$1(siblings[i2]) === getName$1(elem))
            pos++;
        }
      }
      return func(pos) && next(elem);
    };
  },
  "nth-last-of-type": function(next, rule) {
    var func = getNCheck(rule);
    if (func === falseFunc$2)
      return func;
    if (func === trueFunc$1)
      return getChildFunc(next);
    return function nthLastOfType(elem) {
      var siblings = getSiblings$1(elem);
      for (var pos = 0, i2 = siblings.length - 1; i2 >= 0; i2--) {
        if (isTag$2(siblings[i2])) {
          if (siblings[i2] === elem)
            break;
          if (getName$1(siblings[i2]) === getName$1(elem))
            pos++;
        }
      }
      return func(pos) && next(elem);
    };
  },
  //TODO determine the actual root element
  root: function(next) {
    return function(elem) {
      return !getParent$2(elem) && next(elem);
    };
  },
  scope: function(next, rule, options2, context) {
    if (!context || context.length === 0) {
      return filters$1.root(next);
    }
    if (context.length === 1) {
      return function(elem) {
        return context[0] === elem && next(elem);
      };
    }
    return function(elem) {
      return context.indexOf(elem) >= 0 && next(elem);
    };
  },
  //jQuery extensions (others follow as pseudos)
  checkbox: getAttribFunc("type", "checkbox"),
  file: getAttribFunc("type", "file"),
  password: getAttribFunc("type", "password"),
  radio: getAttribFunc("type", "radio"),
  reset: getAttribFunc("type", "reset"),
  image: getAttribFunc("type", "image"),
  submit: getAttribFunc("type", "submit")
};
var pseudos = {
  empty: function(elem) {
    return !getChildren$3(elem).some(function(elem2) {
      return isTag$2(elem2) || elem2.type === "text";
    });
  },
  "first-child": function(elem) {
    return getFirstElement(getSiblings$1(elem)) === elem;
  },
  "last-child": function(elem) {
    var siblings = getSiblings$1(elem);
    for (var i2 = siblings.length - 1; i2 >= 0; i2--) {
      if (siblings[i2] === elem)
        return true;
      if (isTag$2(siblings[i2]))
        break;
    }
    return false;
  },
  "first-of-type": function(elem) {
    var siblings = getSiblings$1(elem);
    for (var i2 = 0; i2 < siblings.length; i2++) {
      if (isTag$2(siblings[i2])) {
        if (siblings[i2] === elem)
          return true;
        if (getName$1(siblings[i2]) === getName$1(elem))
          break;
      }
    }
    return false;
  },
  "last-of-type": function(elem) {
    var siblings = getSiblings$1(elem);
    for (var i2 = siblings.length - 1; i2 >= 0; i2--) {
      if (isTag$2(siblings[i2])) {
        if (siblings[i2] === elem)
          return true;
        if (getName$1(siblings[i2]) === getName$1(elem))
          break;
      }
    }
    return false;
  },
  "only-of-type": function(elem) {
    var siblings = getSiblings$1(elem);
    for (var i2 = 0, j2 = siblings.length; i2 < j2; i2++) {
      if (isTag$2(siblings[i2])) {
        if (siblings[i2] === elem)
          continue;
        if (getName$1(siblings[i2]) === getName$1(elem))
          return false;
      }
    }
    return true;
  },
  "only-child": function(elem) {
    var siblings = getSiblings$1(elem);
    for (var i2 = 0; i2 < siblings.length; i2++) {
      if (isTag$2(siblings[i2]) && siblings[i2] !== elem)
        return false;
    }
    return true;
  },
  //:matches(a, area, link)[href]
  link: function(elem) {
    return hasAttrib(elem, "href");
  },
  visited: falseFunc$2,
  //seems to be a valid implementation
  //TODO: :any-link once the name is finalized (as an alias of :link)
  //forms
  //to consider: :target
  //:matches([selected], select:not([multiple]):not(> option[selected]) > option:first-of-type)
  selected: function(elem) {
    if (hasAttrib(elem, "selected"))
      return true;
    else if (getName$1(elem) !== "option")
      return false;
    var parent2 = getParent$2(elem);
    if (!parent2 || getName$1(parent2) !== "select" || hasAttrib(parent2, "multiple"))
      return false;
    var siblings = getChildren$3(parent2), sawElem = false;
    for (var i2 = 0; i2 < siblings.length; i2++) {
      if (isTag$2(siblings[i2])) {
        if (siblings[i2] === elem) {
          sawElem = true;
        } else if (!sawElem) {
          return false;
        } else if (hasAttrib(siblings[i2], "selected")) {
          return false;
        }
      }
    }
    return sawElem;
  },
  //https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
  //:matches(
  //  :matches(button, input, select, textarea, menuitem, optgroup, option)[disabled],
  //  optgroup[disabled] > option),
  // fieldset[disabled] * //TODO not child of first <legend>
  //)
  disabled: function(elem) {
    return hasAttrib(elem, "disabled");
  },
  enabled: function(elem) {
    return !hasAttrib(elem, "disabled");
  },
  //:matches(:matches(:radio, :checkbox)[checked], :selected) (TODO menuitem)
  checked: function(elem) {
    return hasAttrib(elem, "checked") || pseudos.selected(elem);
  },
  //:matches(input, select, textarea)[required]
  required: function(elem) {
    return hasAttrib(elem, "required");
  },
  //:matches(input, select, textarea):not([required])
  optional: function(elem) {
    return !hasAttrib(elem, "required");
  },
  //jQuery extensions
  //:not(:empty)
  parent: function(elem) {
    return !pseudos.empty(elem);
  },
  //:matches(h1, h2, h3, h4, h5, h6)
  header: function(elem) {
    var name2 = getName$1(elem);
    return name2 === "h1" || name2 === "h2" || name2 === "h3" || name2 === "h4" || name2 === "h5" || name2 === "h6";
  },
  //:matches(button, input[type=button])
  button: function(elem) {
    var name2 = getName$1(elem);
    return name2 === "button" || name2 === "input" && getAttribute(elem, "type") === "button";
  },
  //:matches(input, textarea, select, button)
  input: function(elem) {
    var name2 = getName$1(elem);
    return name2 === "input" || name2 === "textarea" || name2 === "select" || name2 === "button";
  },
  //input:matches(:not([type!='']), [type='text' i])
  text: function(elem) {
    var attr;
    return getName$1(elem) === "input" && (!(attr = getAttribute(elem, "type")) || attr.toLowerCase() === "text");
  }
};
function verifyArgs(func, name2, subselect) {
  if (subselect === null) {
    if (func.length > 1 && name2 !== "scope") {
      throw new SyntaxError("pseudo-selector :" + name2 + " requires an argument");
    }
  } else {
    if (func.length === 1) {
      throw new SyntaxError("pseudo-selector :" + name2 + " doesn't have any arguments");
    }
  }
}
var re_CSS3 = /^(?:(?:nth|last|first|only)-(?:child|of-type)|root|empty|(?:en|dis)abled|checked|not)$/;
var pseudos_1 = {
  compile: function(next, data, options2, context) {
    var name2 = data.name, subselect = data.data;
    if (options2 && options2.strict && !re_CSS3.test(name2)) {
      throw SyntaxError(":" + name2 + " isn't part of CSS3");
    }
    if (typeof filters$1[name2] === "function") {
      verifyArgs(filters$1[name2], name2, subselect);
      return filters$1[name2](next, subselect, options2, context);
    } else if (typeof pseudos[name2] === "function") {
      var func = pseudos[name2];
      verifyArgs(func, name2, subselect);
      if (next === trueFunc$1)
        return func;
      return function pseudoArgs(elem) {
        return func(elem, subselect) && next(elem);
      };
    } else {
      throw new SyntaxError("unmatched pseudo-class :" + name2);
    }
  },
  filters: filters$1,
  pseudos
};
var compileExports = {};
var compile$2 = {
  get exports() {
    return compileExports;
  },
  set exports(v) {
    compileExports = v;
  }
};
var cssWhat = parse$2;
var re_name = /^(?:\\.|[\w\-\u00b0-\uFFFF])+/, re_escape = /\\([\da-f]{1,6}\s?|(\s)|.)/ig, re_attr = /^\s*((?:\\.|[\w\u00b0-\uFFFF\-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00b0-\uFFFF\-])*)|)|)\s*(i)?\]/;
var actionTypes = {
  __proto__: null,
  "undefined": "exists",
  "": "equals",
  "~": "element",
  "^": "start",
  "$": "end",
  "*": "any",
  "!": "not",
  "|": "hyphen"
};
var simpleSelectors = {
  __proto__: null,
  ">": "child",
  "<": "parent",
  "~": "sibling",
  "+": "adjacent"
};
var attribSelectors = {
  __proto__: null,
  "#": ["id", "equals"],
  ".": ["class", "element"]
};
var unpackPseudos = {
  __proto__: null,
  "has": true,
  "not": true,
  "matches": true
};
var stripQuotesFromPseudos = {
  __proto__: null,
  "contains": true,
  "icontains": true
};
var quotes = {
  __proto__: null,
  '"': true,
  "'": true
};
function funescape(_2, escaped, escapedWhitespace) {
  var high = "0x" + escaped - 65536;
  return high !== high || escapedWhitespace ? escaped : (
    // BMP codepoint
    high < 0 ? String.fromCharCode(high + 65536) : (
      // Supplemental Plane codepoint (surrogate pair)
      String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
    )
  );
}
function unescapeCSS(str) {
  return str.replace(re_escape, funescape);
}
function isWhitespace(c) {
  return c === " " || c === "\n" || c === "	" || c === "\f" || c === "\r";
}
function parse$2(selector, options2) {
  var subselects = [];
  selector = parseSelector(subselects, selector + "", options2);
  if (selector !== "") {
    throw new SyntaxError("Unmatched selector: " + selector);
  }
  return subselects;
}
function parseSelector(subselects, selector, options2) {
  var tokens = [], sawWS = false, data, firstChar, name2, quot2;
  function getName2() {
    var sub2 = selector.match(re_name)[0];
    selector = selector.substr(sub2.length);
    return unescapeCSS(sub2);
  }
  function stripWhitespace(start) {
    while (isWhitespace(selector.charAt(start)))
      start++;
    selector = selector.substr(start);
  }
  function isEscaped(pos2) {
    var slashCount = 0;
    while (selector.charAt(--pos2) === "\\")
      slashCount++;
    return (slashCount & 1) === 1;
  }
  stripWhitespace(0);
  while (selector !== "") {
    firstChar = selector.charAt(0);
    if (isWhitespace(firstChar)) {
      sawWS = true;
      stripWhitespace(1);
    } else if (firstChar in simpleSelectors) {
      tokens.push({ type: simpleSelectors[firstChar] });
      sawWS = false;
      stripWhitespace(1);
    } else if (firstChar === ",") {
      if (tokens.length === 0) {
        throw new SyntaxError("empty sub-selector");
      }
      subselects.push(tokens);
      tokens = [];
      sawWS = false;
      stripWhitespace(1);
    } else {
      if (sawWS) {
        if (tokens.length > 0) {
          tokens.push({ type: "descendant" });
        }
        sawWS = false;
      }
      if (firstChar === "*") {
        selector = selector.substr(1);
        tokens.push({ type: "universal" });
      } else if (firstChar in attribSelectors) {
        selector = selector.substr(1);
        tokens.push({
          type: "attribute",
          name: attribSelectors[firstChar][0],
          action: attribSelectors[firstChar][1],
          value: getName2(),
          ignoreCase: false
        });
      } else if (firstChar === "[") {
        selector = selector.substr(1);
        data = selector.match(re_attr);
        if (!data) {
          throw new SyntaxError("Malformed attribute selector: " + selector);
        }
        selector = selector.substr(data[0].length);
        name2 = unescapeCSS(data[1]);
        if (!options2 || ("lowerCaseAttributeNames" in options2 ? options2.lowerCaseAttributeNames : !options2.xmlMode)) {
          name2 = name2.toLowerCase();
        }
        tokens.push({
          type: "attribute",
          name: name2,
          action: actionTypes[data[2]],
          value: unescapeCSS(data[4] || data[5] || ""),
          ignoreCase: !!data[6]
        });
      } else if (firstChar === ":") {
        if (selector.charAt(1) === ":") {
          selector = selector.substr(2);
          tokens.push({ type: "pseudo-element", name: getName2().toLowerCase() });
          continue;
        }
        selector = selector.substr(1);
        name2 = getName2().toLowerCase();
        data = null;
        if (selector.charAt(0) === "(") {
          if (name2 in unpackPseudos) {
            quot2 = selector.charAt(1);
            var quoted = quot2 in quotes;
            selector = selector.substr(quoted + 1);
            data = [];
            selector = parseSelector(data, selector, options2);
            if (quoted) {
              if (selector.charAt(0) !== quot2) {
                throw new SyntaxError("unmatched quotes in :" + name2);
              } else {
                selector = selector.substr(1);
              }
            }
            if (selector.charAt(0) !== ")") {
              throw new SyntaxError("missing closing parenthesis in :" + name2 + " " + selector);
            }
            selector = selector.substr(1);
          } else {
            var pos = 1, counter = 1;
            for (; counter > 0 && pos < selector.length; pos++) {
              if (selector.charAt(pos) === "(" && !isEscaped(pos))
                counter++;
              else if (selector.charAt(pos) === ")" && !isEscaped(pos))
                counter--;
            }
            if (counter) {
              throw new SyntaxError("parenthesis not matched");
            }
            data = selector.substr(1, pos - 2);
            selector = selector.substr(pos);
            if (name2 in stripQuotesFromPseudos) {
              quot2 = data.charAt(0);
              if (quot2 === data.slice(-1) && quot2 in quotes) {
                data = data.slice(1, -1);
              }
              data = unescapeCSS(data);
            }
          }
        }
        tokens.push({ type: "pseudo", name: name2, data });
      } else if (re_name.test(selector)) {
        name2 = getName2();
        if (!options2 || ("lowerCaseTags" in options2 ? options2.lowerCaseTags : !options2.xmlMode)) {
          name2 = name2.toLowerCase();
        }
        tokens.push({ type: "tag", name: name2 });
      } else {
        if (tokens.length && tokens[tokens.length - 1].type === "descendant") {
          tokens.pop();
        }
        addToken(subselects, tokens);
        return selector;
      }
    }
  }
  addToken(subselects, tokens);
  return selector;
}
function addToken(subselects, tokens) {
  if (subselects.length > 0 && tokens.length === 0) {
    throw new SyntaxError("empty sub-selector");
  }
  subselects.push(tokens);
}
var DomUtils$2 = domutilsExports, isTag$1 = DomUtils$2.isTag, getParent$1 = DomUtils$2.getParent, getChildren$2 = DomUtils$2.getChildren, getSiblings = DomUtils$2.getSiblings, getName = DomUtils$2.getName;
var general = {
  __proto__: null,
  attribute: attributes$1.compile,
  pseudo: pseudos_1.compile,
  //tags
  tag: function(next, data) {
    var name2 = data.name;
    return function tag2(elem) {
      return getName(elem) === name2 && next(elem);
    };
  },
  //traversal
  descendant: function(next, rule, options2, context, acceptSelf) {
    return function descendant2(elem) {
      if (acceptSelf && next(elem))
        return true;
      var found = false;
      while (!found && (elem = getParent$1(elem))) {
        found = next(elem);
      }
      return found;
    };
  },
  parent: function(next, data, options2) {
    if (options2 && options2.strict)
      throw SyntaxError("Parent selector isn't part of CSS3");
    return function parent2(elem) {
      return getChildren$2(elem).some(test);
    };
    function test(elem) {
      return isTag$1(elem) && next(elem);
    }
  },
  child: function(next) {
    return function child2(elem) {
      var parent2 = getParent$1(elem);
      return !!parent2 && next(parent2);
    };
  },
  sibling: function(next) {
    return function sibling2(elem) {
      var siblings = getSiblings(elem);
      for (var i2 = 0; i2 < siblings.length; i2++) {
        if (isTag$1(siblings[i2])) {
          if (siblings[i2] === elem)
            break;
          if (next(siblings[i2]))
            return true;
        }
      }
      return false;
    };
  },
  adjacent: function(next) {
    return function adjacent2(elem) {
      var siblings = getSiblings(elem), lastElement;
      for (var i2 = 0; i2 < siblings.length; i2++) {
        if (isTag$1(siblings[i2])) {
          if (siblings[i2] === elem)
            break;
          lastElement = siblings[i2];
        }
      }
      return !!lastElement && next(lastElement);
    };
  },
  universal: function(next) {
    return next;
  }
};
const universal = 50;
const tag = 30;
const attribute = 1;
const pseudo = 0;
const descendant = -1;
const child = -1;
const parent = -1;
const sibling = -1;
const adjacent = -1;
const require$$5 = {
  universal,
  tag,
  attribute,
  pseudo,
  descendant,
  child,
  parent,
  sibling,
  adjacent
};
var sort = sortByProcedure;
var procedure$1 = require$$5;
var attributes = {
  __proto__: null,
  exists: 10,
  equals: 8,
  not: 7,
  start: 6,
  end: 6,
  any: 5,
  hyphen: 4,
  element: 4
};
function sortByProcedure(arr) {
  var procs = arr.map(getProcedure);
  for (var i2 = 1; i2 < arr.length; i2++) {
    var procNew = procs[i2];
    if (procNew < 0)
      continue;
    for (var j2 = i2 - 1; j2 >= 0 && procNew < procs[j2]; j2--) {
      var token = arr[j2 + 1];
      arr[j2 + 1] = arr[j2];
      arr[j2] = token;
      procs[j2 + 1] = procs[j2];
      procs[j2] = procNew;
    }
  }
}
function getProcedure(token) {
  var proc = procedure$1[token.type];
  if (proc === procedure$1.attribute) {
    proc = attributes[token.action];
    if (proc === attributes.equals && token.name === "id") {
      proc = 9;
    }
    if (token.ignoreCase) {
      proc >>= 1;
    }
  } else if (proc === procedure$1.pseudo) {
    if (!token.data) {
      proc = 3;
    } else if (token.name === "has" || token.name === "contains") {
      proc = 0;
    } else if (token.name === "matches" || token.name === "not") {
      proc = 0;
      for (var i2 = 0; i2 < token.data.length; i2++) {
        if (token.data[i2].length !== 1)
          continue;
        var cur = getProcedure(token.data[i2][0]);
        if (cur === 0) {
          proc = 0;
          break;
        }
        if (cur > proc)
          proc = cur;
      }
      if (token.data.length > 1 && proc > 0)
        proc -= 1;
    } else {
      proc = 1;
    }
  }
  return proc;
}
compile$2.exports = compile$1;
compileExports.compileUnsafe = compileUnsafe$1;
compileExports.compileToken = compileToken$1;
var parse$1 = cssWhat, DomUtils$1 = domutilsExports, isTag = DomUtils$1.isTag, Rules = general, sortRules = sort, BaseFuncs = boolbase, trueFunc2 = BaseFuncs.trueFunc, falseFunc$1 = BaseFuncs.falseFunc, procedure = require$$5;
function compile$1(selector, options2, context) {
  var next = compileUnsafe$1(selector, options2, context);
  return wrap(next);
}
function wrap(next) {
  return function base(elem) {
    return isTag(elem) && next(elem);
  };
}
function compileUnsafe$1(selector, options2, context) {
  var token = parse$1(selector, options2);
  return compileToken$1(token, options2, context);
}
function includesScopePseudo(t) {
  return t.type === "pseudo" && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function(data) {
    return data.some(includesScopePseudo);
  }));
}
var DESCENDANT_TOKEN = { type: "descendant" }, SCOPE_TOKEN = { type: "pseudo", name: "scope" }, PLACEHOLDER_ELEMENT = {}, getParent = DomUtils$1.getParent;
function absolutize(token, context) {
  var hasContext = !!context && !!context.length && context.every(function(e) {
    return e === PLACEHOLDER_ELEMENT || !!getParent(e);
  });
  token.forEach(function(t) {
    if (t.length > 0 && isTraversal(t[0]) && t[0].type !== "descendant")
      ;
    else if (hasContext && !includesScopePseudo(t)) {
      t.unshift(DESCENDANT_TOKEN);
    } else {
      return;
    }
    t.unshift(SCOPE_TOKEN);
  });
}
function compileToken$1(token, options2, context) {
  token = token.filter(function(t) {
    return t.length > 0;
  });
  token.forEach(sortRules);
  var isArrayContext = Array.isArray(context);
  context = options2 && options2.context || context;
  if (context && !isArrayContext)
    context = [context];
  absolutize(token, context);
  return token.map(function(rules) {
    return compileRules(rules, options2, context, isArrayContext);
  }).reduce(reduceRules, falseFunc$1);
}
function isTraversal(t) {
  return procedure[t.type] < 0;
}
function compileRules(rules, options2, context, isArrayContext) {
  var acceptSelf = isArrayContext && rules[0].name === "scope" && rules[1].type === "descendant";
  return rules.reduce(function(func, rule, index) {
    if (func === falseFunc$1)
      return func;
    return Rules[rule.type](func, rule, options2, context, acceptSelf && index === 1);
  }, options2 && options2.rootFunc || trueFunc2);
}
function reduceRules(a, b) {
  if (b === falseFunc$1 || a === trueFunc2) {
    return a;
  }
  if (a === falseFunc$1 || b === trueFunc2) {
    return b;
  }
  return function combine(elem) {
    return a(elem) || b(elem);
  };
}
var Pseudos$1 = pseudos_1, filters = Pseudos$1.filters, existsOne = DomUtils$1.existsOne, isTag = DomUtils$1.isTag, getChildren$1 = DomUtils$1.getChildren;
function containsTraversal(t) {
  return t.some(isTraversal);
}
filters.not = function(next, token, options2, context) {
  var opts = {
    xmlMode: !!(options2 && options2.xmlMode),
    strict: !!(options2 && options2.strict)
  };
  if (opts.strict) {
    if (token.length > 1 || token.some(containsTraversal)) {
      throw new SyntaxError("complex selectors in :not aren't allowed in strict mode");
    }
  }
  var func = compileToken$1(token, opts, context);
  if (func === falseFunc$1)
    return next;
  if (func === trueFunc2)
    return falseFunc$1;
  return function(elem) {
    return !func(elem) && next(elem);
  };
};
filters.has = function(next, token, options2) {
  var opts = {
    xmlMode: !!(options2 && options2.xmlMode),
    strict: !!(options2 && options2.strict)
  };
  var context = token.some(containsTraversal) ? [PLACEHOLDER_ELEMENT] : null;
  var func = compileToken$1(token, opts, context);
  if (func === falseFunc$1)
    return falseFunc$1;
  if (func === trueFunc2)
    return function(elem) {
      return getChildren$1(elem).some(isTag) && next(elem);
    };
  func = wrap(func);
  if (context) {
    return function has(elem) {
      return next(elem) && (context[0] = elem, existsOne(func, getChildren$1(elem)));
    };
  }
  return function has(elem) {
    return next(elem) && existsOne(func, getChildren$1(elem));
  };
};
filters.matches = function(next, token, options2, context) {
  var opts = {
    xmlMode: !!(options2 && options2.xmlMode),
    strict: !!(options2 && options2.strict),
    rootFunc: next
  };
  return compileToken$1(token, opts, context);
};
var cssSelect = CSSselect;
var Pseudos = pseudos_1, DomUtils = domutilsExports, findOne = DomUtils.findOne, findAll = DomUtils.findAll, getChildren = DomUtils.getChildren, removeSubsets = DomUtils.removeSubsets, falseFunc2 = boolbase.falseFunc, compile = compileExports, compileUnsafe = compile.compileUnsafe, compileToken = compile.compileToken;
function getSelectorFunc(searchFunc) {
  return function select(query, elems, options2) {
    if (typeof query !== "function")
      query = compileUnsafe(query, options2, elems);
    if (!Array.isArray(elems))
      elems = getChildren(elems);
    else
      elems = removeSubsets(elems);
    return searchFunc(query, elems);
  };
}
var selectAll = getSelectorFunc(function selectAll2(query, elems) {
  return query === falseFunc2 || !elems || elems.length === 0 ? [] : findAll(query, elems);
});
var selectOne = getSelectorFunc(function selectOne2(query, elems) {
  return query === falseFunc2 || !elems || elems.length === 0 ? null : findOne(query, elems);
});
function is(elem, query, options2) {
  return (typeof query === "function" ? query : compile(query, options2))(elem);
}
function CSSselect(query, elems, options2) {
  return selectAll(query, elems, options2);
}
CSSselect.compile = compile;
CSSselect.filters = Pseudos.filters;
CSSselect.pseudos = Pseudos.pseudos;
CSSselect.selectAll = selectAll;
CSSselect.selectOne = selectOne;
CSSselect.is = is;
CSSselect.parse = compile;
CSSselect.iterate = selectAll;
CSSselect._compileUnsafe = compileUnsafe;
CSSselect._compileToken = compileToken;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
var eq$2 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$2(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index = assocIndexOf$3(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index = assocIndexOf$2(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var getNative$4 = _getNative, root$4 = _root;
var Map$3 = getNative$4(root$4, "Map");
var _Map = Map$3;
var getNative$3 = _getNative;
var nativeCreate$4 = getNative$3(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$5 = Object.prototype;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$5.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$4.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$2 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map2, key) {
  var data = map2.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var ListCache$1 = _ListCache, Map$1 = _Map, MapCache$2 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$2(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$3(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$3.prototype.clear = stackClear;
Stack$3.prototype["delete"] = stackDelete;
Stack$3.prototype.get = stackGet;
Stack$3.prototype.has = stackHas;
Stack$3.prototype.set = stackSet;
var _Stack = Stack$3;
var baseAssignValue = _baseAssignValue, eq$1 = eq_1;
function assignMergeValue$2(object, key, value) {
  if (value !== void 0 && !eq$1(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
var _assignMergeValue = assignMergeValue$2;
var _cloneBufferExports = {};
var _cloneBuffer = {
  get exports() {
    return _cloneBufferExports;
  },
  set exports(v) {
    _cloneBufferExports = v;
  }
};
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBufferExports);
var root$3 = _root;
var Uint8Array$2 = root$3.Uint8Array;
var _Uint8Array = Uint8Array$2;
var Uint8Array$1 = _Uint8Array;
function cloneArrayBuffer$1(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$1;
var cloneArrayBuffer = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
var overArg = _overArg;
var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$2;
var baseCreate = _baseCreate, getPrototype$1 = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$1(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype$1(object)) : {};
}
var _initCloneObject = initCloneObject$1;
var isArrayLike$1 = isArrayLike_1, isObjectLike$2 = isObjectLike_1;
function isArrayLikeObject$1(value) {
  return isObjectLike$2(value) && isArrayLike$1(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$1;
var baseGetTag$1 = _baseGetTag, getPrototype = _getPrototype, isObjectLike$1 = isObjectLike_1;
var objectTag$2 = "[object Object]";
var funcProto = Function.prototype, objectProto$3 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike$1(value) || baseGetTag$1(value) != objectTag$2) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$3.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$1;
function safeGet$2(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var _safeGet = safeGet$2;
var copyObject = _copyObject, keysIn$1 = keysIn_1;
function toPlainObject$1(value) {
  return copyObject(value, keysIn$1(value));
}
var toPlainObject_1 = toPlainObject$1;
var assignMergeValue$1 = _assignMergeValue, cloneBuffer = _cloneBufferExports, cloneTypedArray = _cloneTypedArray, copyArray = _copyArray, initCloneObject = _initCloneObject, isArguments$2 = isArguments_1, isArray$d = isArray_1, isArrayLikeObject = isArrayLikeObject_1, isBuffer$1 = isBufferExports, isFunction = isFunction_1, isObject$3 = isObject_1, isPlainObject = isPlainObject_1, isTypedArray$1 = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet$1(object, key), srcValue = safeGet$1(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue$1(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$d(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$d(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments$2(srcValue)) {
      newValue = objValue;
      if (isArguments$2(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$3(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue$1(object, key, newValue);
}
var _baseMergeDeep = baseMergeDeep$1;
var Stack$2 = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$2 = isObject_1, keysIn = keysIn_1, safeGet = _safeGet;
function baseMerge$1(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack$2());
    if (isObject$2(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge$1, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
var _baseMerge = baseMerge$1;
var baseMerge = _baseMerge, createAssigner = _createAssigner;
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var merge_1 = merge;
var hasRequired_static;
function require_static() {
  if (hasRequired_static)
    return _static;
  hasRequired_static = 1;
  (function(exports) {
    var serialize = domSerializerExports, defaultOptions = options.default, flattenOptions = options.flatten, select = cssSelect, parse3 = parseExports, _2 = {
      merge: merge_1,
      defaults: defaults_1
    };
    exports.load = function(content, options2, isDocument) {
      var Cheerio = requireCheerio();
      options2 = _2.defaults(flattenOptions(options2 || {}), defaultOptions);
      if (isDocument === void 0)
        isDocument = true;
      var root2 = parse3(content, options2, isDocument);
      var initialize = function(selector, context, r, opts) {
        if (!(this instanceof initialize)) {
          return new initialize(selector, context, r, opts);
        }
        opts = _2.defaults(opts || {}, options2);
        return Cheerio.call(this, selector, context, r || root2, opts);
      };
      initialize.prototype = Object.create(Cheerio.prototype);
      initialize.prototype.constructor = initialize;
      initialize.fn = initialize.prototype;
      initialize.prototype._originalRoot = root2;
      _2.merge(initialize, exports);
      initialize._root = root2;
      initialize._options = options2;
      return initialize;
    };
    function render2(that, dom, options2) {
      if (!dom) {
        if (that._root && that._root.children) {
          dom = that._root.children;
        } else {
          return "";
        }
      } else if (typeof dom === "string") {
        dom = select(dom, that._root, options2);
      }
      return serialize(dom, options2);
    }
    exports.html = function(dom, options2) {
      if (Object.prototype.toString.call(dom) === "[object Object]" && !options2 && !("length" in dom) && !("type" in dom)) {
        options2 = dom;
        dom = void 0;
      }
      options2 = _2.defaults(flattenOptions(options2 || {}), this._options, defaultOptions);
      return render2(this, dom, options2);
    };
    exports.xml = function(dom) {
      var options2 = _2.defaults({ xml: true }, this._options);
      return render2(this, dom, options2);
    };
    exports.text = function(elems) {
      if (!elems) {
        elems = this.root();
      }
      var ret = "", len = elems.length, elem;
      for (var i2 = 0; i2 < len; i2++) {
        elem = elems[i2];
        if (elem.type === "text")
          ret += elem.data;
        else if (elem.children && elem.type !== "comment" && elem.tagName !== "script" && elem.tagName !== "style") {
          ret += exports.text(elem.children);
        }
      }
      return ret;
    };
    exports.parseHTML = function(data, context, keepScripts) {
      var parsed;
      if (!data || typeof data !== "string") {
        return null;
      }
      if (typeof context === "boolean") {
        keepScripts = context;
      }
      parsed = this.load(data, defaultOptions, false);
      if (!keepScripts) {
        parsed("script").remove();
      }
      return parsed.root()[0].children.slice();
    };
    exports.root = function() {
      return this(this._root);
    };
    exports.contains = function(container, contained) {
      if (contained === container) {
        return false;
      }
      while (contained && contained !== contained.parent) {
        contained = contained.parent;
        if (contained === container) {
          return true;
        }
      }
      return false;
    };
    exports.merge = function(arr1, arr2) {
      if (!(isArrayLike2(arr1) && isArrayLike2(arr2))) {
        return;
      }
      var newLength = arr1.length + arr2.length;
      var i2 = 0;
      while (i2 < arr2.length) {
        arr1[i2 + arr1.length] = arr2[i2];
        i2++;
      }
      arr1.length = newLength;
      return arr1;
    };
    function isArrayLike2(item) {
      if (Array.isArray(item)) {
        return true;
      }
      if (typeof item !== "object") {
        return false;
      }
      if (!item.hasOwnProperty("length")) {
        return false;
      }
      if (typeof item.length !== "number") {
        return false;
      }
      if (item.length < 0) {
        return false;
      }
      var i2 = 0;
      while (i2 < item.length) {
        if (!(i2 in item)) {
          return false;
        }
        i2++;
      }
      return true;
    }
  })(_static);
  return _static;
}
function arraySome$2(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$2;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache$1 = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache$1();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome$1 = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome$1(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
function mapToArray$1(map2) {
  var index = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$1;
function setToArray$1(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$3 = _Symbol, Uint8Array = _Uint8Array, eq = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag$1 = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]";
var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag$1(object, other, tag2, bitmask, customizer, equalFunc, stack) {
  switch (tag2) {
    case dataViewTag$1:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag$1:
      var convert = mapToArray;
    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$2(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush$2;
var arrayPush$1 = _arrayPush, isArray$c = isArray_1;
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$c(object) ? result : arrayPush$1(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$1;
function arrayFilter$3(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$3;
function stubArray$1() {
  return [];
}
var stubArray_1 = stubArray$1;
var arrayFilter$2 = _arrayFilter, stubArray = stubArray_1;
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter$2(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$1, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var getNative$2 = _getNative, root$2 = _root;
var DataView$1 = getNative$2(root$2, "DataView");
var _DataView = DataView$1;
var getNative$1 = _getNative, root$1 = _root;
var Promise$2 = getNative$1(root$1, "Promise");
var _Promise = Promise$2;
var getNative = _getNative, root = _root;
var Set$1 = getNative(root, "Set");
var _Set = Set$1;
var DataView = _DataView, Map = _Map, Promise$1 = _Promise, Set = _Set, WeakMap = _WeakMap, baseGetTag = _baseGetTag, toSource = _toSource;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
var getTag$1 = baseGetTag;
if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag$1(new Map()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set && getTag$1(new Set()) != setTag || WeakMap && getTag$1(new WeakMap()) != weakMapTag) {
  getTag$1 = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var _getTag = getTag$1;
var Stack$1 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$b = isArray_1, isBuffer = isBufferExports, isTypedArray = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty$1 = objectProto.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$b(object), othIsArr = isArray$b(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$1());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike = isObjectLike_1;
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}
var _baseIsEqual = baseIsEqual$2;
var Stack = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject$1 = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject$1(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys = keys_1;
function getMatchData$1(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
var isArray$a = isArray_1, isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object) {
  if (isArray$a(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$3;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$2(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap$2;
var Symbol$2 = _Symbol, arrayMap$1 = _arrayMap, isArray$9 = isArray_1, isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$9(value)) {
    return arrayMap$1(value, baseToString$1) + "";
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$2(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$2;
var isArray$8 = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString$1 = toString_1;
function castPath$4(value, object) {
  if (isArray$8(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString$1(value));
}
var _castPath = castPath$4;
var isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$5(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$5;
var castPath$3 = _castPath, toKey$4 = _toKey;
function baseGet$3(object, path2) {
  path2 = castPath$3(path2, object);
  var index = 0, length = path2.length;
  while (object != null && index < length) {
    object = object[toKey$4(path2[index++])];
  }
  return index && index == length ? object : void 0;
}
var _baseGet = baseGet$3;
var baseGet$2 = _baseGet;
function get$1(object, path2, defaultValue) {
  var result = object == null ? void 0 : baseGet$2(object, path2);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$1;
var castPath$2 = _castPath, isArguments$1 = isArguments_1, isArray$7 = isArray_1, isIndex$1 = _isIndex, isLength = isLength_1, toKey$3 = _toKey;
function hasPath$1(object, path2, hasFunc) {
  path2 = castPath$2(path2, object);
  var index = -1, length = path2.length, result = false;
  while (++index < length) {
    var key = toKey$3(path2[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex$1(key, length) && (isArray$7(object) || isArguments$1(object));
}
var _hasPath = hasPath$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$2(object, path2) {
  return object != null && hasPath(object, path2, baseHasIn);
}
var hasIn_1 = hasIn$2;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn$1 = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$2 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path2, srcValue) {
  if (isKey$1(path2) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$2(path2), srcValue);
  }
  return function(object) {
    var objValue = get(object, path2);
    return objValue === void 0 && objValue === srcValue ? hasIn$1(object, path2) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function baseProperty$1(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet$1 = _baseGet;
function basePropertyDeep$1(path2) {
  return function(object) {
    return baseGet$1(object, path2);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey$1 = _toKey;
function property$1(path2) {
  return isKey(path2) ? baseProperty(toKey$1(path2)) : basePropertyDeep(path2);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity = identity_1, isArray$6 = isArray_1, property = property_1;
function baseIteratee$5(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray$6(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$5;
var baseEach$3 = _baseEach;
function baseSome$1(collection, predicate) {
  var result;
  baseEach$3(collection, function(value, index, collection2) {
    result = predicate(value, index, collection2);
    return !result;
  });
  return !!result;
}
var _baseSome = baseSome$1;
var arraySome = _arraySome, baseIteratee$4 = _baseIteratee, baseSome = _baseSome, isArray$5 = isArray_1, isIterateeCall = _isIterateeCall;
function some(collection, predicate, guard) {
  var func = isArray$5(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, baseIteratee$4(predicate));
}
var some_1 = some;
var hasRequiredAttributes;
function requireAttributes() {
  if (hasRequiredAttributes)
    return attributes$2;
  hasRequiredAttributes = 1;
  (function(exports) {
    var $2 = require_static(), utils$1 = utils, isTag2 = utils$1.isTag, domEach2 = utils$1.domEach, hasOwn = Object.prototype.hasOwnProperty, camelCase = utils$1.camelCase, cssCase = utils$1.cssCase, rspace = /\s+/, dataAttrPrefix = "data-", _2 = {
      forEach: forEach_1,
      extend: assignIn_1,
      some: some_1
    }, primitives = {
      null: null,
      true: true,
      false: false
    }, rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, rbrace2 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    var getAttr = function(elem, name2) {
      if (!elem || !isTag2(elem))
        return;
      if (!elem.attribs) {
        elem.attribs = {};
      }
      if (!name2) {
        return elem.attribs;
      }
      if (hasOwn.call(elem.attribs, name2)) {
        return rboolean.test(name2) ? name2 : elem.attribs[name2];
      }
      if (elem.name === "option" && name2 === "value") {
        return $2.text(elem.children);
      }
      if (elem.name === "input" && (elem.attribs.type === "radio" || elem.attribs.type === "checkbox") && name2 === "value") {
        return "on";
      }
    };
    var setAttr = function(el2, name2, value) {
      if (value === null) {
        removeAttribute(el2, name2);
      } else {
        el2.attribs[name2] = value + "";
      }
    };
    exports.attr = function(name2, value) {
      if (typeof name2 === "object" || value !== void 0) {
        if (typeof value === "function") {
          return domEach2(this, function(i2, el2) {
            setAttr(el2, name2, value.call(el2, i2, el2.attribs[name2]));
          });
        }
        return domEach2(this, function(i2, el2) {
          if (!isTag2(el2))
            return;
          if (typeof name2 === "object") {
            _2.forEach(name2, function(objValue, objName) {
              setAttr(el2, objName, objValue);
            });
          } else {
            setAttr(el2, name2, value);
          }
        });
      }
      return getAttr(this[0], name2);
    };
    var getProp = function(el2, name2) {
      if (!el2 || !isTag2(el2))
        return;
      return hasOwn.call(el2, name2) ? el2[name2] : rboolean.test(name2) ? getAttr(el2, name2) !== void 0 : getAttr(el2, name2);
    };
    var setProp = function(el2, name2, value) {
      el2[name2] = rboolean.test(name2) ? !!value : value;
    };
    exports.prop = function(name2, value) {
      var i2 = 0, property2;
      if (typeof name2 === "string" && value === void 0) {
        switch (name2) {
          case "style":
            property2 = this.css();
            _2.forEach(property2, function(v, p) {
              property2[i2++] = p;
            });
            property2.length = i2;
            break;
          case "tagName":
          case "nodeName":
            property2 = this[0].name.toUpperCase();
            break;
          default:
            property2 = getProp(this[0], name2);
        }
        return property2;
      }
      if (typeof name2 === "object" || value !== void 0) {
        if (typeof value === "function") {
          return domEach2(this, function(j2, el2) {
            setProp(el2, name2, value.call(el2, j2, getProp(el2, name2)));
          });
        }
        return domEach2(this, function(__, el2) {
          if (!isTag2(el2))
            return;
          if (typeof name2 === "object") {
            _2.forEach(name2, function(val, key) {
              setProp(el2, key, val);
            });
          } else {
            setProp(el2, name2, value);
          }
        });
      }
    };
    var setData2 = function(el2, name2, value) {
      if (!el2.data) {
        el2.data = {};
      }
      if (typeof name2 === "object")
        return _2.extend(el2.data, name2);
      if (typeof name2 === "string" && value !== void 0) {
        el2.data[name2] = value;
      }
    };
    var readData = function(el2, name2) {
      var readAll = arguments.length === 1;
      var domNames, domName, jsNames, jsName, value, idx, length;
      if (readAll) {
        domNames = Object.keys(el2.attribs).filter(function(attrName) {
          return attrName.slice(0, dataAttrPrefix.length) === dataAttrPrefix;
        });
        jsNames = domNames.map(function(_domName) {
          return camelCase(_domName.slice(dataAttrPrefix.length));
        });
      } else {
        domNames = [dataAttrPrefix + cssCase(name2)];
        jsNames = [name2];
      }
      for (idx = 0, length = domNames.length; idx < length; ++idx) {
        domName = domNames[idx];
        jsName = jsNames[idx];
        if (hasOwn.call(el2.attribs, domName)) {
          value = el2.attribs[domName];
          if (hasOwn.call(primitives, value)) {
            value = primitives[value];
          } else if (value === String(Number(value))) {
            value = Number(value);
          } else if (rbrace2.test(value)) {
            try {
              value = JSON.parse(value);
            } catch (e) {
            }
          }
          el2.data[jsName] = value;
        }
      }
      return readAll ? el2.data : value;
    };
    exports.data = function(name2, value) {
      var elem = this[0];
      if (!elem || !isTag2(elem))
        return;
      if (!elem.data) {
        elem.data = {};
      }
      if (!name2) {
        return readData(elem);
      }
      if (typeof name2 === "object" || value !== void 0) {
        domEach2(this, function(i2, el2) {
          setData2(el2, name2, value);
        });
        return this;
      } else if (hasOwn.call(elem.data, name2)) {
        return elem.data[name2];
      }
      return readData(elem, name2);
    };
    exports.val = function(value) {
      var querying2 = arguments.length === 0, element2 = this[0];
      if (!element2)
        return;
      switch (element2.name) {
        case "textarea":
          return this.text(value);
        case "input":
          switch (this.attr("type")) {
            case "radio":
              if (querying2) {
                return this.attr("value");
              } else {
                this.attr("value", value);
                return this;
              }
            default:
              return this.attr("value", value);
          }
        case "select":
          var option = this.find("option:selected"), returnValue;
          if (option === void 0)
            return void 0;
          if (!querying2) {
            if (!hasOwn.call(this.attr(), "multiple") && typeof value == "object") {
              return this;
            }
            if (typeof value != "object") {
              value = [value];
            }
            this.find("option").removeAttr("selected");
            for (var i2 = 0; i2 < value.length; i2++) {
              this.find('option[value="' + value[i2] + '"]').attr("selected", "");
            }
            return this;
          }
          returnValue = option.attr("value");
          if (hasOwn.call(this.attr(), "multiple")) {
            returnValue = [];
            domEach2(option, function(__, el2) {
              returnValue.push(getAttr(el2, "value"));
            });
          }
          return returnValue;
        case "option":
          if (!querying2) {
            this.attr("value", value);
            return this;
          }
          return this.attr("value");
      }
    };
    var removeAttribute = function(elem, name2) {
      if (!elem.attribs || !hasOwn.call(elem.attribs, name2))
        return;
      delete elem.attribs[name2];
    };
    exports.removeAttr = function(name2) {
      domEach2(this, function(i2, elem) {
        removeAttribute(elem, name2);
      });
      return this;
    };
    exports.hasClass = function(className) {
      return _2.some(this, function(elem) {
        var attrs = elem.attribs, clazz = attrs && attrs["class"], idx = -1, end;
        if (clazz && className.length) {
          while ((idx = clazz.indexOf(className, idx + 1)) > -1) {
            end = idx + className.length;
            if ((idx === 0 || rspace.test(clazz[idx - 1])) && (end === clazz.length || rspace.test(clazz[end]))) {
              return true;
            }
          }
        }
      });
    };
    exports.addClass = function(value) {
      if (typeof value === "function") {
        return domEach2(this, function(i3, el2) {
          var className2 = el2.attribs["class"] || "";
          exports.addClass.call([el2], value.call(el2, i3, className2));
        });
      }
      if (!value || typeof value !== "string")
        return this;
      var classNames = value.split(rspace), numElements = this.length;
      for (var i2 = 0; i2 < numElements; i2++) {
        if (!isTag2(this[i2]))
          continue;
        var className = getAttr(this[i2], "class"), numClasses, setClass;
        if (!className) {
          setAttr(this[i2], "class", classNames.join(" ").trim());
        } else {
          setClass = " " + className + " ";
          numClasses = classNames.length;
          for (var j2 = 0; j2 < numClasses; j2++) {
            var appendClass = classNames[j2] + " ";
            if (setClass.indexOf(" " + appendClass) < 0)
              setClass += appendClass;
          }
          setAttr(this[i2], "class", setClass.trim());
        }
      }
      return this;
    };
    var splitClass = function(className) {
      return className ? className.trim().split(rspace) : [];
    };
    exports.removeClass = function(value) {
      var classes, numClasses, removeAll;
      if (typeof value === "function") {
        return domEach2(this, function(i2, el2) {
          exports.removeClass.call(
            [el2],
            value.call(el2, i2, el2.attribs["class"] || "")
          );
        });
      }
      classes = splitClass(value);
      numClasses = classes.length;
      removeAll = arguments.length === 0;
      return domEach2(this, function(i2, el2) {
        if (!isTag2(el2))
          return;
        if (removeAll) {
          el2.attribs.class = "";
        } else {
          var elClasses = splitClass(el2.attribs.class), index, changed;
          for (var j2 = 0; j2 < numClasses; j2++) {
            index = elClasses.indexOf(classes[j2]);
            if (index >= 0) {
              elClasses.splice(index, 1);
              changed = true;
              j2--;
            }
          }
          if (changed) {
            el2.attribs.class = elClasses.join(" ");
          }
        }
      });
    };
    exports.toggleClass = function(value, stateVal) {
      if (typeof value === "function") {
        return domEach2(this, function(i3, el2) {
          exports.toggleClass.call(
            [el2],
            value.call(el2, i3, el2.attribs["class"] || "", stateVal),
            stateVal
          );
        });
      }
      if (!value || typeof value !== "string")
        return this;
      var classNames = value.split(rspace), numClasses = classNames.length, state = typeof stateVal === "boolean" ? stateVal ? 1 : -1 : 0, numElements = this.length, elementClasses, index;
      for (var i2 = 0; i2 < numElements; i2++) {
        if (!isTag2(this[i2]))
          continue;
        elementClasses = splitClass(this[i2].attribs.class);
        for (var j2 = 0; j2 < numClasses; j2++) {
          index = elementClasses.indexOf(classNames[j2]);
          if (state >= 0 && index < 0) {
            elementClasses.push(classNames[j2]);
          } else if (state <= 0 && index >= 0) {
            elementClasses.splice(index, 1);
          }
        }
        this[i2].attribs.class = elementClasses.join(" ");
      }
      return this;
    };
    exports.is = function(selector) {
      if (selector) {
        return this.filter(selector).length > 0;
      }
      return false;
    };
  })(attributes$2);
  return attributes$2;
}
var traversing = {};
var baseEach$2 = _baseEach;
function baseFilter$2(collection, predicate) {
  var result = [];
  baseEach$2(collection, function(value, index, collection2) {
    if (predicate(value, index, collection2)) {
      result.push(value);
    }
  });
  return result;
}
var _baseFilter = baseFilter$2;
var FUNC_ERROR_TEXT = "Expected a function";
function negate$1(predicate) {
  if (typeof predicate != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0:
        return !predicate.call(this);
      case 1:
        return !predicate.call(this, args[0]);
      case 2:
        return !predicate.call(this, args[0], args[1]);
      case 3:
        return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}
var negate_1 = negate$1;
var arrayFilter$1 = _arrayFilter, baseFilter$1 = _baseFilter, baseIteratee$3 = _baseIteratee, isArray$4 = isArray_1, negate = negate_1;
function reject(collection, predicate) {
  var func = isArray$4(collection) ? arrayFilter$1 : baseFilter$1;
  return func(collection, negate(baseIteratee$3(predicate)));
}
var reject_1 = reject;
var arrayFilter = _arrayFilter, baseFilter = _baseFilter, baseIteratee$2 = _baseIteratee, isArray$3 = isArray_1;
function filter(collection, predicate) {
  var func = isArray$3(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee$2(predicate));
}
var filter_1 = filter;
function arrayReduce$1(array, iteratee, accumulator, initAccum) {
  var index = -1, length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
var _arrayReduce = arrayReduce$1;
function baseReduce$1(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection2) {
    accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
  });
  return accumulator;
}
var _baseReduce = baseReduce$1;
var arrayReduce = _arrayReduce, baseEach$1 = _baseEach, baseIteratee$1 = _baseIteratee, baseReduce = _baseReduce, isArray$2 = isArray_1;
function reduce(collection, iteratee, accumulator) {
  var func = isArray$2(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
  return func(collection, baseIteratee$1(iteratee), accumulator, initAccum, baseEach$1);
}
var reduce_1 = reduce;
(function(exports) {
  var select = cssSelect, utils$1 = utils, domEach2 = utils$1.domEach, uniqueSort = requireLib().DomUtils.uniqueSort, isTag2 = utils$1.isTag, _2 = {
    bind: bind_1,
    forEach: forEach_1,
    reject: reject_1,
    filter: filter_1,
    reduce: reduce_1
  };
  exports.find = function(selectorOrHaystack) {
    var elems = _2.reduce(this, function(memo, elem) {
      return memo.concat(_2.filter(elem.children, isTag2));
    }, []);
    var contains = this.constructor.contains;
    var haystack;
    if (selectorOrHaystack && typeof selectorOrHaystack !== "string") {
      if (selectorOrHaystack.cheerio) {
        haystack = selectorOrHaystack.get();
      } else {
        haystack = [selectorOrHaystack];
      }
      return this._make(haystack.filter(function(elem) {
        var idx, len;
        for (idx = 0, len = this.length; idx < len; ++idx) {
          if (contains(this[idx], elem)) {
            return true;
          }
        }
      }, this));
    }
    var options2 = { __proto__: this.options, context: this.toArray() };
    return this._make(select(selectorOrHaystack, elems, options2));
  };
  exports.parent = function(selector) {
    var set = [];
    domEach2(this, function(idx, elem) {
      var parentElem = elem.parent;
      if (parentElem && set.indexOf(parentElem) < 0) {
        set.push(parentElem);
      }
    });
    if (arguments.length) {
      set = exports.filter.call(set, selector, this);
    }
    return this._make(set);
  };
  exports.parents = function(selector) {
    var parentNodes = [];
    this.get().reverse().forEach(function(elem) {
      traverseParents(this, elem.parent, selector, Infinity).forEach(
        function(node2) {
          if (parentNodes.indexOf(node2) === -1) {
            parentNodes.push(node2);
          }
        }
      );
    }, this);
    return this._make(parentNodes);
  };
  exports.parentsUntil = function(selector, filter2) {
    var parentNodes = [], untilNode, untilNodes;
    if (typeof selector === "string") {
      untilNode = select(selector, this.parents().toArray(), this.options)[0];
    } else if (selector && selector.cheerio) {
      untilNodes = selector.toArray();
    } else if (selector) {
      untilNode = selector;
    }
    this.toArray().reverse().forEach(function(elem) {
      while (elem = elem.parent) {
        if (untilNode && elem !== untilNode || untilNodes && untilNodes.indexOf(elem) === -1 || !untilNode && !untilNodes) {
          if (isTag2(elem) && parentNodes.indexOf(elem) === -1) {
            parentNodes.push(elem);
          }
        } else {
          break;
        }
      }
    }, this);
    return this._make(filter2 ? select(filter2, parentNodes, this.options) : parentNodes);
  };
  exports.closest = function(selector) {
    var set = [];
    if (!selector) {
      return this._make(set);
    }
    domEach2(this, function(idx, elem) {
      var closestElem = traverseParents(this, elem, selector, 1)[0];
      if (closestElem && set.indexOf(closestElem) < 0) {
        set.push(closestElem);
      }
    }.bind(this));
    return this._make(set);
  };
  exports.next = function(selector) {
    if (!this[0]) {
      return this;
    }
    var elems = [];
    _2.forEach(this, function(elem) {
      while (elem = elem.next) {
        if (isTag2(elem)) {
          elems.push(elem);
          return;
        }
      }
    });
    return selector ? exports.filter.call(elems, selector, this) : this._make(elems);
  };
  exports.nextAll = function(selector) {
    if (!this[0]) {
      return this;
    }
    var elems = [];
    _2.forEach(this, function(elem) {
      while (elem = elem.next) {
        if (isTag2(elem) && elems.indexOf(elem) === -1) {
          elems.push(elem);
        }
      }
    });
    return selector ? exports.filter.call(elems, selector, this) : this._make(elems);
  };
  exports.nextUntil = function(selector, filterSelector) {
    if (!this[0]) {
      return this;
    }
    var elems = [], untilNode, untilNodes;
    if (typeof selector === "string") {
      untilNode = select(selector, this.nextAll().get(), this.options)[0];
    } else if (selector && selector.cheerio) {
      untilNodes = selector.get();
    } else if (selector) {
      untilNode = selector;
    }
    _2.forEach(this, function(elem) {
      while (elem = elem.next) {
        if (untilNode && elem !== untilNode || untilNodes && untilNodes.indexOf(elem) === -1 || !untilNode && !untilNodes) {
          if (isTag2(elem) && elems.indexOf(elem) === -1) {
            elems.push(elem);
          }
        } else {
          break;
        }
      }
    });
    return filterSelector ? exports.filter.call(elems, filterSelector, this) : this._make(elems);
  };
  exports.prev = function(selector) {
    if (!this[0]) {
      return this;
    }
    var elems = [];
    _2.forEach(this, function(elem) {
      while (elem = elem.prev) {
        if (isTag2(elem)) {
          elems.push(elem);
          return;
        }
      }
    });
    return selector ? exports.filter.call(elems, selector, this) : this._make(elems);
  };
  exports.prevAll = function(selector) {
    if (!this[0]) {
      return this;
    }
    var elems = [];
    _2.forEach(this, function(elem) {
      while (elem = elem.prev) {
        if (isTag2(elem) && elems.indexOf(elem) === -1) {
          elems.push(elem);
        }
      }
    });
    return selector ? exports.filter.call(elems, selector, this) : this._make(elems);
  };
  exports.prevUntil = function(selector, filterSelector) {
    if (!this[0]) {
      return this;
    }
    var elems = [], untilNode, untilNodes;
    if (typeof selector === "string") {
      untilNode = select(selector, this.prevAll().get(), this.options)[0];
    } else if (selector && selector.cheerio) {
      untilNodes = selector.get();
    } else if (selector) {
      untilNode = selector;
    }
    _2.forEach(this, function(elem) {
      while (elem = elem.prev) {
        if (untilNode && elem !== untilNode || untilNodes && untilNodes.indexOf(elem) === -1 || !untilNode && !untilNodes) {
          if (isTag2(elem) && elems.indexOf(elem) === -1) {
            elems.push(elem);
          }
        } else {
          break;
        }
      }
    });
    return filterSelector ? exports.filter.call(elems, filterSelector, this) : this._make(elems);
  };
  exports.siblings = function(selector) {
    var parent2 = this.parent();
    var elems = _2.filter(
      parent2 ? parent2.children() : this.siblingsAndMe(),
      _2.bind(function(elem) {
        return isTag2(elem) && !this.is(elem);
      }, this)
    );
    if (selector !== void 0) {
      return exports.filter.call(elems, selector, this);
    } else {
      return this._make(elems);
    }
  };
  exports.children = function(selector) {
    var elems = _2.reduce(this, function(memo, elem) {
      return memo.concat(_2.filter(elem.children, isTag2));
    }, []);
    if (selector === void 0)
      return this._make(elems);
    return exports.filter.call(elems, selector, this);
  };
  exports.contents = function() {
    return this._make(_2.reduce(this, function(all, elem) {
      all.push.apply(all, elem.children);
      return all;
    }, []));
  };
  exports.each = function(fn) {
    var i2 = 0, len = this.length;
    while (i2 < len && fn.call(this[i2], i2, this[i2]) !== false)
      ++i2;
    return this;
  };
  exports.map = function(fn) {
    return this._make(_2.reduce(this, function(memo, el2, i2) {
      var val = fn.call(el2, i2, el2);
      return val == null ? memo : memo.concat(val);
    }, []));
  };
  var makeFilterMethod = function(filterFn) {
    return function(match, container) {
      var testFn;
      container = container || this;
      if (typeof match === "string") {
        testFn = select.compile(match, container.options);
      } else if (typeof match === "function") {
        testFn = function(el2, i2) {
          return match.call(el2, i2, el2);
        };
      } else if (match.cheerio) {
        testFn = match.is.bind(match);
      } else {
        testFn = function(el2) {
          return match === el2;
        };
      }
      return container._make(filterFn(this, testFn));
    };
  };
  exports.filter = makeFilterMethod(_2.filter);
  exports.not = makeFilterMethod(_2.reject);
  exports.has = function(selectorOrHaystack) {
    var that = this;
    return exports.filter.call(this, function() {
      return that._make(this).find(selectorOrHaystack).length > 0;
    });
  };
  exports.first = function() {
    return this.length > 1 ? this._make(this[0]) : this;
  };
  exports.last = function() {
    return this.length > 1 ? this._make(this[this.length - 1]) : this;
  };
  exports.eq = function(i2) {
    i2 = +i2;
    if (i2 === 0 && this.length <= 1)
      return this;
    if (i2 < 0)
      i2 = this.length + i2;
    return this[i2] ? this._make(this[i2]) : this._make([]);
  };
  exports.get = function(i2) {
    if (i2 == null) {
      return Array.prototype.slice.call(this);
    } else {
      return this[i2 < 0 ? this.length + i2 : i2];
    }
  };
  exports.index = function(selectorOrNeedle) {
    var $haystack, needle;
    if (arguments.length === 0) {
      $haystack = this.parent().children();
      needle = this[0];
    } else if (typeof selectorOrNeedle === "string") {
      $haystack = this._make(selectorOrNeedle);
      needle = this[0];
    } else {
      $haystack = this;
      needle = selectorOrNeedle.cheerio ? selectorOrNeedle[0] : selectorOrNeedle;
    }
    return $haystack.get().indexOf(needle);
  };
  exports.slice = function() {
    return this._make([].slice.apply(this, arguments));
  };
  function traverseParents(self2, elem, selector, limit) {
    var elems = [];
    while (elem && elems.length < limit) {
      if (!selector || exports.filter.call([elem], selector, self2).length) {
        elems.push(elem);
      }
      elem = elem.parent;
    }
    return elems;
  }
  exports.end = function() {
    return this.prevObject || this._make([]);
  };
  exports.add = function(other, context) {
    var selection = this._make(other, context);
    var contents = uniqueSort(selection.get().concat(this.get()));
    for (var i2 = 0; i2 < contents.length; ++i2) {
      selection[i2] = contents[i2];
    }
    selection.length = contents.length;
    return selection;
  };
  exports.addBack = function(selector) {
    return this.add(
      arguments.length ? this.prevObject.filter(selector) : this.prevObject
    );
  };
})(traversing);
var manipulation = {};
var Symbol$1 = _Symbol, isArguments = isArguments_1, isArray$1 = isArray_1;
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable$1(value) {
  return isArray$1(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten$1;
var baseFlatten = _baseFlatten;
function flatten$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
var flatten_1 = flatten$1;
var hasRequiredManipulation;
function requireManipulation() {
  if (hasRequiredManipulation)
    return manipulation;
  hasRequiredManipulation = 1;
  (function(exports) {
    var parse3 = parseExports, $2 = require_static(), updateDOM = parse3.update, evaluate = parse3.evaluate, utils$1 = utils, domEach2 = utils$1.domEach, cloneDom = utils$1.cloneDom, isHtml = utils$1.isHtml, slice = Array.prototype.slice, _2 = {
      flatten: flatten_1,
      bind: bind_1,
      forEach: forEach_1
    };
    exports._makeDomArray = function makeDomArray(elem, clone) {
      if (elem == null) {
        return [];
      } else if (elem.cheerio) {
        return clone ? cloneDom(elem.get(), elem.options) : elem.get();
      } else if (Array.isArray(elem)) {
        return _2.flatten(elem.map(function(el2) {
          return this._makeDomArray(el2, clone);
        }, this));
      } else if (typeof elem === "string") {
        return evaluate(elem, this.options, false);
      } else {
        return clone ? cloneDom([elem]) : [elem];
      }
    };
    var _insert = function(concatenator) {
      return function() {
        var elems = slice.call(arguments), lastIdx = this.length - 1;
        return domEach2(this, function(i2, el2) {
          var dom, domSrc;
          if (typeof elems[0] === "function") {
            domSrc = elems[0].call(el2, i2, $2.html(el2.children));
          } else {
            domSrc = elems;
          }
          dom = this._makeDomArray(domSrc, i2 < lastIdx);
          concatenator(dom, el2.children, el2);
        });
      };
    };
    var uniqueSplice = function(array, spliceIdx, spliceCount, newElems, parent2) {
      var spliceArgs = [spliceIdx, spliceCount].concat(newElems), prev = array[spliceIdx - 1] || null, next = array[spliceIdx] || null;
      var idx, len, prevIdx, node2, oldParent;
      for (idx = 0, len = newElems.length; idx < len; ++idx) {
        node2 = newElems[idx];
        oldParent = node2.parent || node2.root;
        prevIdx = oldParent && oldParent.children.indexOf(newElems[idx]);
        if (oldParent && prevIdx > -1) {
          oldParent.children.splice(prevIdx, 1);
          if (parent2 === oldParent && spliceIdx > prevIdx) {
            spliceArgs[0]--;
          }
        }
        node2.root = null;
        node2.parent = parent2;
        if (node2.prev) {
          node2.prev.next = node2.next || null;
        }
        if (node2.next) {
          node2.next.prev = node2.prev || null;
        }
        node2.prev = newElems[idx - 1] || prev;
        node2.next = newElems[idx + 1] || next;
      }
      if (prev) {
        prev.next = newElems[0];
      }
      if (next) {
        next.prev = newElems[newElems.length - 1];
      }
      return array.splice.apply(array, spliceArgs);
    };
    exports.appendTo = function(target2) {
      if (!target2.cheerio) {
        target2 = this.constructor.call(this.constructor, target2, null, this._originalRoot);
      }
      target2.append(this);
      return this;
    };
    exports.prependTo = function(target2) {
      if (!target2.cheerio) {
        target2 = this.constructor.call(this.constructor, target2, null, this._originalRoot);
      }
      target2.prepend(this);
      return this;
    };
    exports.append = _insert(function(dom, children, parent2) {
      uniqueSplice(children, children.length, 0, dom, parent2);
    });
    exports.prepend = _insert(function(dom, children, parent2) {
      uniqueSplice(children, 0, 0, dom, parent2);
    });
    exports.wrap = function(wrapper) {
      var wrapperFn = typeof wrapper === "function" && wrapper, lastIdx = this.length - 1;
      _2.forEach(this, _2.bind(function(el2, i2) {
        var parent2 = el2.parent || el2.root, siblings = parent2.children, wrapperDom, elInsertLocation, j2, index;
        if (!parent2) {
          return;
        }
        if (wrapperFn) {
          wrapper = wrapperFn.call(el2, i2);
        }
        if (typeof wrapper === "string" && !isHtml(wrapper)) {
          wrapper = this.parents().last().find(wrapper).clone();
        }
        wrapperDom = this._makeDomArray(wrapper, i2 < lastIdx).slice(0, 1);
        elInsertLocation = wrapperDom[0];
        j2 = 0;
        while (elInsertLocation && elInsertLocation.children) {
          if (j2 >= elInsertLocation.children.length) {
            break;
          }
          if (elInsertLocation.children[j2].type === "tag") {
            elInsertLocation = elInsertLocation.children[j2];
            j2 = 0;
          } else {
            j2++;
          }
        }
        index = siblings.indexOf(el2);
        updateDOM([el2], elInsertLocation);
        uniqueSplice(siblings, index, 0, wrapperDom, parent2);
      }, this));
      return this;
    };
    exports.after = function() {
      var elems = slice.call(arguments), lastIdx = this.length - 1;
      domEach2(this, function(i2, el2) {
        var parent2 = el2.parent || el2.root;
        if (!parent2) {
          return;
        }
        var siblings = parent2.children, index = siblings.indexOf(el2), domSrc, dom;
        if (index < 0)
          return;
        if (typeof elems[0] === "function") {
          domSrc = elems[0].call(el2, i2, $2.html(el2.children));
        } else {
          domSrc = elems;
        }
        dom = this._makeDomArray(domSrc, i2 < lastIdx);
        uniqueSplice(siblings, index + 1, 0, dom, parent2);
      });
      return this;
    };
    exports.insertAfter = function(target2) {
      var clones = [], self2 = this;
      if (typeof target2 === "string") {
        target2 = this.constructor.call(this.constructor, target2, null, this._originalRoot);
      }
      target2 = this._makeDomArray(target2);
      self2.remove();
      domEach2(target2, function(i2, el2) {
        var clonedSelf = self2._makeDomArray(self2.clone());
        var parent2 = el2.parent || el2.root;
        if (!parent2) {
          return;
        }
        var siblings = parent2.children, index = siblings.indexOf(el2);
        if (index < 0)
          return;
        uniqueSplice(siblings, index + 1, 0, clonedSelf, parent2);
        clones.push(clonedSelf);
      });
      return this.constructor.call(this.constructor, this._makeDomArray(clones));
    };
    exports.before = function() {
      var elems = slice.call(arguments), lastIdx = this.length - 1;
      domEach2(this, function(i2, el2) {
        var parent2 = el2.parent || el2.root;
        if (!parent2) {
          return;
        }
        var siblings = parent2.children, index = siblings.indexOf(el2), domSrc, dom;
        if (index < 0)
          return;
        if (typeof elems[0] === "function") {
          domSrc = elems[0].call(el2, i2, $2.html(el2.children));
        } else {
          domSrc = elems;
        }
        dom = this._makeDomArray(domSrc, i2 < lastIdx);
        uniqueSplice(siblings, index, 0, dom, parent2);
      });
      return this;
    };
    exports.insertBefore = function(target2) {
      var clones = [], self2 = this;
      if (typeof target2 === "string") {
        target2 = this.constructor.call(this.constructor, target2, null, this._originalRoot);
      }
      target2 = this._makeDomArray(target2);
      self2.remove();
      domEach2(target2, function(i2, el2) {
        var clonedSelf = self2._makeDomArray(self2.clone());
        var parent2 = el2.parent || el2.root;
        if (!parent2) {
          return;
        }
        var siblings = parent2.children, index = siblings.indexOf(el2);
        if (index < 0)
          return;
        uniqueSplice(siblings, index, 0, clonedSelf, parent2);
        clones.push(clonedSelf);
      });
      return this.constructor.call(this.constructor, this._makeDomArray(clones));
    };
    exports.remove = function(selector) {
      var elems = this;
      if (selector)
        elems = elems.filter(selector);
      domEach2(elems, function(i2, el2) {
        var parent2 = el2.parent || el2.root;
        if (!parent2) {
          return;
        }
        var siblings = parent2.children, index = siblings.indexOf(el2);
        if (index < 0)
          return;
        siblings.splice(index, 1);
        if (el2.prev) {
          el2.prev.next = el2.next;
        }
        if (el2.next) {
          el2.next.prev = el2.prev;
        }
        el2.prev = el2.next = el2.parent = el2.root = null;
      });
      return this;
    };
    exports.replaceWith = function(content) {
      var self2 = this;
      domEach2(this, function(i2, el2) {
        var parent2 = el2.parent || el2.root;
        if (!parent2) {
          return;
        }
        var siblings = parent2.children, dom = self2._makeDomArray(typeof content === "function" ? content.call(el2, i2, el2) : content), index;
        updateDOM(dom, null);
        index = siblings.indexOf(el2);
        uniqueSplice(siblings, index, 1, dom, parent2);
        el2.parent = el2.prev = el2.next = el2.root = null;
      });
      return this;
    };
    exports.empty = function() {
      domEach2(this, function(i2, el2) {
        _2.forEach(el2.children, function(child2) {
          child2.next = child2.prev = child2.parent = null;
        });
        el2.children.length = 0;
      });
      return this;
    };
    exports.html = function(str) {
      if (str === void 0) {
        if (!this[0] || !this[0].children)
          return null;
        return $2.html(this[0].children, this.options);
      }
      var opts = this.options;
      domEach2(this, function(i2, el2) {
        _2.forEach(el2.children, function(child2) {
          child2.next = child2.prev = child2.parent = null;
        });
        var content = str.cheerio ? str.clone().get() : evaluate("" + str, opts, false);
        updateDOM(content, el2);
      });
      return this;
    };
    exports.toString = function() {
      return $2.html(this, this.options);
    };
    exports.text = function(str) {
      if (str === void 0) {
        return $2.text(this);
      } else if (typeof str === "function") {
        return domEach2(this, function(i2, el2) {
          var $el = [el2];
          return exports.text.call($el, str.call(el2, i2, $2.text($el)));
        });
      }
      domEach2(this, function(i2, el2) {
        _2.forEach(el2.children, function(child2) {
          child2.next = child2.prev = child2.parent = null;
        });
        var elem = {
          data: "" + str,
          type: "text",
          parent: el2,
          prev: null,
          next: null,
          children: []
        };
        updateDOM(elem, el2);
      });
      return this;
    };
    exports.clone = function() {
      return this._make(cloneDom(this.get(), this.options));
    };
  })(manipulation);
  return manipulation;
}
var css = {};
var assignValue = _assignValue, castPath$1 = _castPath, isIndex = _isIndex, isObject = isObject_1, toKey = _toKey;
function baseSet$1(object, path2, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path2 = castPath$1(path2, object);
  var index = -1, length = path2.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey(path2[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path2[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var _baseSet = baseSet$1;
var baseGet = _baseGet, baseSet = _baseSet, castPath = _castPath;
function basePickBy$1(object, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path2 = paths[index], value = baseGet(object, path2);
    if (predicate(value, path2)) {
      baseSet(result, castPath(path2, object), value);
    }
  }
  return result;
}
var _basePickBy = basePickBy$1;
var basePickBy = _basePickBy, hasIn = hasIn_1;
function basePick$1(object, paths) {
  return basePickBy(object, paths, function(value, path2) {
    return hasIn(object, path2);
  });
}
var _basePick = basePick$1;
var flatten = flatten_1, overRest = _overRest, setToString = _setToString;
function flatRest$1(func) {
  return setToString(overRest(func, void 0, flatten), func + "");
}
var _flatRest = flatRest$1;
var basePick = _basePick, flatRest = _flatRest;
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
var pick_1 = pick;
var domEach = utils.domEach, _$1 = {
  pick: pick_1
};
var toString = Object.prototype.toString;
css.css = function(prop2, val) {
  if (arguments.length === 2 || // When `prop` is a "plain" object
  toString.call(prop2) === "[object Object]") {
    return domEach(this, function(idx, el2) {
      setCss(el2, prop2, val, idx);
    });
  } else {
    return getCss(this[0], prop2);
  }
};
function setCss(el2, prop2, val, idx) {
  if ("string" == typeof prop2) {
    var styles = getCss(el2);
    if (typeof val === "function") {
      val = val.call(el2, idx, styles[prop2]);
    }
    if (val === "") {
      delete styles[prop2];
    } else if (val != null) {
      styles[prop2] = val;
    }
    el2.attribs.style = stringify(styles);
  } else if ("object" == typeof prop2) {
    Object.keys(prop2).forEach(function(k) {
      setCss(el2, k, prop2[k]);
    });
  }
}
function getCss(el2, prop2) {
  var styles = parse2(el2.attribs.style);
  if (typeof prop2 === "string") {
    return styles[prop2];
  } else if (Array.isArray(prop2)) {
    return _$1.pick(styles, prop2);
  } else {
    return styles;
  }
}
function stringify(obj) {
  return Object.keys(obj || {}).reduce(function(str, prop2) {
    return str += (str ? " " : "") + prop2 + ": " + obj[prop2] + ";";
  }, "");
}
function parse2(styles) {
  styles = (styles || "").trim();
  if (!styles)
    return {};
  return styles.split(";").reduce(function(obj, str) {
    var n = str.indexOf(":");
    if (n < 1 || n === str.length - 1)
      return obj;
    obj[str.slice(0, n).trim()] = str.slice(n + 1).trim();
    return obj;
  }, {});
}
var forms = {};
var baseEach = _baseEach, isArrayLike = isArrayLike_1;
function baseMap$1(collection, iteratee) {
  var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
var _baseMap = baseMap$1;
var arrayMap = _arrayMap, baseIteratee = _baseIteratee, baseMap = _baseMap, isArray = isArray_1;
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}
var map_1 = map;
var submittableSelector = "input,select,textarea,keygen", r20 = /%20/g, rCRLF = /\r?\n/g, _ = {
  map: map_1
};
forms.serialize = function() {
  var arr = this.serializeArray();
  var retArr = _.map(arr, function(data) {
    return encodeURIComponent(data.name) + "=" + encodeURIComponent(data.value);
  });
  return retArr.join("&").replace(r20, "+");
};
forms.serializeArray = function() {
  var Cheerio = this.constructor;
  return this.map(function() {
    var elem = this;
    var $elem = Cheerio(elem);
    if (elem.name === "form") {
      return $elem.find(submittableSelector).toArray();
    } else {
      return $elem.filter(submittableSelector).toArray();
    }
  }).filter(
    // Verify elements have a name (`attr.name`) and are not disabled (`:disabled`)
    '[name!=""]:not(:disabled):not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))'
    // Convert each of the elements to its value(s)
  ).map(function(i2, elem) {
    var $elem = Cheerio(elem);
    var name2 = $elem.attr("name");
    var value = $elem.val();
    if (value == null) {
      value = "";
    }
    if (Array.isArray(value)) {
      return _.map(value, function(val) {
        return { name: name2, value: val.replace(rCRLF, "\r\n") };
      });
    } else {
      return { name: name2, value: value.replace(rCRLF, "\r\n") };
    }
  }).get();
};
var hasRequiredCheerio;
function requireCheerio() {
  if (hasRequiredCheerio)
    return cheerioExports;
  hasRequiredCheerio = 1;
  var parse3 = parseExports, defaultOptions = options.default, flattenOptions = options.flatten, isHtml = utils.isHtml, _2 = {
    extend: assignIn_1,
    bind: bind_1,
    forEach: forEach_1,
    defaults: defaults_1
  };
  var api = [
    requireAttributes(),
    traversing,
    requireManipulation(),
    css,
    forms
  ];
  var Cheerio = cheerio.exports = function(selector, context, root2, options2) {
    if (!(this instanceof Cheerio))
      return new Cheerio(selector, context, root2, options2);
    this.options = _2.defaults(flattenOptions(options2), this.options, defaultOptions);
    if (!selector)
      return this;
    if (root2) {
      if (typeof root2 === "string")
        root2 = parse3(root2, this.options, false);
      this._root = Cheerio.call(this, root2);
    }
    if (selector.cheerio)
      return selector;
    if (isNode(selector))
      selector = [selector];
    if (Array.isArray(selector)) {
      _2.forEach(selector, _2.bind(function(elem, idx) {
        this[idx] = elem;
      }, this));
      this.length = selector.length;
      return this;
    }
    if (typeof selector === "string" && isHtml(selector)) {
      return Cheerio.call(this, parse3(selector, this.options, false).children);
    }
    if (!context) {
      context = this._root;
    } else if (typeof context === "string") {
      if (isHtml(context)) {
        context = parse3(context, this.options, false);
        context = Cheerio.call(this, context);
      } else {
        selector = [context, selector].join(" ");
        context = this._root;
      }
    } else if (!context.cheerio) {
      context = Cheerio.call(this, context);
    }
    if (!context)
      return this;
    return context.find(selector);
  };
  _2.extend(Cheerio, require_static());
  Cheerio.prototype.cheerio = "[cheerio object]";
  Cheerio.prototype.length = 0;
  Cheerio.prototype.splice = Array.prototype.splice;
  Cheerio.prototype._make = function(dom, context) {
    var cheerio2 = new this.constructor(dom, context, this._root, this.options);
    cheerio2.prevObject = this;
    return cheerio2;
  };
  Cheerio.prototype.toArray = function() {
    return this.get();
  };
  api.forEach(function(mod) {
    _2.extend(Cheerio.prototype, mod);
  });
  var isNode = function(obj) {
    return obj.name || obj.type === "text" || obj.type === "comment";
  };
  return cheerioExports;
}
const name = "cheerio";
const version = "1.0.0-rc.3";
const description = "Tiny, fast, and elegant implementation of core jQuery designed specifically for the server";
const author = "Matt Mueller <mattmuelle@gmail.com> (mat.io)";
const license = "MIT";
const keywords = [
  "htmlparser",
  "jquery",
  "selector",
  "scraper",
  "parser",
  "html"
];
const repository = {
  type: "git",
  url: "git://github.com/cheeriojs/cheerio.git"
};
const main = "./index.js";
const files = [
  "index.js",
  "lib"
];
const engines = {
  node: ">= 0.6"
};
const dependencies = {
  "css-select": "~1.2.0",
  "dom-serializer": "~0.1.1",
  entities: "~1.1.1",
  htmlparser2: "^3.9.1",
  lodash: "^4.15.0",
  parse5: "^3.0.1"
};
const devDependencies = {
  benchmark: "^2.1.0",
  coveralls: "^2.11.9",
  "expect.js": "~0.3.1",
  istanbul: "^0.4.3",
  jquery: "^3.0.0",
  jsdom: "^9.2.1",
  jshint: "^2.9.2",
  mocha: "^3.1.2",
  xyz: "~1.1.0"
};
const scripts = {
  test: "make test"
};
const require$$1 = {
  name,
  version,
  description,
  author,
  license,
  keywords,
  repository,
  main,
  files,
  engines,
  dependencies,
  devDependencies,
  scripts
};
(function(module, exports) {
  exports = module.exports = requireCheerio();
  exports.version = require$$1.version;
})(cheerio$1, cheerioExports$1);
(function(exports) {
  exports.__esModule = true;
  exports.parseByPath = exports.parseByString = exports.getRootFolder = exports.MarkType = void 0;
  var fs_1 = fs;
  var cheerio_1 = cheerioExports$1;
  (function(MarkType) {
    MarkType["folder"] = "folder";
    MarkType["site"] = "site";
  })(exports.MarkType || (exports.MarkType = {}));
  exports.getRootFolder = function(body) {
    var h3 = body.find("h3").first();
    var isChrome = typeof h3.attr("personal_toolbar_folder") === "string";
    if (isChrome) {
      return body.children("dl").first();
    }
    var isSafari = typeof h3.attr("folded") === "string";
    if (isSafari) {
      return body;
    }
    var isIE = typeof h3.attr("item_id") === "string";
    if (isIE) {
      return body.children("dl").first();
    }
    var isFireFox = h3.text() === "Mozilla Firefox";
    if (isFireFox) {
      return body.children("dl").first();
    }
    return body.children("dl").first();
  };
  exports.parseByString = function(content) {
    var $2 = cheerio_1.load(content, {
      decodeEntities: false
    });
    var body = $2("body");
    var root2 = [];
    var rdt = exports.getRootFolder(body).children("dt");
    var parseNode = function(node2) {
      var eq0 = node2.children().eq(0);
      var name2 = eq0.html() || "";
      var type = "site";
      var href = "";
      var icon2 = "";
      var children = [];
      switch (eq0[0].name) {
        case "h3":
          type = "folder";
          var dl = node2.children("dl").first();
          var dts = dl.children();
          var ls = dts.toArray().map(function(ele) {
            if (ele.name !== "dt")
              return null;
            return parseNode($2(ele));
          });
          children = ls.filter(function(item) {
            return item !== null;
          });
        case "a":
          href = eq0.attr("href") || "";
          icon2 = eq0.attr("icon") || "";
      }
      return {
        name: name2,
        type,
        href,
        icon: icon2,
        children
      };
    };
    rdt.each(function(_2, item) {
      var node2 = $2(item);
      var child2 = parseNode(node2);
      root2.push(child2);
    });
    return root2;
  };
  exports.parseByPath = function(path2) {
    var content = fs_1.readFileSync(path2, "utf-8");
    return exports.parseByString(content);
  };
  exports["default"] = { parseByPath: exports.parseByPath, parseByString: exports.parseByString };
})(lib$2);
const USER_DATA_PATH = electron.app.getPath("userData");
const STORAGE_PATH = USER_DATA_PATH + "/storage/database";
const CleePIXMain = {
  Windows: {},
  storage: {},
  configTemp: {},
  config: new Store({ encryptionKey: "ymzkrk33" }),
  run: function() {
    if (this.config.size === 0) {
      this.config.store = {
        instance: [{
          label: "default",
          id: 1,
          path: STORAGE_PATH + `/ite_${randomString()}.db`
        }, {
          label: "main",
          id: 2,
          path: STORAGE_PATH + `/ite_${randomString()}.db`
        }]
      };
    }
    this.configTemp = this.config.store;
    this.config.store.instance.forEach((db) => {
      this.initializeDB(db);
    });
    const bookmarks = lib$2.parseByPath("./お気に入り_2023_04_03.html");
    console.log(bookmarks);
    electron.app.whenReady().then(() => {
      this.Windows.main = this.createWindowInstance();
      electron.app.on("activate", () => {
        if (electron.BrowserWindow.getAllWindows().length === 0)
          CleePIXMain.createWindowInstance();
      });
    });
    electron.ipcMain.handle("get-instance-db", () => {
      return this.config.store.instance;
    });
    electron.ipcMain.on("window-close", () => {
      Object.values(this.storage).forEach((value) => {
        value.db?.close();
      });
      electron.app.quit();
    });
    electron.ipcMain.on("window-maximize", () => {
      if (this.Windows.main?.isMaximized()) {
        this.Windows.main?.unmaximize();
      } else
        this.Windows.main?.maximize();
    });
    electron.ipcMain.on("window-minize", () => {
      this.Windows.main?.minimize();
    });
    electron.app.on("window-all-closed", () => {
      if (process.platform !== "darwin") {
        electron.app.quit();
      }
    });
    electron.ipcMain.on("ite-name-update", (_2, ite) => {
      this.config.store.instance.forEach((i2, index) => {
        if (i2.id == ite.id) {
          this.configTemp.instance[index].label = ite.name;
          this.config.store = this.configTemp;
          return;
        }
      });
    });
    electron.ipcMain.handle("add-instance", () => {
      this.configTemp.instance = this.configTemp.instance?.sort((a, b) => {
        return a.id < b.id ? -1 : 1;
      });
      const newId = this.configTemp.instance.slice(-1)[0].id + 1;
      const newInstance = { label: "new instance", id: newId, path: STORAGE_PATH + `/ite_${randomString()}.db` };
      this.configTemp.instance?.push(newInstance);
      this.initializeDB(newInstance);
      this.config.store = this.configTemp;
      this.Windows.main?.webContents.send("instance-update", this.config.store);
      return newInstance;
    });
    electron.ipcMain.on("remove-instance", (_2, id) => {
      let instancePath = "";
      let instanceId = 0;
      let indexTemp = 0;
      this.configTemp.instance?.forEach((ite, index) => {
        if (ite.id === id) {
          indexTemp = index;
          instanceId = ite.id;
          instancePath = ite.path;
          return;
        }
      });
      this.storage[instanceId].db?.close();
      fs.unlink(instancePath, (e) => {
        console.log(e);
        if (e === null) {
          delete this.storage[instanceId];
          this.configTemp.instance?.splice(indexTemp, 1);
          this.config.store = this.configTemp;
          this.Windows.main?.webContents.send("ite-change", this.config.store);
        }
      });
    });
    electron.ipcMain.handle("get-add-tag-list", async (_2, query) => {
      return this.storage[query.id].db?.prepare(
        `SELECT * FROM tags WHERE name LIKE ?`
      ).all(query.keyword + "%");
    });
    electron.ipcMain.handle("add-tag-suggest", (_2, query) => {
      return this.storage[query.id].db?.prepare(
        `SELECT * FROM tags WHERE name LIKE ?`
      ).get(query.value + "%");
    });
    electron.ipcMain.handle("add-tag", (_2, query) => {
      let res = null;
      let child_id = 0;
      try {
        res = this.storage[query.instanceId].db?.prepare(
          `SELECT * FROM tags WHERE name = ?`
        ).get(query.name);
        child_id = res === void 0 ? 0 : res.id;
        if (res === void 0) {
          res = this.storage[query.instanceId].db.prepare(
            `INSERT INTO tags (name) VALUES ( ? )`
          ).run(query.name);
          child_id = res.lastInsertRowid;
        }
        this.storage[query.instanceId].db.prepare(
          `INSERT INTO tags_structure (parent_id, child_id) VALUES ( ?, ? )`
        ).run(query.parentTagId !== null ? query.parentTagId : 0, child_id);
        return res;
      } catch (e) {
        console.log(e);
        return null;
      }
    });
    electron.ipcMain.handle("update-tag-name", (_2, query) => {
      let res = null;
      try {
        res = this.storage[query.instanceId].db?.prepare(
          `SELECT * FROM tags WHERE name = ?`
        ).get(query.name);
        if (res === void 0) {
          res = this.storage[query.instanceId].db.prepare(
            `UPDATE tags SET name = ? WHERE id = ?`
          ).run(query.name, query.tagId);
        }
        console.log(query);
        return res;
      } catch (e) {
        console.log(e);
        return null;
      }
    });
    electron.ipcMain.handle("get-tag-tree", async (_2, id) => {
      let res, editres = [];
      try {
        res = this.storage[id].db?.prepare(`SELECT * FROM tags`).all();
        const isParentQuery = this.storage[id].db?.prepare(`SELECT * FROM tags_structure WHERE parent_id = ?`);
        const isHit = isParentQuery?.all(0);
        res.forEach((tag2) => {
          isHit.forEach((hit) => {
            if (tag2.id === hit.child_id) {
              editres.push(tag2);
            }
          });
        });
      } catch (e) {
        res = null;
      }
      return editres;
    });
    electron.ipcMain.handle("get-sub-tags", (_2, res) => {
      const tagsStructure = this.storage[res.instanceId].db?.prepare(`SELECT * FROM tags_structure WHERE parent_id = ?`);
      const tags2 = this.storage[res.instanceId].db?.prepare(`SELECT * FROM tags WHERE id = ?`);
      const tagsRes = [];
      tagsStructure?.all(res.tagId).forEach((structure) => {
        tagsRes.push(tags2?.get(structure.child_id));
      });
      return tagsRes;
    });
  },
  initializeDB: function(storage) {
    this.storage[storage.id] = {};
    this.storage[storage.id].stmt = {};
    if (fs.existsSync(STORAGE_PATH) && fs.existsSync(storage.path)) {
      this.storage[storage.id].db = new Database(storage.path);
      return;
    }
    const initDB = () => {
      this.storage[storage.id].db = new Database(storage.path);
      this.storage[storage.id].db.prepare(
        `CREATE TABLE "bookmarks" (
              "id"	INTEGER NOT NULL UNIQUE, "type"	TEXT NOT NULL,
              "title"	TEXT NOT NULL, "description"	TEXT,
              "data"	TEXT NOT NULL, "thunb"	TEXT NOT NULL,
              "register_time"	TEXT NOT NULL DEFAULT '2023-03-05 06:00:00',
              "update_time"	TEXT NOT NULL DEFAULT '2023-03-05 06:00:00',
              PRIMARY KEY("id" AUTOINCREMENT)
            )`
      ).run();
      this.storage[storage.id].db.prepare(
        `CREATE TABLE "tags" (
              "id"	INTEGER UNIQUE, "name"  TEXT NOT NULL UNIQUE,
              "font_color"	TEXT NOT NULL DEFAULT '#c6c4be',
              "bg_color"	TEXT NOT NULL DEFAULT 'gray',
              "register_time"	TEXT NOT NULL DEFAULT '2023-03-05 06:00:00',
              "update_time"	TEXT NOT NULL DEFAULT '2023-03-05 06:00:00',
              PRIMARY KEY("id" AUTOINCREMENT)
            )`
      ).run();
      this.storage[storage.id].db.prepare(
        `CREATE TABLE "tags_bookmarks" (
              "tags_id"	INTEGER NOT NULL, "bookmark_id"	INTEGER NOT NULL,
              FOREIGN KEY("bookmark_id") REFERENCES "bookmarks"("id") on delete cascade,
              FOREIGN KEY("tags_id") REFERENCES "tags"("id") on delete cascade,
              PRIMARY KEY("tags_id","bookmark_id")
            )`
      ).run();
      this.storage[storage.id].db.prepare(
        `CREATE TABLE "tags_structure" (
              "parent_id"	INTEGER NOT NULL, "child_id"	INTEGER NOT NULL,
              FOREIGN KEY("child_id") REFERENCES "tags"("id") ON DELETE CASCADE,
              PRIMARY KEY("parent_id", "child_id")
            )`
      ).run();
      [
        "プログラミング",
        "プログラミング言語",
        "プロミス",
        "プロパンガス",
        "engineer",
        "エンジニア",
        "Programming",
        "promise",
        "glass",
        "グラス",
        "Python",
        "C/C++",
        "JavaScript",
        "TypeScript",
        "PHP",
        "HTML",
        "SCSS",
        "Rust",
        "フリーランス",
        "フルスタック",
        "インフラ",
        "フロントエンド",
        "サーバーサイド"
      ].forEach((word) => {
        this.storage[storage.id].db.prepare(
          `INSERT INTO tags (name) VALUES ( ? )`
        ).run(word);
      });
      for (let i2 = 1; i2 <= 10; i2++) {
        this.storage[storage.id].db.prepare(
          `INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`
        ).run(0, i2);
      }
      for (let i2 = 11; i2 <= 18; i2++) {
        this.storage[storage.id].db.prepare(
          `INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`
        ).run(2, i2);
      }
      for (let i2 = 19; i2 <= 23; i2++) {
        this.storage[storage.id].db.prepare(
          `INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`
        ).run(6, i2);
      }
    };
    if (!fs.existsSync(STORAGE_PATH)) {
      fs.mkdir(STORAGE_PATH, (err) => {
        if (err === null) {
          initDB();
        }
      });
    } else
      initDB();
  },
  createWindowInstance: function() {
    const window2 = new electron.BrowserWindow({
      width: 1360,
      height: 830,
      show: false,
      frame: false,
      autoHideMenuBar: true,
      backgroundColor: "#0f0f0f",
      ...process.platform === "linux" ? { icon } : {},
      webPreferences: {
        preload: path.join(__dirname, "../preload/index.js"),
        sandbox: false,
        webviewTag: true
      }
    });
    window2.on("ready-to-show", () => {
      window2.show();
    });
    window2.webContents.setWindowOpenHandler((details) => {
      electron.shell.openExternal(details.url);
      return { action: "deny" };
    });
    if (!electron.app.isPackaged && process.env["ELECTRON_RENDERER_URL"]) {
      window2.loadURL(process.env["ELECTRON_RENDERER_URL"]);
    } else {
      window2.loadFile(path.join(__dirname, "../renderer/index.html"));
    }
    return window2;
  }
};
function randomString(len = 10) {
  let str = "0123456789abcdefghijklmnopqrstuvwxyz";
  let strLen = str.length;
  let result = "";
  for (let i2 = 0; i2 < len; i2++) {
    result += str[Math.floor(Math.random() * strLen)];
  }
  return result;
}
CleePIXMain.run();
