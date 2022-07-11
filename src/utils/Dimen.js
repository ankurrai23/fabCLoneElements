import {Dimensions} from 'react-native';

function calculateDimen(size) {
  if (size === 1) {
    return size;
  }
  if (Dimensions.get('window').width > 320) {
    return size;
  } else {
    return size * 0.88;
  }
}

export const DP = {
  minus_120: calculateDimen(-120),
  minus_40: calculateDimen(-40),
  minus_28: calculateDimen(-28),
  minus_24: calculateDimen(-24),
  minus_20: calculateDimen(-20),
  minus_16: calculateDimen(-16),
  minus_10: calculateDimen(-10),
  minus_8: calculateDimen(-8),
  minus_6: calculateDimen(-6),
  minus_5: calculateDimen(-5),
  minus_4: calculateDimen(-4),
  minus_2: calculateDimen(-2),
  minus_1: calculateDimen(-1),
  _0_5: calculateDimen(0.5),
  _1: calculateDimen(1),
  _1_5: calculateDimen(1.5),
  _2: calculateDimen(2),
  _3: calculateDimen(3),
  _4: calculateDimen(4),
  _5: calculateDimen(5),
  _6: calculateDimen(6),
  _7: calculateDimen(7),
  _8: calculateDimen(8),
  _9: calculateDimen(9),
  _10: calculateDimen(10),
  _11: calculateDimen(11),
  _12: calculateDimen(12),
  _13: calculateDimen(13),
  _14: calculateDimen(14),
  _15: calculateDimen(15),
  _16: calculateDimen(16),
  _17: calculateDimen(17),
  _18: calculateDimen(18),
  _19: calculateDimen(19),
  _20: calculateDimen(20),
  _21: calculateDimen(21),
  _22: calculateDimen(22),
  _22_3: calculateDimen(22.3),
  _23: calculateDimen(23),
  _24: calculateDimen(24),
  _25: calculateDimen(25),
  _26: calculateDimen(26),
  _26_3: calculateDimen(26.3),
  _27: calculateDimen(27),
  _28: calculateDimen(28),
  _29: calculateDimen(29),
  _30: calculateDimen(30),
  _31: calculateDimen(31),
  _32: calculateDimen(32),
  _33: calculateDimen(33),
  _34: calculateDimen(34),
  _35: calculateDimen(35),
  _36: calculateDimen(36),
  _37: calculateDimen(37),
  _38: calculateDimen(38),
  _39: calculateDimen(39),
  _40: calculateDimen(40),
  _41: calculateDimen(41),
  _42: calculateDimen(42),
  _43: calculateDimen(43),
  _44: calculateDimen(44),
  _45: calculateDimen(45),
  _46: calculateDimen(46),
  _47: calculateDimen(47),
  _48: calculateDimen(48),
  _49: calculateDimen(49),
  _50: calculateDimen(50),
  _51: calculateDimen(51),
  _52: calculateDimen(52),
  _53: calculateDimen(53),
  _59: calculateDimen(59),
  _54: calculateDimen(54),
  _55: calculateDimen(55),
  _56: calculateDimen(56),
  _57: calculateDimen(57),
  _58: calculateDimen(58),
  _60: calculateDimen(60),
  _63: calculateDimen(63),
  _64: calculateDimen(64),
  _65: calculateDimen(65),
  _66: calculateDimen(66),
  _67: calculateDimen(67),
  _68: calculateDimen(68),
  _69: calculateDimen(69),
  _70: calculateDimen(70),
  _72: calculateDimen(72),
  _74: calculateDimen(74),
  _76: calculateDimen(76),
  _77: calculateDimen(77),
  _78: calculateDimen(78),
  _80: calculateDimen(80),
  _82: calculateDimen(82),
  _84: calculateDimen(84),
  _85: calculateDimen(85),
  _86: calculateDimen(86),
  _87: calculateDimen(87),
  _88: calculateDimen(88),
  _90: calculateDimen(90),
  _91: calculateDimen(91),
  _92: calculateDimen(92),
  _95: calculateDimen(95),
  _96: calculateDimen(96),
  _97: calculateDimen(97),
  _98: calculateDimen(98),
  _100: calculateDimen(100),
  _102: calculateDimen(102),
  _103: calculateDimen(103),
  _104: calculateDimen(104),
  _106: calculateDimen(106),
  _108: calculateDimen(108),
  _109: calculateDimen(109),
  _110: calculateDimen(110),
  _111: calculateDimen(111),
  _112: calculateDimen(112),
  _115: calculateDimen(115),
  _116: calculateDimen(116),
  _119: calculateDimen(119),
  _120: calculateDimen(120),
  _122: calculateDimen(122),
  _123: calculateDimen(123),
  _124: calculateDimen(124),
  _126: calculateDimen(126),
  _127: calculateDimen(127),
  _128: calculateDimen(128),
  _130: calculateDimen(130),
  _131: calculateDimen(131),
  _132: calculateDimen(132),
  _133: calculateDimen(133),
  _136: calculateDimen(136),
  _138: calculateDimen(138),
  _140: calculateDimen(140),
  _142: calculateDimen(142),
  _143: calculateDimen(143),
  _144: calculateDimen(144),
  _145: calculateDimen(145),
  _146: calculateDimen(146),
  _148: calculateDimen(148),
  _150: calculateDimen(150),
  _151: calculateDimen(151),
  _153: calculateDimen(153),
  _154: calculateDimen(154),
  _157: calculateDimen(157),
  _160: calculateDimen(160),
  _161: calculateDimen(161),
  _164: calculateDimen(164),
  _165: calculateDimen(165),
  _166: calculateDimen(166),
  _168: calculateDimen(168),
  _170: calculateDimen(170),
  _174: calculateDimen(174),
  _175: calculateDimen(175),
  _176: calculateDimen(176),
  _178: calculateDimen(178),
  _180: calculateDimen(180),
  _184: calculateDimen(184),
  _186: calculateDimen(186),
  _190: calculateDimen(190),
  _192: calculateDimen(192),
  _200: calculateDimen(200),
  _205: calculateDimen(205),
  _210: calculateDimen(210),
  _212: calculateDimen(212),
  _216: calculateDimen(216),
  _218: calculateDimen(218),
  _220: calculateDimen(220),
  _224: calculateDimen(224),
  _225: calculateDimen(225),
  _227: calculateDimen(227),
  _230: calculateDimen(230),
  _233: calculateDimen(233),
  _236: calculateDimen(236),
  _240: calculateDimen(240),
  _248: calculateDimen(248),
  _242: calculateDimen(242),
  _250: calculateDimen(250),
  _252: calculateDimen(252),
  _260: calculateDimen(260),
  _265: calculateDimen(265),
  _270: calculateDimen(270),
  _255: calculateDimen(255),
  _256: calculateDimen(256),
  _258: calculateDimen(258),
  _262: calculateDimen(262),
  _273: calculateDimen(273),
  _274: calculateDimen(274),
  _278: calculateDimen(278),
  _280: calculateDimen(280),
  _290: calculateDimen(290),
  _296: calculateDimen(296),
  _305: calculateDimen(305),
  _300: calculateDimen(305),
  _310: calculateDimen(310),
  _312: calculateDimen(312),
  _316: calculateDimen(316),
  _320: calculateDimen(320),
  _322: calculateDimen(322),
  _326: calculateDimen(326),
  _327: calculateDimen(327),
  _328: calculateDimen(328),
  _330: calculateDimen(330),
  _338: calculateDimen(338),
  _340: calculateDimen(340),
  _350: calculateDimen(350),
  _370: calculateDimen(370),
  _375: calculateDimen(375),
  _390: calculateDimen(390),
  _400: calculateDimen(400),
  _420: calculateDimen(420),
  _430: calculateDimen(430),
  _485: calculateDimen(485),
  _500: calculateDimen(500),
  _600: calculateDimen(600),
  match_width: Dimensions.get('window').width,
  match_height: Dimensions.get('window').height,

  match_width2: Dimensions.get('screen').width,
  match_height2: Dimensions.get('screen').height,
};
