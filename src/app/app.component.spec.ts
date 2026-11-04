import { TestBed } from "@angular/core/testing";
import { LeafletModule } from "@bluehalo/ngx-leaflet";
import { AppComponent } from "./app.component";

declare let L;

describe("AppComponent", () => {
	let addTo: ReturnType<typeof vi.fn>;
	let routingControl: ReturnType<typeof vi.spyOn>;

	beforeEach(async () => {
		addTo = vi.fn();
		routingControl = vi
			.spyOn(L.Routing, "control")
			.mockReturnValue({ addTo });

		await TestBed.configureTestingModule({
			imports: [LeafletModule],
			declarations: [AppComponent]
		}).compileComponents();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("should create the app", () => {
		const fixture = TestBed.createComponent(AppComponent);
		expect(fixture.componentInstance).toBeTruthy();
	});

	it("should render the leaflet map", () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		expect(
			fixture.nativeElement.querySelector(".leaflet-container")
		).toBeTruthy();
	});

	it("should add a route between the two waypoints when the map is ready", () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();

		expect(routingControl).toHaveBeenCalledTimes(1);
		const { waypoints } = routingControl.mock.calls[0][0];
		expect(waypoints.map(w => [w.lat, w.lng])).toEqual([
			[57.74, 11.94],
			[57.6792, 11.949]
		]);
		expect(addTo).toHaveBeenCalledWith(expect.any(L.Map));
	});
});
