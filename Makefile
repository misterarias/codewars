GOLANG_DIR := "$(PWD)/golang"
GOTEST_DIR := "$(GOLANG_DIR)/gotest"
GROOVY_DIR := "$(PWD)/groovy"

RED := $(shell tput setaf 1)
GREEN := $(shell tput setaf 2)
ENDCOLOR := $(shell tput setaf sgr0)

.PHONY: help

.DEFAULT_TARGET: help

help: ## Self-documentation target!!! Thanks https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "$(GREEN)%-30s$(ENDCOLOR)%s\n", $$1, $$2}'

test_golang_gotest:	## Runs 'go test' based test suite for Go using a Docker container
	@cd $(GOTEST_DIR) ; docker build .

test_all: test_golang_gotest test_groovy_cucumber ## Run all defined tests, sequentially

test_groovy_cucumber:	## Run Groovy cucumber Specs
	@docker build -t groovy_cucumber -f $(GROOVY_DIR)/Dockerfile $(GROOVY_DIR)
	@docker run groovy_cucumber
