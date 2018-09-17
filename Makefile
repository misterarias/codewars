GOLANG_DIR := "$(PWD)/golang"
GOTEST_DIR := "$(GOLANG_DIR)/gotest"
RED := $(shell tput setaf 1)
GREEN := $(shell tput setaf 2)
ENDCOLOR := $(shell tput setaf sgr0)

.PHONY: help

help: ## Self-documentation target!!! Thanks https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
	grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "$(GREEN)%-30s$(ENDCOLOR)%s\n", $$1, $$2}'

test_golang_gotest:	## Runs 'go test' based test suite for Go using a Docker container
	@cd $(GOTEST_DIR) ; docker build .
