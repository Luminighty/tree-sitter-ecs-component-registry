import XCTest
import SwiftTreeSitter
import TreeSitterEcsComponentRegistry

final class TreeSitterEcsComponentRegistryTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_ecs_component_registry())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading EcsComponentRegistry grammar")
    }
}
