const TABLES = [
  {
    id: 'main',
    label: 'メインテーブル',
    group: '',
    guests: [
      { name: '髙橋 慶太', kana: 'たかはし けいた', relation: '新郎', noSama: true },
      { name: '菊地 晴香', kana: 'きくち はるか', relation: '新婦', noSama: true },
    ]
  },
  {
    id: '03',
    label: 'テーブル 03',
    group: '新郎 ゲーム仲間',
    guests: [
      { name: '鈴木 勝貴', kana: 'すずき まさたか', relation: '新郎 ゲーム仲間' },
      { name: '伊藤 亜希良', kana: 'いとう あきら', relation: '新郎 ゲーム仲間' },
      { name: '湯浅 雅文', kana: 'ゆあさ まさふみ', relation: '新郎 ゲーム仲間' },
      { name: '北島 正皓', kana: 'きたじま まさひろ', relation: '新郎 ゲーム仲間' },
    ]
  },
  {
    id: '04',
    label: 'テーブル 04',
    group: '職場関係',
    guests: [
      { name: '小野 隼人', kana: 'おの はやと', relation: '新郎 高校友人' },
      { name: '栗原 登', kana: 'くりはら のぼる', relation: '新郎 元職場上司' },
      { name: '榊田 一樹', kana: 'さかきだ かずき', relation: '新郎新婦 元職場同僚' },
      { name: '鈴木 教之', kana: 'すずき のりゆき', relation: '新郎新婦 元職場同僚' },
      { name: '秋山 雄介', kana: 'あきやま ゆうすけ', relation: '新郎新婦 元職場同僚' },
    ]
  },
  {
    id: '05',
    label: 'テーブル 05',
    group: '職場関係',
    guests: [
      { name: '小玉 隼太郎', kana: 'こだま しゅんたろう', relation: '新婦 元職場上司' },
      { name: '豊福 亜季', kana: 'とよふく あき', relation: '新郎新婦 元職場同僚' },
      { name: '田野 弘奈', kana: 'たの ひろな', relation: '新郎新婦 元職場同僚' },
      { name: '渡邊 真美子', kana: 'わたなべ まみこ', relation: '新郎新婦 元職場同僚' },
      { name: '大沢 歩美', kana: 'おおさわ あゆみ', relation: '新郎新婦 元職場同僚' },
    ]
  },
  {
    id: '06',
    label: 'テーブル 06',
    group: '新婦 中学友人',
    guests: [
      { name: '永井 菜月', kana: 'ながい なつき', relation: '新婦 中学友人' },
      { name: '瀬戸山 葉月', kana: 'せとやま はづき', relation: '新婦 中学友人' },
      { name: '北澤 実咲', kana: 'きたざわ みさき', relation: '新婦 中学友人' },
    ]
  },
  {
    id: '08',
    label: 'テーブル 08',
    group: '新郎 ゲーム仲間',
    guests: [
      { name: '有馬 準', kana: 'ありま ひとし', relation: '新郎 ゲーム仲間' },
      { name: '登川 晶弘', kana: 'とがわ あきひろ', relation: '新郎 ゲーム仲間' },
      { name: '草間 大空', kana: 'くさま ひろたか', relation: '新郎 ゲーム仲間' },
      { name: '北垣 侑祐', kana: 'きたがき ゆうすけ', relation: '新郎 ゲーム仲間' },
      { name: '馬場 雄也', kana: 'ばば ゆうや', relation: '新郎 ゲーム仲間' },
    ]
  },
  {
    id: '09',
    label: 'テーブル 09',
    group: '新婦 友人・同期',
    guests: [
      { name: '古屋 美幸', kana: 'ふるや みゆき', relation: '新婦 元職場先輩' },
      { name: '仲原 優里奈', kana: 'なかはら ゆりな', relation: '新婦 元職場同期' },
      { name: '寳生 永梨', kana: 'ほうしょう えり', relation: '新婦 大学友人' },
      { name: '國本 実彩季', kana: 'くにもと みさき', relation: '新婦 元職場同期' },
      { name: '原田 友里', kana: 'はらだ ゆり', relation: '新婦 大学友人' },
      { name: '杉浦 玄佳', kana: 'すぎうら はるか', relation: '新婦 元職場同期' },
    ]
  },
  {
    id: '10',
    label: 'テーブル 10',
    group: '新婦 高校友人',
    guests: [
      { name: '小西 有香里', kana: 'こにし ゆかり', relation: '新婦 高校友人' },
      { name: '佐久間 佳美', kana: 'さくま よしみ', relation: '新婦 高校友人' },
      { name: '家中 明日香', kana: 'いえなか あすか', relation: '新婦 高校友人' },
      { name: '坂田 友紀', kana: 'さかた ゆうき', relation: '新婦 高校友人' },
      { name: '山下 真奈美', kana: 'やました まなみ', relation: '新婦 高校友人' },
    ]
  },
  {
    id: '12',
    label: 'テーブル 12',
    group: '新郎 ご家族',
    guests: [
      { name: '髙橋 凌也', kana: 'たかはし りょうや', relation: '新郎 兄', noSama: true },
      { name: '髙橋 智大', kana: 'たかはし ともひろ', relation: '新郎 兄', noSama: true },
      { name: '髙橋 あけみ', kana: 'たかはし あけみ', relation: '新郎 母', noSama: true },
      { name: '髙橋 直人', kana: 'たかはし なおと', relation: '新郎 父', noSama: true },
    ]
  },
  {
    id: '15',
    label: 'テーブル 15',
    group: '新婦 ご家族',
    guests: [
      { name: '菊地 希帆', kana: 'きくち きほ', relation: '新婦 義妹' },
      { name: '菊地 郁弥', kana: 'きくち ふみや', relation: '新婦 弟' },
      { name: '菊地 喜晴', kana: 'きくち よしはる', relation: '新婦 父', noSama: true },
      { name: '菊地 知子', kana: 'きくち ともこ', relation: '新婦 母', noSama: true },
    ]
  },
];
