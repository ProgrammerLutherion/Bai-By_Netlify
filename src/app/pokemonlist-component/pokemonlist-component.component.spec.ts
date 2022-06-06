import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonlistComponentComponent } from './pokemonlist-component.component';

describe('PokemonlistComponentComponent', () => {
  let component: PokemonlistComponentComponent;
  let fixture: ComponentFixture<PokemonlistComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonlistComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonlistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
