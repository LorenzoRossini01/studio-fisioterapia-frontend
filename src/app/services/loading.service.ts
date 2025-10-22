import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private _activeRequests = signal(0);

  // esposto per i componenti
  isLoading = computed(() => this._activeRequests() > 0);

  start() {
    this._activeRequests.update((count) => count + 1);
  }

  stop() {
    this._activeRequests.update((count) => Math.max(0, count - 1));
  }
}
