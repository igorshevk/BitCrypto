import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the settingsPage state domain
 */

const selectSettingsPageDomain = state => state.settingsPage || initialState;

/**
 * Other specific selectors
 */

const makeNameSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.name,
  );

const makeSurnameSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.surname,
  );

const makeEmailSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.email,
  );

const makeNewPasswordSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.newPassword,
  );

const makeNewNameSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.newName,
  );

const makeNewSurnameSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.newSurname,
  );

const makeNewEmailSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.newEmail,
  );

const makeErrorPasswordSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.errorPassword,
  );

const makeErrorNameSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.errorName,
  );

const makeErrorSurnameSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.errorSurname,
  );

const makeErrorEmailSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.errorEmail,
  );

const makeErrorSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.error,
  );

const makeMessageSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.message,
  );

const makeCurrencySelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.currency,
  );

const makeCurrencyIdSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.currencyId,
  );

const makeNewCurrencyIdSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.newCurrencyId,
  );

const makeCurrencyMessageSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.currencyMessage,
  );

const makeIsOpenAlertSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.isOpenAlert,
  );

const makeIsLoadingSelector = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate.isLoading,
  );

/**
 * Default selector used by SettingsPage
 */

const makeSelectSettingsPage = () =>
  createSelector(
    selectSettingsPageDomain,
    substate => substate,
  );

const makeDepositsAmountSelector = () => 
  createSelector(
    selectSettingsPageDomain,
    substate => substate.depositsAmount,
  );
const makeDepositsCurrency = () =>
  createSelector(
    selectSettingsPageDomain,
    substate=> substate.depositsCurrency,
  );
const makeDepositsCurrencyName = () =>
  createSelector(
    selectSettingsPageDomain,
    substate=> substate.depositsCurrencyName,
  );
const makeErrorAmount = () =>
  createSelector(
      selectSettingsPageDomain,
      substate=>substate.errorAmount,
    );
const makeUserID = () =>
  createSelector(
      selectSettingsPageDomain,
      substate=>substate.userID,
    );
const makeCryptoAddress = () =>
  createSelector(
      selectSettingsPageDomain,
      substate=>substate.cryptoAddress,
    );
const makeAddCrptAmount = () =>
  createSelector(
      selectSettingsPageDomain,
      substate=>substate.addCrptAmount,
    );
const makeTotalCrptAmount = () =>
  createSelector(
      selectSettingsPageDomain,
      substate=>substate.totalCrptAmount,
    );
const makeNewCrptStatus = () =>
  createSelector(
      selectSettingsPageDomain,
      substate=>substate.newCrptStatus,
    );
const makeCrptCopyStatus = () =>
  createSelector(
      selectSettingsPageDomain,
      substate=>substate.crptAddressCopyStatus,
    );
export default makeSelectSettingsPage;
export {
  makeNameSelector,
  makeSurnameSelector,
  makeEmailSelector,
  makeNewPasswordSelector,
  makeNewNameSelector,
  makeNewSurnameSelector,
  makeNewEmailSelector,
  makeErrorPasswordSelector,
  makeErrorNameSelector,
  makeErrorSurnameSelector,
  makeErrorEmailSelector,
  makeErrorSelector,
  makeMessageSelector,
  makeCurrencySelector,
  makeCurrencyIdSelector,
  makeNewCurrencyIdSelector,
  makeCurrencyMessageSelector,
  makeIsOpenAlertSelector,
  makeIsLoadingSelector,
  makeDepositsAmountSelector,
  makeDepositsCurrency,
  makeDepositsCurrencyName,
  makeErrorAmount,
  makeUserID,
  makeCryptoAddress,
  makeAddCrptAmount,
  makeTotalCrptAmount,
  makeNewCrptStatus,
  makeCrptCopyStatus,
};
