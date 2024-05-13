searchState.loadedDescShard("slint", 0, "Slint\nThe scene of items was rendered, but the back buffer was …\nThere is already a rendering notifier set, multiple …\nThe scene of items is about to be rendered.  When OpenGL …\nFactory to create <code>slint::Image</code> from an existing OpenGL …\nThis enum describes the origin to use when rendering a …\nThe bottom-left of the texture is the top-left of the …\nA brush is a data structure that is used to describe how a …\nThis enum describes whether a Window is allowed to be …\nColor represents a color in the Slint run-time, …\nThis trait describes the common public API of a strongly …\nThe model data: A model is a set of rows and each row has …\nError returned from the <code>invoke_from_event_loop()</code> and …\nThe event could not be sent because the event loop was …\nProvides a filtered subset of rows by another <code>Model</code>.\nThis trait is used to obtain references to global …\nThis enum describes a low-level access to specific …\nThe Window will be hidden (default action)\nAn image type that can be displayed by the Image element. …\nThe return value of the <code>spawn_local()</code> function\nThe close request is rejected and the window will be kept …\nThe linear gradient variant of a brush describes the …\nError generated if an image cannot be loaded for any …\nThe position in logical pixels.\nThe size in logical screen pixels.\nA position represented in the coordinate space of logical …\nA size represented in the coordinate space of logical …\nProvides rows that are generated by a map function based …\nA Model is providing Data for the repeated elements with …\nExtension trait with extra methods implemented on types …\nDispatch notifications from a <code>Model</code> to one or several …\nRepresent a handle to a view that listens to changes to a …\nModelRc is a type wrapper for a reference counted …\nThis trait defines the interface that users of a model can …\nThe rendering is done using OpenGL.\nThe event could not be sent because the Slint platform …\nThe Slint Platform does not provide an event loop.\nNo default platform was selected, or no platform could be …\nAnother platform-specific error occurred\nAnother platform-specific error occurred.\nThe position in physical pixels.\nThe size in physical pixels.\nA position represented in the coordinate space of physical …\nA size represented in the coordinate space of physical …\nThe platform encountered a fatal error.\nThe radial gradient variant of a brush describes a circle …\nInternal trait that’s used to map rendering state …\nThe window has been created and the graphics …\nThis enum describes the different rendering states, that …\nThe window will be destroyed and/or graphics resources …\nA Repeated timer is fired repeatedly until it is stopped …\nProvides a reversed view of another <code>Model</code>.\nConvenience alias for a pixel with three color channels …\nConvenience alias for a pixel with four color channels …\nRgbaColor stores the red, green, blue and alpha components …\nThere is already a platform set from another thread.\nThis enum describes the different error scenarios that may …\nSharedPixelBuffer is a container for storing image data as …\nA string type used by the Slint run-time.\nA string type used by the Slint run-time.\nSharedVector holds a reference-counted read-only copy of …\nA SingleShot timer is fired only once.\nThe color variant of brush is a plain color that is to be …\nProvides a sorted view of rows by another <code>Model</code>.\nRepresents an item in a StandardListView and a …\nThis is used to define the column and the column header of …\nTimer is a handle to the timer system that allows …\nThe TimerMode specifies what should happen after the timer …\nThe top-left of the texture is the top-left of the texture …\nThe rendering backend does not support rendering notifiers.\nA <code>Model</code> backed by a <code>Vec&lt;T&gt;</code>\nStruct that’s used to hold weak references of a Slint …\nThe rendering is done on a HTML Canvas element using WebGL.\nThis type represents a window towards the windowing …\nThis struct represents a persistent handle to a window and …\nThe position of the window in either physical or logical …\nThe size of a window represented in either physical or …\nAlpha\nIf the future hasn’t completed yet, this will make the …\nReturns the alpha channel of the color as u8 in the range …\nThe alpha component.\nAndroid backend.\nReturn something that can be downcast’ed (typically self)\nReturns <code>(alpha, red, green, blue)</code> encoded as u32\nReturns the pixels interpreted as raw bytes.\nReturn a slice to the array\nReturn a slice to the pixel data.\nReturn a slice to the string\nReturns a new weak pointer.\nAttach one peer. The peer will be notified when the model …\nAttach one peer. The peer will be notified when the model …\nBlue\nBlue\nReturns the blue channel of the color as u8 in the range …\nThe blue channel.\nReturns a new version of this color that has the …\nReturns a new version of this brush that has the …\nCompletes the process of building a slint::Image that …\nClears the vector and removes all elements.\nCreates a new SharedPixelBuffer by cloning and converting …\nReturns a clone of this handle that’s a strong reference.\nIf the brush is SolidColor, the contained color is …\nReturns a new version of this color that has the …\nReturns a new version of this brush that has the …\nConstruct an empty model\nDispatch a window event to the scene.\nThis is a pseudo module which only exist for documentation …\nExtend the model with the content of the iterator\nAppends all the elements in the slice to the model\nReturns a new Model where the elements are filtered by the …\nThis macro is the same as <code>std::format!</code>, but it returns a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct a color from an integer encoded as <code>0xAARRGGBB</code>\nConstruct a color from the alpha, red, green and blue …\nConstruct a color from the alpha, red, green and blue …\nCreates a new Image from an existing OpenGL texture. The …\nConstruct a color from the hue, saturation, and value HSV …\nConvert a given logical position to a physical position by …\nConvert a given logical size to a physical size by …\nConvert a given physical position to a logical position by …\nConvert a given physical size to a logical size by …\nCreates a new Image from the specified shared pixel …\nConstruct a color from the red, green and blue color …\nConstruct a color from the red, green and blue color …\nCreates a new Image from the specified shared pixel …\nCreates a new Image from the specified shared pixel …\nCreate a SharedVector from a slice\nAllocate a new model from a slice\nGreen\nGreen\nReturns a reference that’s tied to the life time of the …\nThis function provides access to instances of global …\nReturns the green channel of the color as u8 in the range …\nThe green channel.\nReturns true if there is an animation currently active on …\nReturns the height of the image in pixels.\nThe height in logical.\nThe height in physical pixels;\nConvenience function for <code>crate::Window::hide()</code>. Hides the …\nHides the window, so that it is not visible anymore. The …\nThe horizontal column stretch\nInclude the code generated with the slint-build crate from …\nInitialize translations when using the <code>gettext</code> feature.\nInserts a row at position index. All rows after that are …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAdds the specified function to an internal queue, notifies …\nReturn true if the SharedVector is empty\nReturn true if the String is empty\nReturns if the window is currently fullscreen\nReturns if the window is currently maximized\nReturns if the window is currently minimized\nReturns true if this brush is fully opaque\nReturns true if this brush contains a fully transparent …\nReturns the visibility state of the window. This function …\nReturns an iterator visiting all elements of the model.\nNumber of elements in the array\nSize of the string, in bytes. This excludes the …\nLoad an Image from a path to a file containing an image\nCreates a new Image from the specified buffer, which …\nReturns the pixels interpreted as raw bytes.\nReturn a mutable slice to the array. If the array was …\nReturn a mutable slice to the pixel data. If the …\nReturns a new Model where all elements are mapped by the …\nThe minimum column width (logical length)\nReturns a new color that is a mix of this color and <code>other</code>. …\nThe implementation should return a reference to its …\nCreate a new window from a window adapter\nCreates a new MapModel based on the given <code>wrapped_model</code> …\nCreates a new FilterModel based on the given <code>wrapped_model</code> …\nCreates a new SortModel based on the given <code>wrapped_model</code> …\nCreates a new ReverseModel based on the given <code>wrapped_model</code>…\nConstruct a new logical position from the given x and y …\nConstruct a new physical position from the given x and y …\nConstruct a new logical size from the given width and …\nConstruct a new physical size from the width and height …\nCreates a new SharedPixelBuffer with the given width and …\nCreates a new empty string\nCreates a new SortModel based on the given <code>wrapped_model</code> …\nGenerates the base configuration for a borrowed OpenGL …\nCalled to notify that rendering has reached a certain …\nThis function allows registering a callback that’s …\nConfigures the texture to be rendered vertically mirrored.\nReturns the path of the image on disk, if it was …\nThis module contains items that you need to use or …\nRemoves last element from the array and returns it. If the …\nReturns the position of the window on the screen, in …\nAdd an element to the array. If the array was shared, this …\nAdd a row at the end of the model\nAppend a string to this string\nSchedules the main event loop for termination. This …\nRed\nRed\nReturns the red channel of the color as u8 in the range …\nThe red channel.\nRemove the row at the given index from the model\nThis function issues a request to the windowing system to …\nManually reapply the filter. You need to run this e.g. if …\nManually reapply the sorting. You need to run this e.g. if …\nNotify the peer that the model has been changed in some …\nResize the array to the given size. If the array was …\nRestarts the timer. If the timer was previously started by …\nReturns a new Model where the elements are reversed. This …\nNotify the peers that rows were added\nNotify the peers that a specific row was changed\nThe number of rows in the model\nReturns the data for a particular row.\nConvenience function that calls …\nNotify the peers that rows were removed\nThis is a convenience function that first calls <code>Self::show</code>…\nEnters the main event loop. This is necessary in order to …\nSimilar to <code>run_event_loop()</code>, but this function enters the …\nReturns true if the timer is running; false otherwise.\nThis function returns the scale factor that allows …\nSet or unset the window to display fullscreen.\nChange the duration of timer. If the timer was previously …\nMaximize or unmaximize the window.\nMinimize or unminimze the window.\nSets the nine-slice edges of the image.\nSets the position of the window on the screen, in physical …\nThis function allows registering a callback that’s …\nSets the data for a particular row.\nResizes the window to the specified size on the screen, in …\nReplace inner Vec with new data\nConvenience function for <code>crate::Window::show()</code>. This shows …\nShows the window on the screen. An additional strong …\nStarts the timer with the duration, in order for the …\nReturns the size of the window on the screen, in physical …\nReturns the size of the image in pixels.\nReturns the size of the Image in pixels.\nThis macro allows you to use the Slint design markup …\nReturns a new Model where the elements are sorted …\nReturns a new Model where the elements are sorted by the …\nSorts the column\nReturns a reference to the inner model\nReturns a reference to the inner model\nReturns a reference to the inner model\nReturns a reference to the inner model\nSpawns a Future to execute in the Slint event loop.\nStarts the timer with the given mode and interval, in …\nStops the previously started timer. Does nothing if the …\nThe text content of the item\nThe title of the column header\nConverts this color to an RgbaColor struct for easy …\nConverts this color to an RgbaColor struct for easy …\nConverts this color to the HSV color space.\nConvert this physical position to a logical position by …\nConvert this physical size to a logical size by dividing …\nTurn the <code>WindowSize</code> into a <code>LogicalSize</code>.\nConvert this logical position to a physical position by …\nTurn the <code>WindowPosition</code> into a <code>PhysicalPosition</code>.\nConvert this logical size to a physical size by …\nTurn the <code>WindowSize</code> into a <code>PhysicalSize</code>.\nRegister the model as a dependency to the current binding …\nRegister a row as a dependency to the current binding …\nReturns a new version of this color with the opacity …\nReturns a new version of this brush with the opacity …\nGets the row index of the underlying unfiltered model for …\nGets the row index of the underlying unsorted model for a …\nConvenience function that returns a new strongly …\nReturns a new strongly referenced component if some other …\nConvenience function that combines <code>invoke_from_event_loop()</code>…\nReturns the width of the image in pixels.\nThe width in logical pixels.\nThe width in physical pixels.\nthe actual width of the column (logical length)\nReturns the Window associated with this component. The …\nReturns a struct that implements the raw window handle …\nReturns a new version of this color with the opacity set …\nReturns a new version of this brush with the related color…\nCreate a new empty array with a pre-allocated capacity in …\nThe x coordinate.\nThe x coordinate.\nThe y coordinate.\nThe y coordinate.\nThe DOM element id of the HTML Canvas element used for …\nThe drawing context type used on the HTML Canvas element …\nUse this function pointer to obtain access to the OpenGL …\nRe-export of AndroidApp from the android-activity crate.\nRe-export of the android-activity crate.\nInitializes the Android backend.\nSimilar to <code>init()</code>, which allow to listen to …\nFeature flags and backend selection.\nThis module exists only to explain the API of the code …\nSlint on Microcontrollers\nType Mappings\nThis an example of the API that is generated for a …\nReturns a new weak pointer.\nReturns a clone of this handle that’s a strong reference.\nReturns the argument unchanged.\nA getter is generated for each property declared at the …\nReturns the value of the <code>user_name</code> property declared in …\nThis function provides access to instances of global …\nConvenience function for <code>crate::Window::hide()</code>. Hides the …\nCalls <code>U::from(self)</code>.\nFor each callback declared at the root of the component, a …\nCreates a new instance that is reference counted and …\nFor each callback declared at the root of the component, a …\nThis is a convenience function that first calls <code>Self::show</code>…\nA setter is generated for each property declared at the …\nAssigns a new value to the <code>user_name</code> property.\nConvenience function for <code>crate::Window::show()</code>. This shows …\nReturns the Window associated with this component. The …\nThe platform has been initialized in an earlier call to …\nThe clip board, used in <code>Platform::clipboard_text</code> and …\nThe user requested to close the window.\nThis is the default clipboard used for text action for …\nTrait that is returned by the …\nThe <code>Key</code> enum is used to map a specific key by name e.g. …\nA key press was auto-repeated.\nA key was pressed.\nA key was released.\nThis struct describes layout constraints of a resizable …\nThe left button.\nThe center button.\nThe Slint Platform does not provide an event loop.\nNo default platform was selected, or no platform could be …\nAnother platform-specific error occurred\nA button that is none of left, right or middle. For example\nAnother platform-specific error occurred.\nThis trait defines the interface between Slint and …\nThe platform encountered a fatal error.\nThis enum describes the different types of buttons for a …\nThe pointer exited the window.\nThe position of the pointer has changed.\nA pointer was pressed.\nA pointer was released.\nThe wheel button of a mouse was rotated to initiate …\nThis trait represents a Renderer that can render a slint …\nThe window was resized.\nThe right button.\nThe window’s scale factor has changed. This can happen …\nThis is the clipboard that is used when text is selected …\nThis enum describes the different error scenarios that may …\nThere is already a platform set from another thread.\nThe Window was activated or de-activated.\nThis trait represents the adaptation layer between the …\nA event that describes user input or windowing system …\nThis struct contains getters that provide access to …\nThe background color or brush of the Window\nReturns the current interval to internal measure the …\nReturns a copy of text stored in the system clipboard, if …\nInstantiate a window for a component.\nThis function is called when debug() is used in .slint …\nRe-implement this to support exposing raw display handles …\nReturns the current time as a monotonic duration since the …\nReturns the duration before the next timer is expected to …\nThis module contains the <code>femtovg_renderer::FemtoVGRenderer</code> …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns true if the window should be shown fullscreen; …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nInvoke the function from the event loop.\nReturns true if the window should be shown fullscreen; …\ntrue if the window is in a maximized state, otherwise false\ntrue if the window is in a minimized state, otherwise false\nReturns the layout constraints of the window\nThe maximum size.\nThe minimum size.\nReturn an <code>EventLoopProxy</code> that can be used to send event to …\nReturns the position of the window on the screen, in …\nThe position of the cursor for this event, if any\nThe preferred size.\nExits the event loop.\nReturn the renderer.\nIssues a request to the windowing system to re-render the …\nSpins an event loop and renders the visible windows.\nSends the given text into the system clipboard.\nSet the Slint platform abstraction.\nSets the position of the window on the screen, in physical …\nRequest a new size for the window to the specified size on …\nShow the window if the argument is true, hide otherwise.\nReturn the size of the Window on the screen\nThis module contains the <code>SoftwareRenderer</code> and related …\nReturns the Window’s title\nCall this function to update and potentially activate any …\nRe-implement this function to update the properties such …\nReturns the window API.\nRe-implement this to support exposing raw window handles …\nThe button that was pressed.\nThe button that was released.\nThe amount of logical pixels to scroll in the horizontal …\nThe amount of logical pixels to scroll in the vertical …\nThe window system provided scale factor to map logical …\nThe new logical size of the window\nThe unicode representation of the key pressed.\nThe unicode representation of the key pressed.\nThe unicode representation of the key released.\nUse the FemtoVG renderer when implementing a custom Slint …\nThis trait describes the interface GPU accelerated …\nEnsures that the OpenGL context is current when returning …\nReturns the argument unchanged.\nReturns the address of the OpenGL function specified by …\nCalls <code>U::from(self)</code>.\nCreates a new renderer that renders using OpenGL. An …\nRender the scene using OpenGL.\nThis function is called by the renderers when the surface …\nThis function is called by the renderers when all OpenGL …\nThis trait defines a bi-directional interface between …\nThis is a minimal adapter for a Window that doesn’t have …\nThe full window is always redrawn. No attempt at partial …\nRepresents a rectangular region on the screen, used for …\nA color whose component have been pre-multiplied by alpha\nThis enum describes which parts of the buffer passed to …\nOnly redraw the parts that have changed since the previous …\nA 16bit pixel that has 5 red bits, 6 green bits and  5 …\nA Renderer that do the rendering in software\nRedraw the part that have changed since the last two …\nTrait for the pixels in the buffer\nThe pixel type of the buffer\nPixel which will be filled as the background in case the …\nBlend a single pixel with a color\nBlend a color to all the pixel in the slice.\nReturns the origin of the bounding box of this region.\nReturns the size of the bounding box of this region.\nIf the window needs to be redrawn, the callback will be …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a pixel from the red, gree, blue component in the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns an iterator over the rectangles in this region. …\nCreate a new Renderer\nInstantiate a new MinimalWindowAdaptor\nCreate a new SoftwareRenderer.\nCalled once per line, you will have to call the render_fn …\nRender the window to the given frame buffer.\nRender the window, line by line, into the line buffer …\nReturns the kind of buffer that must be passed to  …\nChange the what kind of buffer is being passed to …")