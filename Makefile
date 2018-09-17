GOLANG_DIR := "$(PWD)/golang"
GOTEST_DIR := "$(GOLANG_DIR)/gotest"

test_golang_gotest:
	@cd $(GOTEST_DIR) ; docker build .
