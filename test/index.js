const expect = require('chai').expect
const pinyin = require('../')

describe('中文转拼音测试', () => {
  it('无汉字', () => {
    expect(pinyin('Kevin Xiao')).to.equal('Kevin Xiao')
  })
  it('默认翻译', () => {
    expect(pinyin('今天天气真好')).to.equal('jīn tiān tiān qì zhēn hǎo')
  })
  it('略去声调', () => {
    expect(pinyin('今天天气真好', { removeTone: true })).to.equal('jin tian tian qi zhen hao')
  })
  it('声调转数字', () => {
    expect(pinyin('今天的天气真好', { toneToNumber: true })).to.equal('jin1 tian1 de1 tian1 qi4 zhen1 hao3')
  })
  it('声调转数字,只输出音调', () => {
    expect(pinyin('今天天气真好', { toneToNumberOnly: true })).to.equal('1 1 1 4 1 3')
  })
  it('不忽略非中文字符', () => {
    expect(pinyin('1今a天bb天ccc气dd dd真e好fff', { keepRest: true })).to.equal('1 jīn a tiān bb tiān ccc qì dd dd zhēn e hǎo fff')
  })
  it('获取汉字的首字母', () => {
    expect(pinyin('今天天气真好', { firstCharacter: true })).to.equal('j t t q z h')
  })
  it('获取汉字的首字母(忽略非中文字符)', () => {
    expect(pinyin('铺天盖地', { firstCharacter: true })).to.equal('p t g d')
  })
  it('获取汉字的首字母(不忽略非中文字符)', () => {
    expect(pinyin('铺天盖地aaa', { keepRest: true, firstCharacter: true })).to.equal(' p  t  g  d aaa')
  })
  it('获取汉字的首字母(不忽略非中文字符)', () => {
    expect(pinyin('1今2天3天4气5真6好aaa', { keepRest: true, firstCharacter: true })).to.equal('1 j 2 t 3 t 4 q 5 z 6 h aaa')
  })
  it('获取汉字的首字母(忽略非中文字符)', () => {
    expect(pinyin('1今2天3天4气5真6好aaa', { firstCharacter: true })).to.equal('j t t q z h')
  })
})
