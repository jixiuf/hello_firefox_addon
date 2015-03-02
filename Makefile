# -*- coding:utf-8 -*-
# .PHONY:run
.PHONY:test
run:
	cfx run
test:
	cfx test
xpi:
	cfx xpi
xpi-mobile:
	cfx xpi --force-mobile