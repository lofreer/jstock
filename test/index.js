const assert = require('assert');
const jstock = require('../');

it("ma - moving average", function() {
    let t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const r = jstock.ma(t, 3);
    [1, 1.5, 2, 3, 4, 5, 6, 7, 8, 9].forEach((i, idx) => {
        assert.equal(r[idx], i )
    })

})
it("wma - weighted moving average", function() {
    let t = [1, 2, 3, 4];
    const r = jstock.wma(t, 3);
    [1, 8/5, 14/6, 20 / 6].forEach((i, idx) => {
        assert.equal(r[idx], i)
    })
})
it("ema - Exponential moving average", function() {
    let t = [1, 2, 3, 4]
    const r = jstock.ema(t, 3);
    [1, 1.5, 2.25, 3.125].forEach((i, idx) => {
        assert.equal(r[idx], i)
    })
})
it("macd", function() {
    let t = [1, 2, 3, 4]
    //fast = [1, 1.5, 2.25, 3.125]
    //slow = [1, 1.2, 1.56, 2.048]
    const r = jstock.macd(t, 3, 9, 7);
    [0, 0.3, 0.69, 1.077].forEach((i, idx) => {
        assert.equal(r.dif[idx].toPrecision(2), i.toPrecision(2))
    });
    [0, 0.075, 0.22875, 0.4408125].forEach((i, idx) => {
        assert.equal(r.dea[idx].toPrecision(2), i.toPrecision(2))
    });
    [0, 0.45, 0.9225, 1.272375].forEach((i, idx) => {
        assert.equal(r.bar[idx].toPrecision(2), i.toPrecision(2))
    })
})

it("boll", function() {
    let t = [1, 2, 3, 4]
    //ma(3) [1, 1.5, 2, 3]
    const r = jstock.boll(t, 3);
    [1, 1.5, 2, 3].forEach((i, idx) => {
        assert.equal(r.mb[idx], i)
    });
    [1, 2.5, 3.6329, 4.6329].forEach((i, idx) => {
        assert.equal(r.up[idx].toPrecision(2), i.toPrecision(2))
    })
})

it("kdj", function() {
    let h = [2, 3, 4, 5]
    let t = [1, 2, 3, 4]
    let l = [0, 1, 2, 3]
    //rsv = [50, 66.6666, 75, 75]
    const r = jstock.kdj(t, h, l, 3);
    [50, 55.5555, 62.0370, 66.358].forEach((i, idx) => {
        assert.equal(r.k[idx].toPrecision(2), i.toPrecision(2))
    });
    [50, 51.8518, 55.2468, 58.9505].forEach((i, idx) => {
        assert.equal(r.d[idx].toPrecision(2), i.toPrecision(2))
    })
})
