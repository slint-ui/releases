window.SIDEBAR_ITEMS = {"enum":[["Brush","(Re-export from corelib.) A brush is a data structure that is used to describe how a shape, such as a rectangle, path or even text, shall be filled. A brush can also be applied to the outline of a shape, that means the fill of the outline itself."],["CloseRequestResponse","This enum describes whether a Window is allowed to be hidden when the user tries to close the window. It is the return type of the callback provided to [Window::on_close_requested]."],["DiagnosticLevel","This enum describes the level or severity of a diagnostic message produced by the compiler."],["EventLoopError","Error returned from the [`invoke_from_event_loop()`] and [`quit_event_loop()`] function"],["GetPropertyError","Error returned by [`ComponentInstance::get_property`]"],["GraphicsAPI","This enum describes a low-level access to specific graphics APIs used by the renderer."],["InvokeError","Error returned by [`ComponentInstance::invoke`]"],["RenderingState","This enum describes the different rendering states, that will be provided to the parameter of the callback for `set_rendering_notifier` on the `slint::Window`."],["SetCallbackError","Error returned by [`ComponentInstance::set_callback`]"],["SetPropertyError","Error returned by [`ComponentInstance::set_property`]"],["SetRenderingNotifierError","This enum describes the different error scenarios that may occur when the application registers a rendering notifier on a `crate::Window`."],["Value","This is a dynamically typed value used in the Slint interpreter. It can hold a value of different types, and you should use the [`From`] or [`TryFrom`] traits to access the value."],["ValueType","This enum represents the different public variants of the [`Value`] enum, without the contained values."],["WindowPosition","The position of the window in either physical or logical pixels. This is used with [`Window::set_position`]."],["WindowSize","The size of a window represented in either physical or logical pixels. This is used with [`Window::set_size`]."]],"fn":[["invoke_from_event_loop","Adds the specified function to an internal queue, notifies the event loop to wake up. Once woken up, any queued up functors will be invoked."],["print_diagnostics","Print the diagnostics to stderr"],["quit_event_loop","Schedules the main event loop for termination. This function is meant to be called from callbacks triggered by the UI. After calling the function, it will return immediately and once control is passed back to the event loop, the initial call to `slint::run_event_loop()` will return."],["run_event_loop","Enters the main event loop. This is necessary in order to receive events from the windowing system in order to render to the screen and react to user input."]],"macro":[["ModelAdaptorVTable_static","Instantiate a static ModelAdaptorVTable for a given type and implements `vtable::HasStaticVTable<ModelAdaptorVTable>` for it."]],"struct":[["Color","(Re-export from corelib.) Color represents a color in the Slint run-time, represented using 8-bit channels for red, green, blue and the alpha (opacity). It can be conveniently converted using the `to_` and `from_` (a)rgb helper functions:"],["ComponentCompiler","ComponentCompiler is the entry point to the Slint interpreter that can be used to load .slint files or compile them on-the-fly from a string."],["ComponentDefinition","ComponentDefinition is a representation of a compiled component from .slint markup."],["ComponentInstance","This represent an instance of a dynamic component"],["Diagnostic","This structure represent a diagnostic emitted while compiling .slint code."],["LogicalPosition","A position represented in the coordinate space of logical pixels. That is the space before applying a display device specific scale factor."],["LogicalSize","A size represented in the coordinate space of logical pixels. That is the space before applying a display device specific scale factor."],["PhysicalPosition","A position represented in the coordinate space of physical device pixels. That is the space after applying a display device specific scale factor to pixels from the logical coordinate space."],["PhysicalSize","A size represented in the coordinate space of physical device pixels. That is the space after applying a display device specific scale factor to pixels from the logical coordinate space."],["SharedString","(Re-export from corelib.) A string type used by the Slint run-time."],["SharedVector","(Re-export from corelib.) SharedVector holds a reference-counted read-only copy of `[T]`."],["Struct","This type represents a runtime instance of structure in `.slint`."],["Weak","Struct that’s used to hold weak references of a Slint component"],["Window","This type represents a window towards the windowing system, that’s used to render the scene of a component. It provides API to control windowing system specific aspects such as the position on the screen."]],"trait":[["ComponentHandle","This trait describes the common public API of a strongly referenced Slint component. It allows creating strongly-referenced clones, a conversion into/ a weak pointer as well as other convenience functions."],["Global","This trait is used to obtain references to global singletons exported in `.slint` markup. Alternatively, you can use [`ComponentHandle::global`] to obtain access."],["RenderingNotifier","Internal trait that’s used to map rendering state callbacks to either a Rust-API provided impl FnMut or a struct that invokes a C callback and implements Drop to release the closure on the C++ side."]],"type":[["InvokeCallbackError","deprecated alias to [`InvokeError`]"]]};