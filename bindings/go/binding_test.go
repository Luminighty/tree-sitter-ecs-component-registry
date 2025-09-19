package tree_sitter_ecs_component_registry_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_ecs_component_registry "github.com/luminighty/tree-sitter-ecs-component-registry/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_ecs_component_registry.Language())
	if language == nil {
		t.Errorf("Error loading EcsComponentRegistry grammar")
	}
}
