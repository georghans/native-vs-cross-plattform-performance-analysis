//
//  ContentView.swift
//  Shared
//
//  Created by Georg Hans on 15

import Foundation
import SwiftUI

struct ContentView: View {
    // 1.
    @ObservedObject var fetch = FetchToDo()
    var body: some View {
        VStack {
            // 2.
            List(fetch.todos) { todo in
                VStack(alignment: .leading) {
                    // 3.
                    Text(todo.title)
                    Text("\(todo.completed.description)") // print boolean
                        .font(.system(size: 11))
                        .foregroundColor(Color.gray)
                }
            }
        }
    }
}
