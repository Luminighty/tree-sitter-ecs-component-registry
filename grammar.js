/**
 * @file EcsComponentRegistry grammar for tree-sitter
 * @author Luminight
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "ecs_component_registry",

  extras: ($) => ["\r", "\t", " "],

  rules: {
    source_file: $ => repeat($.component),

    component: $ => seq(
      $.component_name,
      repeat("\n"),
      repeat($.component_data)
    ),

    component_data: $ => seq(
      choice(
        prec(10, $.tag),
        $.field,
      ),
      repeat("\n")
    ),

    component_name: $ => seq('[', $.identifier, ']'),

    tag: $ => seq("@", choice(
      $.tag_storage,
      $.tag_storage_limit
    )),

    tag_storage: $ => seq("storage", "=", $.tag_storage_value),
    tag_storage_value: $ => choice("dense", "sparse", "flag"),

    tag_storage_limit: $ => seq("limit", "=", $.number),


    field: $ => /[^@\n\[]+/,

    identifier: $ => /[a-zA-Z_]+/,

    number: $ => /\d+/,
  }
});
