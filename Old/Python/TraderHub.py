from TraderControl import TraderControl as TraderControl
from TraderDetail import TraderDetail as TraderDetail
from TraderPlot import TraderPlot

config = 'config.json'

pl = TraderPlot()  

tc = TraderControl(config)

'''
kline= tc.get_kline_candles()

kline_detail = TraderDetail(kline)

heikin = kline_detail.get_heikin()
heikin_detail = TraderDetail(heikin)


pl.fig()
pl.plot_check_previous(heikin_detail.close,'green','red')
pl.show()
'''